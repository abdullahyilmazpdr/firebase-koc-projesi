import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const type = req.query.type || 'daily';
  
  try {
    // Vercel'deki çevre değişkenlerinden bilgileri çekiyoruz
    const FIREBASE_URL = process.env.FIREBASE_URL; 
    const SECRET = process.env.FIREBASE_SECRET;
    const API_KEY = process.env.GEMINI_API_KEY;

    // Firebase REST API ile kimlik doğrulamaya takılmadan güvenli veri çekimi
    const [profileRes, progressRes, examsRes] = await Promise.all([
      fetch(`${FIREBASE_URL}/profile.json?auth=${SECRET}`),
      fetch(`${FIREBASE_URL}/dailyProgress.json?auth=${SECRET}`),
      fetch(`${FIREBASE_URL}/exams.json?auth=${SECRET}`)
    ]);

    const profile = await profileRes.json() || {};
    const dailyProgress = await progressRes.json() || {};
    const examsObj = await examsRes.json() || {};
    const exams = Object.keys(examsObj).map(k => examsObj[k]).reverse();

    // Mail Gönderici Ayarları (Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_PASS }
    });

    let mailSubject = '';
    let mailHTML = '';

    /* ================= GÜNLÜK ÇALIŞMA RAPORU ================= */
    if (type === 'daily') {
      const daysMap = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
      const now = new Date();
      now.setHours(now.getHours() + 3); // Türkiye Saati (UTC+3)
      const todayName = daysMap[now.getDay()];

      const ACADEMIC_START = new Date(2026, 7, 31);
      const diffTime = Math.max(0, now - ACADEMIC_START);
      const currentWeekIndex = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
      const m = Math.min(9, Math.floor(currentWeekIndex / 4));
      const w = (currentWeekIndex % 4) + 1;

      const progressKey = `${m}-${w}-${todayName}`;
      const todayProgress = dailyProgress[progressKey] || [false, false, false, false];
      const completed = todayProgress.filter(Boolean).length;
      const percent = Math.round((completed / 4) * 100);

      mailSubject = `📅 YKS Koçum Günlük Rapor: %${percent} İlerleme (${todayName})`;
      mailHTML = `
        <div style="font-family: sans-serif; padding: 20px; color: #172033; background: #f8faff; border-radius: 10px;">
          <h2 style="color: #245bb5;">Öğrenci Günlük Çalışma Raporu</h2>
          <p><b>Hedef:</b> ${profile.hedef || '-'} Sıralama | <b>Günlük Hedef:</b> ${profile.saat || '-'} Saat</p>
          <div style="background: #fff; padding: 15px; border-radius: 8px; border-left: 5px solid ${percent === 100 ? '#15966a' : (percent >= 50 ? '#e28b27' : '#dc3545')};">
            <h3 style="margin: 0 0 10px 0;">Bugünkü İlerleme: %${percent}</h3>
            <p style="margin: 0;">Öğrenci planlanan 4 görevin <b>${completed}</b> tanesini tamamladı.</p>
          </div>
          ${percent < 50 ? '<p style="color:#dc3545; font-weight:bold;">⚠️ Uyarı: Öğrenci hedefin oldukça gerisinde kaldı.</p>' : '<p style="color:#15966a; font-weight:bold;">✅ Harika: Öğrenci günlük planına sadık kalıyor.</p>'}
        </div>
      `;
    } 
    /* ================= HAFTALIK YAPAY ZEKA RAPORU ================= */
    else if (type === 'weekly') {
      let progressText = "";
      Object.entries(dailyProgress).slice(-7).forEach(([k, v]) => {
         progressText += `${k} gününde 4 görevden ${v.filter(Boolean).length} tanesi, `;
      });

      const prompt = `Sen YKS koçuna (bana) rapor sunan asistan bir yapay zekasın. Öğrencinin verileri:
      Hedef: ${profile.hedef || '?'} sıralama, Günlük Hedef: ${profile.saat || '?'} saat.
      Son Hafta Görev İlerlemesi: ${progressText || 'Veri yok.'} tamamlandı.
      Son Deneme: ${exams[0] ? `TYT ${exams[0].tyt}, AYT${exams[0].ayt}` : 'Yok'}
      
      Bu verileri analiz et ve koçun e-postasına gidecek çok şık, okunabilir bir rapor hazırla. 
      1. Hafta özeti ve hedeften sapma durumu.
      2. Yeni haftanın planı yapılmadan önce, koça stratejik ipuçları ve önermesi gereken 3 aksiyon maddesi.
      Format: Sadece HTML etiketleri (<h1>, <p>, <ul>, <li> vb.) kullanarak, renkli ve vurgulu şekilde gönder.`;

      const aiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const aiData = await aiRes.json();
      let aiHtml = aiData.candidates[0].content.parts[0].text;
      aiHtml = aiHtml.replace(/```html/g, '').replace(/```/g, ''); // Markdown kodlarını temizle

      mailSubject = `🤖 YKS Koçum Haftalık AI Analizi: Strateji ve İpuçları`;
      mailHTML = `<div style="font-family: sans-serif; padding: 20px;">${aiHtml}</div>`;
    }

    // E-Postayı Gönder
    await transporter.sendMail({
      from: `"YKS Koçum" <${process.env.GMAIL_USER}>`,
      to: "ismailavar78@gmail.com", // Alıcı e-posta adresini buraya sabitledik
      subject: mailSubject,
      html: mailHTML
    });

    return res.status(200).json({ success: true, message: 'Mail başarıyla gönderildi.' });

  } catch (error) {
    console.error('Hata:', error);
    return res.status(500).json({ error: error.message });
  }
}
