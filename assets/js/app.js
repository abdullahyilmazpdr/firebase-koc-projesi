/* ---- Güncel ÖSYM/MEB TYT-AYT müfredatı (2026) ----
   Her konu: {id, name, w} — w = zorluk/kapsam ağırlığı (1 hafif, 2 orta, 3 yoğun)
   AYT konularında opsiyonel prereq: bağlı olduğu TYT (veya kendi dersindeki başka bir AYT) konu id'si.
   Sayısal (MF-3) puan türünde olduğu için AYT'de sadece Matematik, Fizik, Kimya, Biyoloji var. */
const CATALOG = {
  matematik: {
    tytLabel: "TYT Matematik", aytLabel: "AYT Matematik",
    tyt: [
      {id: "tm1", name: "Sayı Basamakları ve Bölünebilme", w: 1},
      {id: "tm2", name: "Rasyonel Sayılar", w: 1},
      {id: "tm3", name: "Basit Eşitsizlikler ve Mutlak Değer", w: 1},
      {id: "tm4", name: "Üslü Sayılar", w: 2},
      {id: "tm5", name: "Köklü Sayılar", w: 2},
      {id: "tm6", name: "Çarpanlara Ayırma", w: 2},
      {id: "tm7", name: "Oran-Orantı", w: 1},
      {id: "tm8", name: "Denklem Çözme (1. ve 2. derece)", w: 2},
      {id: "tm9", name: "Problemler (Sayı-Kesir-Yaş-Hareket-Yüzde-Kar/Zarar-Karışım-Grafik)", w: 3},
      {id: "tm10", name: "Kümeler", w: 1},
      {id: "tm11", name: "Fonksiyonlar", w: 3},
      {id: "tm12", name: "Permütasyon-Kombinasyon-Olasılık", w: 2},
      {id: "tm13", name: "Veri ve İstatistik", w: 1}],
    ayt: [
      {id: "am1", name: "Fonksiyonlarda Uygulamalar (Bileşke, Ters Fonksiyon)", w: 3, prereq: "tm11"},
      {id: "am2", name: "Polinomlar", w: 2, prereq: "tm6"},
      {id: "am3", name: "2. Dereceden Denklemler", w: 2, prereq: "tm8"},
      {id: "am4", name: "Parabol", w: 2, prereq: "am3"},
      {id: "am5", name: "Eşitsizlik Sistemleri", w: 1, prereq: "tm3"},
      {id: "am6", name: "Trigonometri", w: 3},
      {id: "am7", name: "Logaritma", w: 2, prereq: "tm4"},
      {id: "am8", name: "Diziler", w: 2},
      {id: "am9", name: "Limit ve Süreklilik", w: 2, prereq: "am1"},
      {id: "am10", name: "Türev", w: 3, prereq: "am9"},
      {id: "am11", name: "İntegral", w: 3, prereq: "am10"}]
  },
  geometri: {
    tytLabel: "TYT Geometri", aytLabel: null,
    tyt: [
      {id: "tg1", name: "Doğruda ve Üçgende Açılar", w: 1},
      {id: "tg2", name: "Üçgende Alan-Kenar Bağıntıları, Özel Üçgenler", w: 3},
      {id: "tg3", name: "Çokgenler", w: 1},
      {id: "tg4", name: "Dörtgenler (Paralelkenar, Yamuk, Eşkenar D.)", w: 2},
      {id: "tg5", name: "Çember ve Daire", w: 2},
      {id: "tg6", name: "Katı Cisimler", w: 2},
      {id: "tg7", name: "Analitik Geometri (Nokta-Doğru)", w: 2}],
    ayt: []
  },
  turkce: {
    tytLabel: "TYT Türkçe", aytLabel: null,
    tyt: [
      {id: "tt1", name: "Sözcükte Anlam", w: 1},
      {id: "tt2", name: "Cümlede Anlam", w: 2},
      {id: "tt3", name: "Paragrafta Anlam, Yorum, Konu-Ana Düşünce", w: 3},
      {id: "tt4", name: "Paragrafta Yapı ve Anlatım Teknikleri", w: 2},
      {id: "tt5", name: "Dil Bilgisi (Ses-Yapı-Sözcük Türleri-Cümlenin Ögeleri)", w: 3},
      {id: "tt6", name: "Anlatım Bozuklukları", w: 2},
      {id: "tt7", name: "Yazım Kuralları ve Noktalama", w: 1}],
    ayt: []
  },
  fizik: {
    tytLabel: "TYT Fizik", aytLabel: "AYT Fizik",
    tyt: [
      {id: "tf1", name: "Fizik Bilimine Giriş", w: 1},
      {id: "tf2", name: "Madde ve Özellikleri", w: 1},
      {id: "tf3", name: "Hareket ve Kuvvet", w: 2},
      {id: "tf4", name: "İş, Güç ve Enerji", w: 2},
      {id: "tf5", name: "Isı, Sıcaklık ve Genleşme", w: 1},
      {id: "tf6", name: "Elektrostatik ve Elektrik Akımı", w: 2},
      {id: "tf7", name: "Basınç ve Kaldırma Kuvveti", w: 1},
      {id: "tf8", name: "Dalgalar ve Optik", w: 2}],
    ayt: [
      {id: "af1", name: "Vektörler ve Bağıl Hareket", w: 1, prereq: "tf3"},
      {id: "af2", name: "Kuvvet, Tork ve Denge", w: 2, prereq: "tf3"},
      {id: "af3", name: "Çembersel Hareket ve Basit Harmonik Hareket", w: 2, prereq: "af2"},
      {id: "af4", name: "İtme ve Momentum", w: 2},
      {id: "af5", name: "İş-Güç-Enerji (İleri)", w: 2, prereq: "tf4"},
      {id: "af6", name: "Elektrik ve Manyetizma", w: 3, prereq: "tf6"},
      {id: "af7", name: "Elektromanyetik İndükleme ve Alternatif Akım", w: 2, prereq: "af6"},
      {id: "af8", name: "Dalga Mekaniği (İleri)", w: 2, prereq: "tf8"},
      {id: "af9", name: "Optik (İleri)", w: 2, prereq: "tf8"},
      {id: "af10", name: "Modern Fizik", w: 2}]
  },
  kimya: {
    tytLabel: "TYT Kimya", aytLabel: "AYT Kimya",
    tyt: [
      {id: "tk1", name: "Kimya Bilimi", w: 1},
      {id: "tk2", name: "Atom ve Periyodik Sistem", w: 2},
      {id: "tk3", name: "Kimyasal Türler Arası Etkileşimler", w: 2},
      {id: "tk4", name: "Kimyanın Temel Kanunları ve Mol Kavramı", w: 2},
      {id: "tk5", name: "Maddenin Halleri ve Karışımlar", w: 2},
      {id: "tk6", name: "Asit-Baz-Tuz", w: 2},
      {id: "tk7", name: "Kimya Her Yerinde (temel düzey)", w: 1}],
    ayt: [
      {id: "ak1", name: "Modern Atom Teorisi", w: 2, prereq: "tk2"},
      {id: "ak2", name: "Gazlar", w: 2},
      {id: "ak3", name: "Sıvı Çözeltiler ve Çözünürlük", w: 2, prereq: "tk5"},
      {id: "ak4", name: "Kimyasal Tepkimelerde Enerji (Termokimya)", w: 2},
      {id: "ak5", name: "Kimyasal Tepkimelerde Hız (Kinetik)", w: 2},
      {id: "ak6", name: "Kimyasal Denge", w: 3},
      {id: "ak7", name: "Asit-Baz Dengesi", w: 2, prereq: "tk6"},
      {id: "ak8", name: "Çözünürlük Dengesi", w: 1, prereq: "ak6"},
      {id: "ak9", name: "Elektrokimya", w: 2},
      {id: "ak10", name: "Karbon Kimyasına Giriş ve Organik Kimya", w: 3}]
  },
  biyoloji: {
    tytLabel: "TYT Biyoloji", aytLabel: "AYT Biyoloji",
    tyt: [
      {id: "tb1", name: "Canlıların Ortak Özellikleri", w: 1},
      {id: "tb2", name: "Hücre", w: 3},
      {id: "tb3", name: "Canlıların Sınıflandırılması", w: 1},
      {id: "tb4", name: "Hücre Bölünmeleri (Mitoz-Mayoz)", w: 2},
      {id: "tb5", name: "Kalıtım (Mendel Genetiği)", w: 3},
      {id: "tb6", name: "Ekosistem Ekolojisi", w: 2}],
    ayt: [
      {id: "ab1", name: "Sinir Sistemi", w: 2, prereq: "tb2"},
      {id: "ab2", name: "Endokrin Sistem ve Hormonlar", w: 2},
      {id: "ab3", name: "Duyu Organları", w: 1},
      {id: "ab4", name: "Destek ve Hareket Sistemi", w: 1},
      {id: "ab5", name: "Sindirim Sistemi", w: 1},
      {id: "ab6", name: "Dolaşım ve Bağışıklık Sistemi", w: 2},
      {id: "ab7", name: "Solunum Sistemi", w: 1},
      {id: "ab8", name: "Üriner Sistem (Boşaltım)", w: 1},
      {id: "ab9", name: "Üreme Sistemi ve Embriyonik Gelişim", w: 2},
      {id: "ab10", name: "Komünite ve Popülasyon Ekolojisi", w: 2, prereq: "tb6"},
      {id: "ab11", name: "Genden Proteine", w: 3, prereq: "tb5"},
      {id: "ab12", name: "Canlılarda Enerji Dönüşümleri (Fotosentez-Solunum)", w: 3},
      {id: "ab13", name: "Bitki Biyolojisi", w: 2}]
  }
};
const MONTHS_META = [{label: "Eylül 2026"}, {label: "Ekim 2026"}, {label: "Kasım 2026"}, {label: "Aralık 2026"}, {label: "Ocak 2027"}, {label: "Şubat 2027"}, {label: "Mart 2027"}, {label: "Nisan 2027"}, {label: "Mayıs 2027"}, {label: "Haziran 2027"}];
const TEACH_MONTHS = 8; 

