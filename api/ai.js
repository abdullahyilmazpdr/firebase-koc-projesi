export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST istekleri kabul edilir.' });
  }

  const { prompt } = req.body;
  const API_KEY = process.env.GEMINI_API_KEY; 

  if (!API_KEY) {
    return res.status(500).json({ error: 'API_KEY_EKSİK', details: 'Vercel ortam değişkenlerinde GEMINI_API_KEY bulunamadı.' });
  }

  // Yedekli model listesi (Sistem sırasıyla bunları deneyecek)
  const models = ['gemini-3.6-pro', 'gemini-3.6-flash', 'gemini-3.5-pro', 'gemini-3.5-flash','gemini-3.6-flash-lite','gemini-3.5-flash-lite'];
  let lastError = null;

  for (const model of models) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      const data = await response.json();

      // Eğer başarılıysa hemen sonucu frontend'e gönder ve döngüyü bitir
      if (response.ok) {
        return res.status(200).json(data);
      }

      // Eğer hata 503 (Yoğunluk), 429 (Kota) veya 500 (Sunucu) ise diğer modele geç
      if (response.status === 503 || response.status === 429 || response.status === 500) {
        console.warn(`⚠️ ${model} başarısız oldu (${response.status}). Diğer modele geçiliyor...`);
        lastError = data.error?.message || 'Geçici yoğunluk';
        continue; // Döngüye devam et, sıradaki modeli dene
      } else {
        // 400 (Kötü İstek - Hatalı JSON vs.) gibi kritik bir hataysa boşuna diğerlerini deneme, direkt durdur
        return res.status(response.status).json({ error: 'GEMINI_API_HATASI', details: data.error?.message || 'Bilinmeyen hata' });
      }

    } catch (error) {
      console.error(`Sunucu Fetch Hatası (${model}):`, error);
      lastError = error.message;
      continue; // Ağ bağlantısı kopsa bile pes etme, diğer modele geç
    }
  }

  // Tüm modeller denendi ve hepsi çöktüyse frontend'e kibar bir uyarı gönder
  return res.status(503).json({ 
    error: 'TUM_MODELLER_MESGUL', 
    details: `Yapay zeka sunucularında geçici bir yoğunluk var. Lütfen 1-2 dakika sonra tekrar dene.` 
  });
}
