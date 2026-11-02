// Marcella Coffee — Alerjen tanımları ve otomatik tespit

const ALLERGENS = {
  lactose: { icon: '🥛', label: 'Süt / Laktoz' },
  gluten:  { icon: '🌾', label: 'Gluten' },
  nuts:    { icon: '🥜', label: 'Kuruyemiş' },
  egg:     { icon: '🥚', label: 'Yumurta' },
};

const LACTOSE_WORDS = [
  'süt', 'sütlü', 'milk', 'latte', 'cappuccino', 'mocha', 'macchiato', 'cortado',
  'mozzarella', 'kaşar', 'peynir', 'krema', 'cream', 'dondurma', 'milkshake',
  'sahlep', 'cheesecake', 'köpük', 'nutella', 'çikolata', 'chocolate', 'tereyağ',
  'kaymak', 'flat white', 'frappe', 'affogato', 'ballı süt', 'chai tea', 'supangle',
  'magnolia', 'brownie', 'tiramisu', 'spoonful', 'kruvasan', 'croissant', 'pasta krema',
  'spanish latte', 'süt reçeli', 'irish cream', 'lotus latte', 'pistachio mocha', 'ice pistachio mocha', 'vanilya latte',
  'karamel latte', 'toffeenut', 'coconut latte', 'pumpkin spice', 'honeymoon',
  'white mocha', 'freddo cappuccino', 'soğuk süt', 'buzlu latte', 'sıcak çikolata',
  'cadbury', 'ferrero', 'banoffee', 'lotus milkshake', 'lotus kruvasan', 'lotus magnolia',
  'beyaz çikolata', 'çikolatalı cup', 'cream puff', 'dondurmalı'
];

const NO_LACTOSE_WORDS = [
  'ice americano', 'americano', 'espresso', 'filtre kahve', 'türk kahvesi',
  'damla sakızlı', 'cold brew', 'fincan çay', 'çay', 'bitki', 'adaçayı', 'ihlamur',
  'yeşil çay', 'rooibos', 'oolong', 'hibiskus', 'soda', 'churchill', 'ayran',
  'su', 'cola', 'sprite', 'ice tea', 'limonata', 'uranos', 'cool lime', 'cool berry',
  'frozen', 'portakal suyu', 'taze sıkma portakal suyu', 'patates kızartması', 'v60', 'chemex', 'red eye', 'black eye',
  'mojito', 'watermelon mojito', 'kırmızı kutu', 'sarı kutu', 'yeşil kutu', 'pink acid', 'limonata',
  'kuzu kulağı', 'kuzukulağı', 'mango sol'
];

const GLUTEN_WORDS = [
  'hamur', 'pizza', 'kruvasan', 'tost', 'bagel', 'bisküvi', 'brownie', 'cheesecake',
  'tiramisu', 'magnolia', 'spoonful', 'kek', 'cup', 'danish', 'cinnamon roll',
  'sandviç', 'ekmek', 'un ', 'gluten', 'lotus bisküvi', 'waffle', 'patates' // breaded chicken in sepeti
];

const NUTS_WORDS = [
  'fındık', 'findik', 'nutella', 'ferrero', 'antep fıstık', 'antep fıstığ', 'fıstık', 'fıstığ', 'badem',
  'fıstık ezmesi', 'file badem', 'kaju', 'ceviz', 'lotus' // lotus sometimes - skip lotus alone
];

const EGG_WORDS = [
  'yumurta', 'egg', 'tiramisu', 'brownie', 'cheesecake', 'magnolia', 'kruvasan',
  'spoonful', 'cream puff', 'pasta krema', 'supangle', 'kek'
];

const CATEGORY_DEFAULTS = {
  pizzalar: ['gluten', 'lactose'],
  tatlilar: ['gluten', 'lactose', 'egg'],
  kruvasanlar: ['gluten', 'lactose'],
  milkshake: ['lactose'],
  'atistirmaliklar': ['gluten'],
};

function containsAny(text, words) {
  return words.some(w => text.includes(w));
}