// 2026-2027 Eğitim Öğretim Yılı Başlangıcı: 31 Ağustos 2026 Pazartesi
const ACADEMIC_START = new Date(2026, 7, 31); // Aylar 0'dan başlar (7 = Ağustos)

function getWeekDateRange(m, w) {
  // Ay (0-9) ve Hafta (1-4) indeksine göre haftanın başlangıç ve bitiş tarihini hesaplar
  const weekOffset = (m * 4) + (w - 1);
  const start = new Date(ACADEMIC_START);
  start.setDate(start.getDate() + (weekOffset * 7));
  
  const end = new Date(start);
  end.setDate(end.getDate() + 6);

  const formatDate = (d) => {
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
  };

  return `${formatDate(start)} - ${formatDate(end)}`;
}

// Hafta Seçici (Dropdown) içeriklerini tarihlerle güncelleyen fonksiyon
function updateWeekOptions(mId, wId) {
  const mSel = document.getElementById(mId);
  const wSel = document.getElementById(wId);
  if (!mSel || !wSel) return;
  
  const m = Number(mSel.value);
  const oldVal = wSel.value || "1"; // Mevcut seçimi koru
  wSel.innerHTML = "";
  for (let w = 1; w <= 4; w++) {
    wSel.innerHTML += `<option value="${w}">${w}. Hafta (${getWeekDateRange(m, w)})</option>`;
  }
  wSel.value = oldVal;
}

