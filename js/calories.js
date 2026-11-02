// Marcella Coffee — Tahmini kalori aralıkları (kcal = kilokalori)

function formatCalories(min, max) {
  if (min === 0 && max === 0) return '0 kcal';
  if (min === max) return `${min} kcal`;
  return `${min}–${max} kcal`;
}

function estimateCalories(item, categoryId) {
  const name = item.name.toLowerCase();
  const text = `${item.name} ${item.desc || ''}`.toLowerCase();

  // Özel ürün eşleşmeleri (öncelikli)
  const exact = {
    'espresso': [5, 15],
    'double espresso': [10, 20],
    'espresso macchiato': [20, 40],
    'americano': [10, 20],
    'ice americano': [10, 20],
    'filtre kahve': [5, 15],
    'sütlü filtre kahve': [60, 90],
    'ice filtre kahve': [5, 15],
    'ice sütlü filtre kahve': [60, 90],
    'türk kahvesi': [10, 20],
    'double türk kahvesi': [15, 25],
    'damla sakızlı türk kahvesi': [15, 25],
    'double damla s. türk kahvesi': [20, 30],
    'red eye coffee': [15, 25],
    'black eye coffee': [20, 30],
    'cold brew': [5, 15],
    'çay': [0, 5],
    'fincan çay': [0, 5],
    'su': [0, 0],
    'sade soda': [0, 5],
    'latte': [120, 180],
    'cappuccino': [100, 160],
    'flat white': [120, 180],
    'cortado': [80, 120],
    'mocha': [220, 300],
    'white mocha': [240, 320],
    'affogato': [150, 220],
    'v60': [5, 15],
    'v60 double': [10, 20],
    'chemex': [5, 15],
    'chemex double': [10, 20],
    'pizza margherita': [650, 850],
    'pizza manzo dorato': [750, 950],
    'patates kızartması': [280, 380],
    'atıştırma sepeti': [650, 900],
    'marcella red tost': [420, 550],
    'marcella white tost': [380, 500],
    'mini atıştırmalıklar': [180, 280],
    'cola': [130, 160],
    'sprite': [130, 160],
    'şişe ayran': [80, 110],
    'churchill': [30, 50],
    'ice tea şeftali': [90, 120],
    'ice tea limon': [90, 120],
    'ice tea mango & karışık meyve': [100, 130],
    'watermelon mojito': [160, 175],
    'kırmızı kutu': [155, 155],
    'sarı kutu': [155, 155],
    'yeşil kutu': [155, 155],
    'pink acid': [30, 35],
    'latte cup': [380, 520],
    'ice pistachio mocha': [280, 380],
    'limonata': [150, 170],
    // 45 ml şurup: 329 kcal/100 ml → ~148; 162 kcal/100 ml → ~73 (buz 0 kcal)
    'kuzu kulağı': [148, 148],
    'mango sol': [73, 73],
    // Cedric Grolet tartlet (~1 porsiyon, kremalı hamur)
    'cedric grolet limon': [380, 480],
    'cedric grolet çilek': [340, 440],
    'cedric grolet antep fıstığı': [420, 550],
    // ~300 ml taze sıkma portakal suyu ≈ 142 kcal
    'taze sıkma portakal suyu': [140, 140],
  };

  // Kullanıcı kalori vermediyse boş bırak
  if (name === 'kit-kat pasta' || name === 'cookie pie') return '';


  for (const [key, range] of Object.entries(exact)) {
    if (name === key) return formatCalories(range[0], range[1]);
  }

  // Kategori bazlı
  if (categoryId === 'bitki-caylari') return formatCalories(0, 10);
  if (categoryId === 'mesrubatlar') {
    if (name.includes('soda') || name.includes('su')) return formatCalories(0, 10);
    return formatCalories(90, 140);
  }
  if (categoryId === 'ekstralar') return '';
  if (categoryId === '3-nesil-demleme-kahveler') return formatCalories(5, 20);

  // İsim / içerik kalıpları
  if (name.includes('milkshake') || text.includes('milkshake')) return formatCalories(350, 480);
  if (name.includes('frozen') || text.includes('frozen')) return formatCalories(120, 200);
  if (name.includes('frappe') || name.includes('frekdo')) return formatCalories(180, 280);
  if (name.startsWith('ice ') && (text.includes('mocha') || text.includes('latte'))) {
    if (text.includes('nutella') || text.includes('lotus') || text.includes('pistachio')) {
      return formatCalories(250, 350);
    }
    return formatCalories(140, 220);
  }
  if (name.includes('latte') || name.includes('mocha') || name.includes('cappuccino')) {
    return formatCalories(140, 240);
  }
  if (text.includes('sahlep')) return formatCalories(160, 230);
  if (text.includes('sıcak çikolata') || text.includes('cadbury')) return formatCalories(250, 350);
  if (text.includes('chai tea')) return formatCalories(140, 210);
  if (text.includes('ballı süt')) return formatCalories(120, 180);

  if (categoryId === 'tatlilar') {
    if (name.includes('cheesecake')) return formatCalories(320, 420);
    if (name.includes('brownie')) return formatCalories(300, 400);
    if (name.includes('magnolia')) return formatCalories(280, 380);
    if (name.includes('tiramisu')) return formatCalories(280, 380);
    if (name.includes('kruvasan') || name.includes('cream puff')) return formatCalories(300, 420);
    return formatCalories(250, 380);
  }

  if (categoryId === 'kruvasanlar') {
    if (name.includes('antep fıstık')) return formatCalories(420, 550);
    if (name.includes('lotus')) return formatCalories(380, 480);
    return formatCalories(320, 420);
  }

  if (categoryId === 'marcella-ozel') {
    if (name.includes('çikolata')) return formatCalories(280, 380);
    if (name.includes('frappe')) return formatCalories(280, 380);
    return formatCalories(120, 200);
  }

  if (categoryId === 'fresh-bar--frozen') {
    if (name.includes('portakal')) return formatCalories(100, 140);
    if (name.includes('cool')) return formatCalories(80, 130);
    if (name.includes('uranos')) return formatCalories(90, 130);
    return formatCalories(120, 200);
  }

  if (categoryId === 'sicak-icecekler') return formatCalories(80, 200);
  if (categoryId === 'sicak-kahveler') return formatCalories(100, 200);
  if (categoryId === 'soguk-kahveler') return formatCalories(100, 220);

  return formatCalories(80, 180);
}

function renderCalories(calories) {
  if (!calories) return '';
  const title = typeof MarcellaI18n !== 'undefined'
    ? MarcellaI18n.t('calories.estimate')
    : 'Tahmini kalori';
  return `<span class="menu-item__calories" title="${title}">${calories}</span>`;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { estimateCalories, formatCalories };
}
