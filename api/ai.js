export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Sadece POST istekleri kabul edilir.' });
  }

  const { prompt } = req.body;
  const API_KEY = process.env.GEMINI_API_KEY; 

  // Eğer Vercel panelinden API anahtarı eklenmemişse direkt uyar
  if (!API_KEY) {
    return res.status(500).json({ error: 'API_KEY_EKSİK', details: 'Vercel ortam değişkenlerinde GEMINI_API_KEY bulunamadı.' });
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();

    // Gemini API'den hata dönerse (Örn: Geçersiz anahtar, kota dolumu)
    if (!response.ok) {
      console.error('Gemini API Hatası:', data);
      return res.status(response.status).json({ error: 'GEMINI_API_HATASI', details: data.error.message });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Sunucu Hatası:', error);
    res.status(500).json({ error: 'Vercel_Fetch_Hatasi', details: error.message });
  }
}