// Tarayıcı saatine göre bugünü otomatik bulan fonksiyon
function autoSelectCurrentDay() {
  const dSel = document.getElementById('dailyDaySel');
  if (!dSel) return;
  
  // JavaScript'te haftanın günleri: 0=Pazar, 1=Pazartesi ... 6=Cumartesi
  const daysMap = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  const currentDayName = daysMap[new Date().getDay()];
  dSel.value = currentDayName;
}

function scheduleBranch(key) {
  const b = CATALOG[key];
  const tytQ = b.tyt.slice(), aytQ = b.ayt.slice();
  const totalW = tytQ.reduce((s, t) => s + t.w, 0) + aytQ.reduce((s, t) => s + t.w, 0);
  const sch = {};
  if (totalW === 0) return sch;
  const cap = Math.max(2, Math.ceil(totalW / TEACH_MONTHS));
  const totalTytW = tytQ.reduce((s, t) => s + t.w, 0) || 1;
  let tytDone = 0;
  function eligible(t) {return t.prereq ? (sch[t.prereq] !== undefined) : (tytDone >= totalTytW * 0.45)}
  for (let m = 0; m < TEACH_MONTHS && (tytQ.length || aytQ.length); m++) {
    let load = 0;
    while (load < cap) {
      if (tytQ.length && (load === 0 || load + tytQ[0].w <= cap)) {const t = tytQ.shift(); sch[t.id] = m; load += t.w; tytDone += t.w; continue}
      const idx = aytQ.findIndex(eligible);
      if (idx > -1 && (load === 0 || load + aytQ[idx].w <= cap)) {const t = aytQ.splice(idx, 1)[0]; sch[t.id] = m; load += t.w; continue}
      break;
    }
  }
  [...tytQ, ...aytQ].forEach(t => {if (sch[t.id] === undefined) sch[t.id] = TEACH_MONTHS - 1});
  return sch;
}

const BRANCH_ORDER = ["geometri", "turkce", "fizik", "kimya", "biyoloji", "matematik"];
const SCHEDULE = {};
BRANCH_ORDER.forEach(k => SCHEDULE[k] = scheduleBranch(k));

function weightTag(w) {return w >= 3 ? "🔥 Yoğun" : w === 2 ? "🟡 Orta" : "⚪ Hafif"}
function monthLabel(m) {return m === undefined ? "—" : MONTHS_META[Math.min(m, MONTHS_META.length - 1)].label}
function findTopic(key, id) {const b = CATALOG[key]; return [...b.tyt, ...b.ayt].find(x => x.id === id)}
function topicsForMonth(key, list, m) {
  return list.filter(t => SCHEDULE[key][t.id] === m).map(t => `${t.name} <span class="wtag">(${weightTag(t.w)})</span>`).join(", ");
}

function buildPlan() {
  const area = document.getElementById("planArea");
  if (!area) return;
  MONTHS_META.forEach((mm, m) => {
    const d = document.createElement("div"); d.className = "card month";
    let html = `<h3>${mm.label}</h3>`;
    if (m < TEACH_MONTHS) {
      const lines = [];
      BRANCH_ORDER.forEach(k => {
        const b = CATALOG[k];
        const tytTxt = topicsForMonth(k, b.tyt, m);
        if (tytTxt) lines.push(`<div class="line"><b>${b.tytLabel}</b>${tytTxt}</div>`);
      });
      BRANCH_ORDER.forEach(k => {
        const b = CATALOG[k];
        if (!b.aytLabel) return;
        const aytTxt = topicsForMonth(k, b.ayt, m);
        if (aytTxt) lines.push(`<div class="line"><b>${b.aytLabel}</b>${aytTxt}</div>`);
      });
      html += lines.length ? lines.join("") : `<div class="line muted">Bu ay yeni konu atanmadı; önceki konular pekiştiriliyor.</div>`;
    } else {
      html += `<div class="line"><b>Genel Tekrar</b>Tüm TYT ve AYT konularının tam kapsamlı tekrarı</div><div class="line"><b>Deneme</b>Haftada 2-3 tam deneme + yanlış analizi</div><div class="line"><b>Odak</b>Zayıf konu kapatma ve hız/zaman yönetimi</div>`;
    }
    d.innerHTML = html;
    area.appendChild(d);
  });
}

function buildCur() {
  const area = document.getElementById("cur");
  if (!area) return;
  BRANCH_ORDER.forEach(k => {
    const b = CATALOG[k];
    if (!b.tyt.length) return;
    const d = document.createElement("div"); d.className = "subject"; d.innerHTML = `<h3>${b.tytLabel}</h3>`;
    b.tyt.forEach(t => {
      d.innerHTML += `<div class="topic"><span>${t.name} <span class="wtag">${weightTag(t.w)}</span></span><span class="status">${monthLabel(SCHEDULE[k][t.id])}</span></div>`;
    });
    area.appendChild(d);
  });
  BRANCH_ORDER.forEach(k => {
    const b = CATALOG[k];
    if (!b.aytLabel || !b.ayt.length) return;
    const d = document.createElement("div"); d.className = "subject"; d.innerHTML = `<h3>${b.aytLabel}</h3>`;
    b.ayt.forEach(t => {
      const m = SCHEDULE[k][t.id];
      let cls = "status", label = monthLabel(m);
      if (t.prereq) {const p = findTopic(k, t.prereq); label = `${monthLabel(m)} • Ön koşul: ${p ? p.name : t.prereq}`; cls = "status locked"}
      d.innerHTML += `<div class="topic"><span>${t.name} <span class="wtag">${weightTag(t.w)}</span></span><span class="${cls}">${label}</span></div>`;
    });
    area.appendChild(d);
  });
}

function show(id, btn) {
  document.querySelectorAll(".page").forEach(x => x.classList.remove("active"));
  const targetPage = document.getElementById(id);
  if (targetPage) targetPage.classList.add("active");
  document.querySelectorAll(".nav button").forEach(x => x.classList.remove("active"));
  if (btn) btn.classList.add("active");
}

