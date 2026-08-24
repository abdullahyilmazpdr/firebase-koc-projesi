export default async function handler(req, res) {
  // Sadece POST isteklerini kabul et
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { prompt } = req.body;
  
  // API anahtarını güvenli ortam değişkenlerinden alıyoruz (tarayıcı göremez)
  const API_KEY = process.env.GEMINI_API_KEY; 
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    if (!response.ok) {
      throw new Error('Gemini API yanıt vermedi.');
    }

    const data = await response.json();
    // Gelen cevabı frontend'e ilet
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Yapay zeka sunucusuna bağlanılamadı.' });
  }
}