function detectAllergens(item, categoryId) {
  const text = `${item.name} ${item.desc || ''}`.toLowerCase();
  const found = new Set(item.allergens || []);

  // Kullanıcı alerjen vermediyse boş bırak
  if (item.name === 'Kit-Kat Pasta' || item.name === 'Cookie Pie') {
    return [];
  }

  // Laktoz
  const isNoLactose = containsAny(text, NO_LACTOSE_WORDS) &&
    !containsAny(text, ['sütlü', 'süt,', ' süt', 'latte', 'mocha', 'cappuccino', 'dondurma', 'krema', 'peynir', 'mozzarella']);

  if (!isNoLactose && containsAny(text, LACTOSE_WORDS)) {
    found.add('lactose');
  }

  // Sıcak/soğuk kahve kategorilerinde süt içerenler
  if (['sicak-kahveler', 'soguk-kahveler'].includes(categoryId)) {
    if (containsAny(text, ['latte', 'mocha', 'cappuccino', 'macchiato', 'cortado', 'flat white', 'sütlü', 'süt', 'nutella', 'krema', 'dondurma', 'affogato'])) {
      found.add('lactose');
    }
  }

  if (categoryId === 'marcella-ozel') {
    found.add('lactose');
  }

  // Gluten
  if (containsAny(text, GLUTEN_WORDS)) {
    found.add('gluten');
  }
  if (categoryId === 'pizzalar' || categoryId === 'kruvasanlar') {
    found.add('gluten');
  }
  if (categoryId === 'tatlilar' && !text.includes('sadece')) {
    found.add('gluten');
  }
  if (item.name === 'Atıştırma Sepeti') {
    return ['gluten'];
  }

  // Kuruyemiş — "hindistan cevizi" AB ek-II / kutu etiketinde alerjen değil;
  // "ceviz" kelimesinin yanlış eşleşmesini engelle
  const nutsText = text.replace(/hindistan\s*cevizi/gi, '');
  if (containsAny(nutsText, NUTS_WORDS.filter(w => w !== 'lotus'))) {
    found.add('nuts');
  } else {
    found.delete('nuts');
  }
  if (containsAny(nutsText, ['antep fıstık', 'antep fıstığ', 'fıstığ', 'fındık', 'nutella', 'ferrero', 'badem'])) {
    found.add('nuts');
  }

  // Yumurta
  if (containsAny(text, EGG_WORDS)) {
    found.add('egg');
  }
  if (categoryId === 'tatlilar') {
    found.add('egg');
  }

  // Meşrubatlar, bitki çayları — genelde alerjen yok
  if (['mesrubatlar', 'bitki-caylari', 'ekstralar'].includes(categoryId)) {
    ['lactose', 'gluten', 'nuts', 'egg'].forEach(a => found.delete(a));
  }
  if (categoryId === 'mesrubatlar') return [];
  if (categoryId === 'ekstralar') return [];
  if (categoryId === 'bitki-caylari' && !containsAny(text, ['çikolata', 'badem'])) {
    return [];
  }

  // 3. nesil demleme — sadece kahve
  if (categoryId === '3-nesil-demleme-kahveler') {
    return [];
  }

  // Saf espresso/americano/filtre (sütlü değil)
  const pureCoffee = /^(espresso|double espresso|americano|filtre kahve|türk kahvesi|double türk|damla sakızlı|ice americano|ice filtre|cold brew|fincan çay|çay|sahlep|chai)/i;
  if (pureCoffee.test(item.name.trim()) && !containsAny(text, ['sütlü', 'süt', 'latte', 'mocha', 'krema', 'çikolata', 'ballı', 'damla sakızlı sahlep', 'bal badem'])) {
    found.delete('lactose');
    found.delete('gluten');
    found.delete('egg');
  }
  if (/^espresso$/i.test(item.name.trim()) || /^double espresso$/i.test(item.name.trim())) {
    return [];
  }
  if (/^americano$/i.test(item.name.trim()) || /^ice americano$/i.test(item.name.trim())) {
    return [];
  }
  if (/^filtre kahve$/i.test(item.name.trim()) || /^ice filtre kahve$/i.test(item.name.trim())) {
    return [];
  }
  if (/^türk kahvesi$/i.test(item.name.trim()) || /^double türk kahvesi$/i.test(item.name.trim())) {
    return [];
  }
  if (/^damla sakızlı/i.test(item.name.trim()) && !item.name.includes('Sahlep')) {
    return [];
  }
  if (/^cold brew$/i.test(item.name.trim())) {
    return [];
  }
  if (/^çay$/i.test(item.name.trim()) || /^fincan çay$/i.test(item.name.trim())) {
    return [];
  }
  if (/^v60|^chemex/i.test(item.name.trim())) {
    return [];
  }

  // Frozen — genelde süt yok
  if (text.includes('frozen') && !containsAny(text, ['süt', 'milk', 'krema'])) {
    found.delete('lactose');
  }

  // Kategori varsayılanları (saf içecekler hariç)
  if (!['mesrubatlar', 'bitki-caylari', '3-nesil-demleme-kahveler'].includes(categoryId)) {
    (CATEGORY_DEFAULTS[categoryId] || []).forEach(a => found.add(a));
  }

  // Saf kahve / çay — son kontrol, her şeyi sıfırla
  const pureNames = [
    /^espresso$/i, /^double espresso$/i, /^americano$/i, /^ice americano$/i,
    /^filtre kahve$/i, /^ice filtre kahve$/i, /^türk kahvesi$/i, /^double türk kahvesi$/i,
    /^damla sakızlı türk kahvesi$/i, /^double damla s\. türk kahvesi$/i,
    /^cold brew$/i, /^çay$/i, /^fincan çay$/i, /^v60$/i, /^v60 double$/i,
    /^chemex$/i, /^chemex double$/i, /^red eye coffee$/i, /^black eye coffee$/i,
    /^sade soda$/i, /^su$/i, /^cola$/i, /^sprite$/i
  ];
  if (pureNames.some(rx => rx.test(item.name.trim()))) {
    return [];
  }

  // Patates — sadece gluten yok, laktoz yok
  if (item.name === 'Patates Kızartması') {
    return [];
  }

  // Frozen içecekler — genelde alerjen yok
  if (categoryId === 'fresh-bar--frozen' && text.includes('frozen') && !containsAny(text, ['süt', 'milk', 'krema', 'çikolata'])) {
    return [];
  }

  const order = ['lactose', 'gluten', 'nuts', 'egg'];
  return order.filter(a => found.has(a));
}