/* Haftalık Plan */
const DAYS = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
const FEN_BRANCHES = ["fizik", "kimya", "biyoloji"];
function ytLink(q) {return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`}
function monthTopics(key, level, m) {
  const b = CATALOG[key]; const list = level === "tyt" ? b.tyt : b.ayt;
  return list.filter(t => SCHEDULE[key][t.id] === m);
}

/* ================= DİNAMİK VE YAPAY ZEKA DESTEKLİ HAFTALIK PLAN ================= */
function renderWeeklyPlan() {
  const mSel = document.getElementById('weekSel');
  const wSel = document.getElementById('subWeekSel');
  const area = document.getElementById("weekArea");
  if (!area || !mSel || !wSel) return;

  const m = Number(mSel.value);
  const w = Number(wSel.value);
  const planKey = `${m}-${w}`;
  const planData = weeklyPlansCache[planKey];

  if (m >= TEACH_MONTHS) {
    area.innerHTML = `<div class="notice"><b>📅 ${MONTHS_META[m].label}</b><br>Bu ay yeni konu işlenmiyor: tam kapsamlı TYT+AYT tekrarı ve deneme dönemi.</div>`;
    return;
  }

  // Eğer veritabanında o hafta için plan yoksa:
  if (!planData) {
    const isCoach = window.location.pathname.includes('koc.html');
    if (isCoach) {
      area.innerHTML = `
        <div class="card section" style="text-align:center; padding: 40px 20px;">
          <p class="muted">Bu hafta için henüz bir program oluşturulmamış.</p>
          <button class="aibtn" onclick="generateWeeklyPlanWithAI(${m},${w})" style="padding:12px 24px; font-size:15px; border-radius:10px; font-weight:bold;">
            🤖 Yapay Zeka İle ${w}. Haftayı Planla
          </button>
          <p id="aiPlanStatus" class="muted" style="margin-top:15px;"></p>
        </div>`;
    } else {
      area.innerHTML = `<div class="card section"><p class="muted">Koçunuz ${MONTHS_META[m].label} -${w}. Hafta için henüz bir program oluşturmadı.</p></div>`;
    }
    return;
  }

  // Eğer plan varsa ekrana bas
  area.innerHTML = "";
  DAYS.forEach((day, d) => {
    const blocks = planData[day] || ["Serbest", "Serbest", "Serbest", "Serbest"];
    const trs = blocks.map((b, i) => `<tr><td>${i+1}. Saat</td><td><b>${b}</b></td><td style="text-align:right;"><a class="btnlink secondary" href="${ytLink(b)}" target="_blank">▶ Video Bul</a></td></tr>`).join("");
    
    const card = document.createElement("div"); card.className = "card section";
    const fb = loadWeeklyFb()[`${m}-${w}-${d}`] || '';
    const isCoach = window.location.pathname.includes('koc.html');
    const fbBlock = `<div class="feedback"><label>💬 Öğrenci Geri Bildirimi — ${day}</label><textarea id="fb_${m}_${w}_${d}" placeholder="${isCoach ? 'Öğrenci henüz yazmadı.' : 'Bugünkü plan hakkında yorumun...'}" ${isCoach ? 'readonly' : ''}>${fb}</textarea>${isCoach ? '' : `<div class="actions"><button class="secondary" onclick="saveFeedback(${m},${w},${d})">💾 Kaydet</button></div>`}</div>`;
    
    card.innerHTML = `<h2>🎯 ${day}</h2><div class="tablewrap"><table><thead><tr><th>Blok</th><th>Görev / Konu</th><th style="text-align:right;">Yardımcı</th></tr></thead><tbody>${trs}</tbody></table></div>${fbBlock}`;
    area.appendChild(card);
  });
}

async function generateWeeklyPlanWithAI(m, w) {
  const status = document.getElementById('aiPlanStatus');
  if (!status) return;
  
  status.textContent = `🤖 Yapay Zeka öğrenci eksiklerini analiz edip ${w}. hafta programını yazıyor (Ortalama 15 saniye sürer)...`;

  try {
    // Öğrencinin son denemesinden yanlış yaptığı / eksik olduğu konuları toparla
    let eksikler = [];
    if (examsCache.length > 0 && examsCache[0].details) {
      Object.entries(examsCache[0].details).forEach(([k, v]) => {
        if (v.y > 0 || v.n < 10) eksikler.push(`${k} (Yanlış/Eksik)`);
      });
    }
    const eksikMetni = eksikler.length ? eksikler.join(', ') : 'Belirgin bir eksik yok, doğrudan sıradaki müfredata odaklan.';

    // Bu ay plana alınan konuları toparla
    const ayKonulari = [];
    BRANCH_ORDER.forEach(k => {
      const b = CATALOG[k];
      const tT = b.tyt.filter(t => SCHEDULE[k][t.id] === m).map(t => t.name);
      const aT = b.ayt ? b.ayt.filter(t => SCHEDULE[k][t.id] === m).map(t => t.name) : [];
      if (tT.length) ayKonulari.push(`TYT ${b.tytLabel.split(' ')[1]}:${tT.join(', ')}`);
      if (aT.length) ayKonulari.push(`AYT ${b.aytLabel.split(' ')[1]}:${aT.join(', ')}`);
    });
    const mufredatMetni = ayKonulari.length ? ayKonulari.join(' | ') : 'Sadece genel tekrar ve deneme.';

    // Gemini API'ye gidecek Prompt (Kesinlikle JSON dönmesi için şartlandırıldı)
    const prompt = `Sen profesyonel bir YKS koçusun. Öğrenci için ${MONTHS_META[m].label} ayının ${w}. haftası için 7 günlük detaylı ders çalışma programı hazırlayacaksın.
    Her gün için tam 4 adet 60 dakikalık çalışma bloku planlanmalı.

    Öğrenci Hedefi: ${profileCache.hedef || 'Sayısal'}
    Bu Ayın Müfredatı: ${mufredatMetni}
    Öğrencinin Zayıf Olduğu Alanlar: ${eksikMetni}

    Görev: Zayıf alanlara ağırlık vererek ve müfredatı eriterek 7 günlük bir plan oluştur.
    DİKKAT: Çıktın SADECE VE SADECE aşağıdaki JSON formatında olmalıdır. Hiçbir giriş cümlesi, açıklama veya markdown etiketi KULLANMA. Doğrudan JSON nesnesini ver:
    {
      "Pazartesi": ["1. blok açıklaması", "2. blok açıklaması", "3. blok açıklaması", "4. blok açıklaması"],
      "Salı": ["...", "...", "...", "..."],
      "Çarşamba": ["...", "...", "...", "..."],
      "Perşembe": ["...", "...", "...", "..."],
      "Cuma": ["...", "...", "...", "..."],
      "Cumartesi": ["...", "...", "...", "..."],
      "Pazar": ["...", "...", "...", "..."]
    }`;

    // Vercel üzerindeki kendi backend API'mize istek atıyoruz
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: prompt })
    });

    if (!res.ok) throw new Error('API Hatası');

    const data = await res.json();
    let txt = data.candidates[0].content.parts[0].text.trim();

    // Yapay zeka fazladan markdown eklediyse temizleyip JSON'a çevir
    txt = txt.replace(/```json/g, '').replace(/```/g, '').trim();
    const planJSON = JSON.parse(txt);

    // Başarıyla parse edildiyse Firebase'e kaydet (Kaydolduğunda renderWeeklyPlan otomatik tetiklenecek)
    await dbRef(`weeklyPlans/${m}-${w}`).set(planJSON);
    toast('✅ Yapay zeka haftalık planı başarıyla oluşturdu!');

  } catch (e) {
    console.error(e);
    status.textContent = '⚠️ Plan oluşturulurken bir hata oluştu veya yapay zeka geçersiz format döndürdü. Tekrar dene.';
  }
}

function fillWeekSel() {
  const sel = document.getElementById("weekSel");
  const dailySel = document.getElementById("dailyMonthSel");
  if (sel) sel.innerHTML = "";
  if (dailySel) dailySel.innerHTML = "";

  MONTHS_META.forEach((mm, i) => {
    if (sel) sel.innerHTML += `<option value="${i}">${mm.label}</option>`;
    if (dailySel) dailySel.innerHTML += `<option value="${i}">${mm.label}</option>`;
  });
  
  if (sel) sel.value = "0";
  if (dailySel) dailySel.value = "0";

  // Hafta dropdown'larını yeni hesaplanan tarihlerle doldur
  updateWeekOptions('weekSel', 'subWeekSel');
  updateWeekOptions('dailyMonthSel', 'dailyWeekSel');
  
  // Günlük plan sekmesi için bugünü otomatik seç
  autoSelectCurrentDay();
}

let profileCache = {}, journalCache = [], examsCache = [], weeklyFbCache = {}, messagesCache = [], weeklyPlansCache = {}, dailyProgressCache = {};

const TOPIC_SOURCE = {
  topics_tytTurkce: CATALOG.turkce.tyt,
  topics_tytMat: [...CATALOG.matematik.tyt, ...CATALOG.geometri.tyt],
  topics_tytFen: [...CATALOG.fizik.tyt, ...CATALOG.kimya.tyt, ...CATALOG.biyoloji.tyt],
  topics_aytMat: CATALOG.matematik.ayt,
  topics_aytFiz: CATALOG.fizik.ayt,
  topics_aytKim: CATALOG.kimya.ayt,
  topics_aytBio: CATALOG.biyoloji.ayt
};

function fillTopicSelects() {
  Object.entries(TOPIC_SOURCE).forEach(([id, topics]) => {
    const el = document.getElementById(id); if (!el) return;
    el.innerHTML = topics.map(t => `<option value="${t.name}">${t.name}</option>`).join('');
  });
}

function selectedTopics(id) {
  const el = document.getElementById(id); if (!el) return [];
  return Array.from(el.selectedOptions).map(o => o.value);
}
function val(id) {
  const el = document.getElementById(id);
  if (!el) return 0;
  return Math.max(0, Number(el.value) || 0);
}
function net(d, y) {return Math.max(0, d - y / 4)}

function saveExam() {
  const name = document.getElementById('examName').value.trim() || 'Deneme';
  const date = document.getElementById('examDate').value || new Date().toISOString().slice(0, 10);
  const groups = [
    ['TYT Türkçe', 'tytTurkceD', 'tytTurkceY', 'tytTurkceB', 'topics_tytTurkce'], ['TYT Matematik', 'tytMatD', 'tytMatY', 'tytMatB', 'topics_tytMat'],
    ['TYT Sosyal', 'tytSosD', 'tytSosY', 'tytSosB', null], ['TYT Fen', 'tytFenD', 'tytFenY', 'tytFenB', 'topics_tytFen'],
    ['AYT Matematik', 'aytMatD', 'aytMatY', 'aytMatB', 'topics_aytMat'], ['AYT Fizik', 'aytFizD', 'aytFizY', 'aytFizB', 'topics_aytFiz'],
    ['AYT Kimya', 'aytKimD', 'aytKimY', 'aytKimB', 'topics_aytKim'], ['AYT Biyoloji', 'aytBioD', 'aytBioY', 'aytBioB', 'topics_aytBio']
  ];
  let details = {}, tyt = 0, ayt = 0;
  groups.forEach(g => {let d = val(g[1]), y = val(g[2]), b = val(g[3]), n = net(d, y), topics = g[4] ? selectedTopics(g[4]) : []; details[g[0]] = {d, y, b, n, topics}; if (g[0].startsWith('TYT')) tyt += n; else ayt += n});
  dbRef('exams').push({name, date, tyt: +tyt.toFixed(2), ayt: +ayt.toFixed(2), details})
    .then(() => {updateWeak(details); toast('✅ Deneme kaydedildi. Netler otomatik hesaplandı.');})
    .catch(() => toast('⚠️ Kaydedilemedi, internet bağlantını kontrol et.'));
}

function renderExams() {
  const exams = examsCache, el = document.getElementById('examList'); if (!el) return;
  if (!exams.length) {el.innerHTML = '<p class="muted">Henüz deneme girilmedi.</p>'; return }
  let s = '<table><thead><tr><th>Tarih</th><th>Deneme</th><th>TYT Net</th><th>AYT Net</th><th>Toplam</th></tr></thead><tbody>';
  exams.slice(0, 20).forEach(e => s += `<tr><td>${e.date}</td><td>${e.name}</td><td><b>${e.tyt}</b></td><td><b>${e.ayt}</b></td><td><b>${(e.tyt + e.ayt).toFixed(2)}</b></td></tr>`);
  el.innerHTML = s + '</tbody></table>';
}

function updateWeak(details) {
  let t = [], a = [];
  Object.entries(details).forEach(([k, v]) => {
    if (v.y > 0 || v.n < 10) {
      let line = `${k}: ${v.n.toFixed(2)} net (${v.y} yanlış)`;
      if (v.topics && v.topics.length) line += ` — Konular: ${v.topics.join(', ')}`;
      (k.startsWith('TYT') ? t : a).push(line);
    }
  });
  const tEl = document.getElementById('tytWeak');
  const aEl = document.getElementById('aytWeak');
  if (tEl) tEl.innerHTML = t.length ? t.map(x => `<li>🔴 ${x}</li>`).join('') : '<li>🟢 Belirgin zayıf alan yok</li>';
  if (aEl) aEl.innerHTML = a.length ? a.map(x => `<li>🔴 ${x}</li>`).join('') : '<li>🟢 Belirgin zayıf alan yok</li>';
}

function toast(msg) {
  let t = document.getElementById('toast'); 
  if (!t) return;
  t.textContent = msg; 
  t.style.display = 'block'; 
  setTimeout(() => t.style.display = 'none', 2200);
}

/* ================= Firebase Veri Katmanı ve Dinleyiciler ================= */
function snapToList(snap) {
  const arr = [];
  snap.forEach(c => {
    arr.push(Object.assign({_key: c.key}, c.val()));
  });
  return arr.reverse();
}

function initializeFirebaseListeners() {
  dbRef('profile').on('value', snap => {
    profileCache = snap.val() || {}; 
    fillProfileForm(); 
    renderCoachHome();
  });
  
  dbRef('journal').on('value', snap => {
    journalCache = snapToList(snap); 
    renderJournal(); 
    renderCoachHome();
  });
  
  dbRef('exams').on('value', snap => {
    examsCache = snapToList(snap); 
    renderExams(); 
    if (examsCache[0]) updateWeak(examsCache[0].details); 
    renderCoachHome();
  });
  
  // ⚠️ İŞTE HATA VEREN KISIM BURASIYDI: buildWeekly yerine renderWeeklyPlan kullanıyoruz
  dbRef('weeklyFeedback').on('value', snap => {
    weeklyFbCache = snap.val() || {}; 
    renderWeeklyPlan(); 
    renderCoachHome();
  });
  
  // 📅 YENİ EKLENEN HAFTALIK PLAN DİNLEYİCİSİ
  dbRef('weeklyPlans').on('value', snap => {
    weeklyPlansCache = snap.val() || {}; 
    renderWeeklyPlan(); 
  });

  dbRef('messages').on('value', snap => {
    messagesCache = snapToList(snap); 
    renderSent(); 
    renderInbox();
  });
   
 // Günlük görev ilerlemelerini dinleyen yapı
  dbRef('dailyProgress').on('value', snap => {
    dailyProgressCache = snap.val() || {}; 
    renderDailyPlan(); 
  });
}

/* ---- Öğrenci Fonksiyonları ---- */
function loadProfile() {return profileCache || {}}
function saveProfile() {
  const pfHedef = document.getElementById('pfHedef'), pfBolum = document.getElementById('pfBolum'), pfSaat = document.getElementById('pfSaat'), pfMood = document.getElementById('pfMood');
  if (!pfHedef) return;
  const p = {
    hedef: pfHedef.value, bolum: pfBolum.value,
    saat: pfSaat.value, mood: pfMood.value, updated: new Date().toISOString().slice(0, 10)
  };
  dbRef('profile').set(p).then(() => toast('✅ Bilgilerin kaydedildi.')).catch(() => toast('⚠️ Kaydedilemedi, internet bağlantını kontrol et.'));
}

function fillProfileForm() {
  const p = loadProfile();
  const pfHedef = document.getElementById('pfHedef');
  if (!pfHedef) return;
  pfHedef.value = p.hedef || '';
  document.getElementById('pfBolum').value = p.bolum || '';
  document.getElementById('pfSaat').value = p.saat || '';
  document.getElementById('pfMood').value = p.mood || '';
}

function addJournal() {
  const jText = document.getElementById('journalText');
  if (!jText) return;
  const text = jText.value.trim();
  if (!text) return;
  dbRef('journal').push({date: new Date().toISOString().slice(0, 16).replace('T', ' '), text})
    .then(() => {jText.value = ''; toast('✅ Günlüğe eklendi.');})
    .catch(() => toast('⚠️ Kaydedilemedi.'));
}

function renderJournal() {
  const el = document.getElementById('journalList'); if (!el) return;
  const j = journalCache;
  el.innerHTML = j.length ? j.slice(0, 50).map(e => `<div class="journal-entry"><div class="jdate">${e.date}</div>${e.text}</div>`).join('') : '<p class="muted">Henüz not eklenmedi.</p>';
}

function loadWeeklyFb() {return weeklyFbCache || {}}
function saveFeedback(m, w, d) {
  const el = document.getElementById(`fb_${m}_${w}_${d}`);
  if(!el) return;
  dbRef('weeklyFeedback/' + m + '-' + w + '-' + d).set(el.value).then(() => toast('✅ Geri bildirimin kaydedildi.')).catch(() => toast('⚠️ Kaydedilemedi.'));
}

/* ---- Koç Fonksiyonları ---- */
function loadMessages() {return messagesCache || []}
function sendMessage() {
  const typeEl = document.getElementById('msgType'), textEl = document.getElementById('msgText');
  if (!typeEl || !textEl) return;
  const type = typeEl.value, text = textEl.value.trim();
  if (!text) {toast('⚠️ Önce mesaj yaz.'); return }
  dbRef('messages').push({date: new Date().toISOString().slice(0, 16).replace('T', ' '), type, text})
    .then(() => {textEl.value = ''; toast('✅ Mesaj öğrenciye gönderildi.');})
    .catch(() => toast('⚠️ Gönderilemedi.'));
}

async function draftWithAI() {
  const typeEl = document.getElementById('msgType');
  const status = document.getElementById('aiStatus');
  if (!typeEl || !status) return;

  const type = typeEl.value;
  status.textContent = '🤖 Yapay zeka taslak hazırlıyor, lütfen bekle...';

  try {
    const p = loadProfile();
    const lastExam = examsCache[0];
    const journal = journalCache[0];
    const typeLabel = {
      motivasyon: 'motivasyon mesajı',
      geri_bildirim: 'deneme ve çalışma geri bildirimi',
      ilave: 'ilave çalışma önerisi'
    }[type];

    let ctx = `Hedef: ${p.hedef || 'Belirtilmedi'} sıralama, ${p.bolum || 'Belirtilmedi'} bölümü. Günlük çalışma: ${p.saat || '?'} saat.`;
    if (lastExam) ctx += ` Son deneme (${lastExam.name}): TYT net ${lastExam.tyt}, AYT net ${lastExam.ayt}.`;
    if (journal) ctx += ` Öğrencinin son günlüğe yazdığı not: "${journal.text}"`;

    const prompt = `Sen empatik, motive edici ve profesyonel bir YKS koçusun. Aşağıdaki öğrenci durumunu incele ve öğrenciye doğrudan hitap eden kısa (3-5 cümle), samimi ve teşvik edici bir Türkçe ${typeLabel} taslağı yaz.\n\nÖğrenci Durumu:\n${ctx}`;

    // İstediği kendi güvenli backend rotamıza (api/ai.js) atıyoruz.
    // API anahtarı artık frontend'de yok!
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: prompt })
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.details || 'Sunucu hatası.');
    }

    const data = await res.json();
    const txt = data.candidates[0].content.parts[0].text.trim();

    if (txt) {
      document.getElementById('msgText').value = txt;
      status.textContent = '✅ Taslak hazır, üzerinde düzenleme yapıp gönderebilirsin.';
    } else {
      status.textContent = '⚠️ Taslak alınamadı, boş yanıt döndü.';
    }
  } catch (e) {
    console.error(e);
    status.textContent = '⚠️ Hata oluştu. Bağlantıyı kontrol et.';
  }
}

// YAPAY ZEKA METİN FORMATLAYICI (Hata Korumalı)
function formatText(txt) {
  if (!txt || typeof txt !== 'string') return '';
  return txt.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}

function renderSent() {
  const el = document.getElementById('sentList'); 
  if (!el) return;
  const msgs = loadMessages();
  console.log("Gönderilen mesajlar render ediliyor, adet:", msgs.length);
  try {
    el.innerHTML = msgs.length 
      ? msgs.map(m => `<div class="msg ${m.type}"><div class="mhead"><span class="tag">${msgTag(m.type)}</span><span>${m.date}</span></div>${formatText(m.text)}</div>`).join('') 
      : '<p class="muted">Henüz mesaj gönderilmedi.</p>';
  } catch (e) {
    console.error("renderSent Hatası:", e);
  }
}

function renderInbox() {
  const el = document.getElementById('inboxList'); 
  if (!el) return;
  const msgs = loadMessages();
  console.log("Gelen mesajlar render ediliyor, adet:", msgs.length);
  try {
    el.innerHTML = msgs.length 
      ? msgs.map(m => `<div class="msg ${m.type}"><div class="mhead"><span class="tag">${msgTag(m.type)}</span><span>${m.date}</span></div>${formatText(m.text)}</div>`).join('') 
      : '<p class="muted">Koçundan henüz mesaj gelmedi.</p>';
  } catch (e) {
    console.error("renderInbox Hatası:", e);
  }
}

function msgTag(t) {
  return t === 'motivasyon' ? '💛 Motivasyon' : t === 'geri_bildirim' ? '💬 Geri Bildirim' : '📘 İlave Çalışma';
}

function renderCoachHome() {
  const el = document.getElementById('coachProfileCard'); if (!el) return;
  const p = loadProfile();
  el.innerHTML = `
    <div class="card stat"><small>Hedef Sıralama</small><strong class="blue">${p.hedef || '-'}</strong><small>${p.bolum || ''}</small></div>
    <div class="card stat"><small>Günlük Çalışma</small><strong class="green">${p.saat || '-'}</strong><small>saat</small></div>
    <div class="card stat"><small>Motivasyon</small><strong class="orange">${p.mood || '-'}</strong><small>/10</small></div>
    <div class="card stat"><small>Son Güncelleme</small><strong>${p.updated || '-'}</strong><small>durum bilgisi</small></div>`;
  const j = journalCache.slice(0, 5);
  const coachJournalEl = document.getElementById('coachJournal');
  if (coachJournalEl) coachJournalEl.innerHTML = j.length ? j.map(e => `<div class="journal-entry"><div class="jdate">${e.date}</div>${e.text}</div>`).join('') : '<p class="muted">Öğrenci henüz not eklemedi.</p>';
  const exams = examsCache.slice(0, 5);
  const cEl = document.getElementById('coachExams');
  if (cEl) {
    if (!exams.length) {cEl.innerHTML = '<p class="muted">Henüz deneme girilmedi.</p>';}
    else {
      let s = '<table><thead><tr><th>Tarih</th><th>Deneme</th><th>TYT Net</th><th>AYT Net</th></tr></thead><tbody>';
      exams.forEach(e => s += `<tr><td>${e.date}</td><td>${e.name}</td><td><b>${e.tyt}</b></td><td><b>${e.ayt}</b></td></tr>`);
      cEl.innerHTML = s + '</tbody></table>';
      updateWeakInto(exams[0].details, 'coachTytWeak', 'coachAytWeak');
    }
  }
  const fb = loadWeeklyFb(); const entries = Object.entries(fb).filter(([k, v]) => v && v.trim()).slice(-5).reverse();
  const cWeeklyFbEl = document.getElementById('coachWeeklyFb');
  if (cWeeklyFbEl) cWeeklyFbEl.innerHTML = entries.length ? entries.map(([k, v]) => {const parts = k.split('-'); const m = parts[0], d = parts[1]; return `<div class="journal-entry"><div class="jdate">${MONTHS_META[m].label} • ${DAYS[d]}</div>${v}</div>`}).join('') : '<p class="muted">Henüz geri bildirim yok.</p>';
}

function updateWeakInto(details, tId, aId) {
  let t = [], a = [];
  Object.entries(details).forEach(([k, v]) => {
    if (v.y > 0 || v.n < 10) {let line = `${k}: ${v.n.toFixed(2)} net (${v.y} yanlış)`; if (v.topics && v.topics.length) line += ` — ${v.topics.join(', ')}`; (k.startsWith('TYT') ? t : a).push(line)}
  });
  const tEl = document.getElementById(tId);
  const aEl = document.getElementById(aId);
  if (tEl) tEl.innerHTML = t.length ? t.map(x => `<li>🔴 ${x}</li>`).join('') : '<li>🟢 Belirgin zayıf alan yok</li>';
  if (aEl) aEl.innerHTML = a.length ? a.map(x => `<li>🔴 ${x}</li>`).join('') : '<li>🟢 Belirgin zayıf alan yok</li>';
}

/* ================= GÜNLÜK PLAN CHECK-LIST ================= */
function renderDailyPlan() {
  const area = document.getElementById('dailyArea');
  const mSel = document.getElementById('dailyMonthSel');
  const wSel = document.getElementById('dailyWeekSel');
  const dSel = document.getElementById('dailyDaySel');
  if (!area || !mSel || !wSel || !dSel) return;

  const m = mSel.value;
  const w = wSel.value;
  const day = dSel.value;
  const planKey = `${m}-${w}`;

  const planData = weeklyPlansCache[planKey];
  
  // O haftanın planı yapay zeka tarafından henüz oluşturulmadıysa:
  if (!planData || !planData[day]) {
    area.innerHTML = `<div class="card section"><p class="muted">Seçilen gün için henüz bir plan oluşturulmamış. Koç paneli üzerinden haftalık planın üretilmesi gerekiyor.</p></div>`;
    return;
  }

  const tasks = planData[day];
  const progressKey = `${m}-${w}-${day}`;
  // Veritabanında o gün için işaretleme yoksa varsayılan olarak hepsi false (boş) gelir
  const progress = dailyProgressCache[progressKey] || [false, false, false, false];
  const completedCount = progress.filter(Boolean).length;
  const percent = Math.round((completedCount / tasks.length) * 100) || 0;

  const isCoach = window.location.pathname.includes('koc.html');

  let html = `
    <div class="card section">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
        <h3 style="margin:0; color:#245bb5;">${day} Görevleri</h3>
        <span class="tag" style="font-size:14px; background:${percent === 100 ? '#eaf8f1' : '#eef1f5'}; color:${percent === 100 ? '#15966a' : '#40516b'};">İlerleme: %${percent}</span>
      </div>
      <div class="progress" style="margin-bottom:20px; background:#e8edf5;"><i style="width:${percent}%; background:${percent === 100 ? '#15966a' : '#3b82f6'};"></i></div>
      <div style="display:flex; flex-direction:column; gap:10px;">
  `;

  tasks.forEach((task, idx) => {
    const checked = progress[idx] ? 'checked' : '';
    const disabled = isCoach ? 'disabled' : ''; // Koçlar checkbox'ları sadece görebilir, değiştiremez
    
    html += `
      <label style="display:flex; align-items:center; gap:15px; background:${progress[idx] ? '#f2fbf3' : '#f8faff'}; padding:15px; border-radius:12px; border:1px solid ${progress[idx] ? '#cdeccd' : '#e8edf4'}; cursor:${isCoach ? 'default' : 'pointer'}; transition: 0.2s;">
        <input type="checkbox" ${checked} ${disabled} onchange="toggleDailyTask(${m}, ${w}, '${day}', ${idx}, this.checked)" style="width:22px; height:22px; cursor:pointer;">
        <span style="font-size:15px; color:${progress[idx] ? '#15966a' : '#172033'}; text-decoration:${progress[idx] ? 'line-through' : 'none'};"><b>${idx+1}. Blok:</b> ${task}</span>
      </label>
    `;
  });

  html += `</div></div>`;
  area.innerHTML = html;
}

function toggleDailyTask(m, w, day, idx, isChecked) {
  const progressKey = `${m}-${w}-${day}`;
  const currentProgress = dailyProgressCache[progressKey] || [false, false, false, false];
  currentProgress[idx] = isChecked;
  
  dbRef(`dailyProgress/${progressKey}`).set(currentProgress)
    .then(() => {
      if (isChecked) toast('🎉 Harika! Bir görevi daha tamamladın.');
    })
    .catch(() => toast('⚠️ Kaydedilemedi. İnternet bağlantını kontrol et.'));
}

/* ================= İLK YÜKLEME ÇAĞRILARI ================= */
buildPlan(); 
buildCur();
fillWeekSel(); 
fillTopicSelects();
initializeFirebaseListeners();