function renderAllergenIcons(allergens) {
  if (!allergens?.length) return '';

  const labels = typeof MarcellaI18n !== 'undefined'
    ? MarcellaI18n.getAllergenLabels()
    : ALLERGENS;
  const infoLabel = typeof MarcellaI18n !== 'undefined'
    ? MarcellaI18n.t('allergens.info')
    : 'Alerjen bilgisi';

  return `<span class="menu-item__allergens" aria-label="${infoLabel}">
    ${allergens.map(key => {
      const a = labels[key];
      if (!a) return '';
      return `<span class="allergen-badge" title="${a.label}">${a.icon}</span>`;
    }).join('')}
  </span>`;
}

function renderAllergenLegend() {
  const labels = typeof MarcellaI18n !== 'undefined'
    ? MarcellaI18n.getAllergenLabels()
    : ALLERGENS;
  const legendLabel = typeof MarcellaI18n !== 'undefined'
    ? MarcellaI18n.t('allergens.legend')
    : 'Alerjen simgeleri açıklaması';
  const note = typeof MarcellaI18n !== 'undefined'
    ? MarcellaI18n.t('allergens.note')
    : 'Kalori değerleri tahminidir. Detay için personele danışınız.';

  return `<div class="allergen-legend" aria-label="${legendLabel}">
    ${Object.entries(labels).map(([, a]) =>
      `<span class="allergen-legend__item"><span class="allergen-badge">${a.icon}</span> ${a.label}</span>`
    ).join('')}
    <span class="allergen-legend__note">${note}</span>
  </div>`;
}

// Node.js export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ALLERGENS, detectAllergens };
}
