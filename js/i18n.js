// Marcella Coffee — Çoklu dil (TR / EN / RU / AR)

const MarcellaI18n = {
  locales: ['tr', 'en', 'ru', 'ar'],
  storageKey: 'marcella-lang',
  current: 'tr',
  data: null,
  loading: null,

  flags: {
    tr: { src: 'images/flags/tr.png', label: 'Türkçe' },
    en: { src: 'images/flags/en.png', label: 'English' },
    ru: { src: 'images/flags/ru.png', label: 'Русский' },
    ar: { src: 'images/flags/ar.png', label: 'العربية' },
  },

  trUi: {
    meta: {
      index: {
        description: "Marcella Coffee — Bursa Nilüfer'de özenle hazırlanan kahve deneyimi.",
        title: 'Marcella Coffee | Bursa',
      },
      menu: {
        description: 'Marcella Coffee menüsü — kahveler, tatlılar, atıştırmalıklar ve daha fazlası.',
        title: 'Menü | Marcella Coffee',
      },
    },
    nav: {
      logo: 'Marcella Coffee',
      open: 'Menüyü aç',
      home: 'Ana Sayfa',
      menu: 'Menü',
      about: 'Hakkımızda',
      contact: 'İletişim',
      categories: 'Menü kategorileri',
    },
    hero: {
      tagline: 'Nilüfer / Bursa',
      subtitle: 'Şehrin en sessiz kahve noktası.',
      ctaMenu: 'Menüyü Gör',
      ctaVisit: 'Bizi Ziyaret Et',
    },
    features: {
      beans: { title: 'Özenle Seçilmiş Çekirdekler', text: 'Her kahve, kalite ve lezzet için özenle hazırlanır.' },
      hours: { title: '10:00 – 00:00', text: 'Sabahın erken saatlerinden gece yarısına kadar sizinleyiz.' },
      location: { title: "Nilüfer'de", text: "Konak Mahallesi'nde, sıcak ve samimi bir ortam." },
    },
    about: {
      label: 'Hakkımızda',
      title: 'Kahve, bizim için bir ritüel.',
      p1: "Marcella Coffee, Bursa'nın Nilüfer ilçesinde kahveyi sadece bir içecek değil, bir buluşma noktası olarak görüyor. Siyah ve krem tonlarında tasarlanmış mekânımızda, her fincanı özenle hazırlıyoruz.",
      p2: "İster sabah işe giderken, ister akşam arkadaşlarınızla — Marcella'da kendinizi evinizde hissedin.",
      cta: "Instagram'da Takip Et",
      photoSoon: 'Fotoğraf yakında eklenecek',
    },
    menuPreview: {
      label: 'Menü',
      title: 'Lezzetlerimizi keşfedin',
      text: '156 üründen oluşan menümüz — sıcak kahveler, tatlılar, kruvasanlar, pizza ve daha fazlası. Masanızdaki QR kod ile de aynı menüye ulaşabilirsiniz.',
      cta: 'Menüyü Gör',
    },
    contact: {
      label: 'İletişim',
      title: 'Bizi ziyaret edin',
      addressLabel: 'Adres',
      address: 'Konak Mahallesi, Seçkin Sokak No: 46A\nNilüfer / Bursa',
      phone: 'Telefon',
      hours: 'Çalışma Saatleri',
      hoursValue: 'Her gün 10:00 – 00:00',
      instagram: 'Instagram',
      mapTitle: 'Marcella Coffee konumu',
    },
    footer: { rights: '© 2026 Marcella Coffee. Tüm hakları saklıdır.' },
    menu: {
      hero: { title: 'Lezzetlerimiz', subtitle: 'Özenle hazırlanan kahve ve içeceklerimiz' },
      loading: 'Menü yükleniyor…',
      error: 'Menü yüklenemedi. Lütfen sayfayı yenileyin.',
      priceAsk: 'Fiyat için sorun',
      photoZoom: 'fotoğrafını büyüt',
      lightbox: { close: 'Kapat', hint: 'Kapatmak için dışarı dokunun' },
    },
    allergens: {
      lactose: 'Süt / Laktoz',
      gluten: 'Gluten',
      nuts: 'Kuruyemiş',
      egg: 'Yumurta',
      info: 'Alerjen bilgisi',
      legend: 'Alerjen simgeleri açıklaması',
      note: 'Kalori değerleri tahminidir. Detay için personele danışınız.',
    },
    calories: { estimate: 'Tahmini kalori' },
  },

  detectLocale() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
    if (fromUrl && this.locales.includes(fromUrl)) return fromUrl;
    const stored = localStorage.getItem(this.storageKey);
    if (stored && this.locales.includes(stored)) return stored;
    return 'tr';
  },

  async loadLocale(lang) {
    if (lang === 'tr') {
      return { ui: this.trUi, categories: {}, items: {} };
    }
    if (this.loading) return this.loading;
    this.loading = fetch(`data/i18n/${lang}.json`)
      .then(res => {
        if (!res.ok) throw new Error('locale fetch failed');
        return res.json();
      })
      .finally(() => { this.loading = null; });
    return this.loading;
  },

  async setLocale(lang) {
    if (!this.locales.includes(lang)) return;
    this.current = lang;
    localStorage.setItem(this.storageKey, lang);
    this.data = await this.loadLocale(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    this.applyPage();
    this.updateSwitcher();
    this.refreshMenu();
    window.dispatchEvent(new CustomEvent('marcella:locale', { detail: { lang } }));
  },

  async init() {
    this.current = this.detectLocale();
    this.data = await this.loadLocale(this.current);
    document.documentElement.lang = this.current;
    document.documentElement.dir = this.current === 'ar' ? 'rtl' : 'ltr';
    this.injectSwitcher();
    if (this.current !== 'tr') this.applyPage();
    this.updateSwitcher();
  },

  t(key) {
    const parts = key.split('.');
    let node = this.current === 'tr' ? this.trUi : this.data?.ui;
    for (const p of parts) {
      if (!node || node[p] === undefined) {
        node = this.trUi;
        for (const fp of parts) node = node?.[fp];
        break;
      }
      node = node[p];
    }
    return typeof node === 'string' ? node : key;
  },

  getAllergenLabels() {
    return {
      lactose: { icon: '🥛', label: this.t('allergens.lactose') },
      gluten: { icon: '🌾', label: this.t('allergens.gluten') },
      nuts: { icon: '🥜', label: this.t('allergens.nuts') },
      egg: { icon: '🥚', label: this.t('allergens.egg') },
    };
  },

  translateCategory(category) {
    if (this.current === 'tr') return category;
    const name = this.data?.categories?.[category.id];
    return name ? { ...category, name } : category;
  },

  translateItem(item) {
    if (this.current === 'tr') return item;
    const tr = this.data?.items?.[item.name];
    if (!tr) return item;
    return {
      ...item,
      name: tr.name || item.name,
      desc: tr.desc !== undefined ? tr.desc : item.desc,
    };
  },

  translateMenuData(data) {
    if (!data || this.current === 'tr') return data;
    return {
      ...data,
      categories: data.categories.map(cat => ({
        ...this.translateCategory(cat),
        items: cat.items.map(item => this.translateItem(item)),
      })),
    };
  },

  applyPage() {
    const page = document.body.dataset.page || 'index';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = this.t(`meta.${page}.description`);
    document.title = this.t(`meta.${page}.title`);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = this.t(el.dataset.i18n);
      if (val.includes('\n')) {
        el.innerHTML = val.split('\n').map(line => escapeHtml(line)).join('<br>');
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', this.t(el.dataset.i18nAria));
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.setAttribute('title', this.t(el.dataset.i18nTitle));
    });

    const navToggle = document.getElementById('nav-toggle');
    if (navToggle) navToggle.setAttribute('aria-label', this.t('nav.open'));

    const menuNav = document.getElementById('menu-nav');
    if (menuNav) menuNav.setAttribute('aria-label', this.t('nav.categories'));

    const mapFrame = document.querySelector('.contact__map iframe');
    if (mapFrame) mapFrame.setAttribute('title', this.t('contact.mapTitle'));

    const lightbox = document.querySelector('.menu-lightbox');
    if (lightbox) {
      const closeBtn = lightbox.querySelector('.menu-lightbox__close');
      const hint = lightbox.querySelector('.menu-lightbox__hint');
      if (closeBtn) closeBtn.setAttribute('aria-label', this.t('menu.lightbox.close'));
      if (hint) hint.textContent = this.t('menu.lightbox.hint');
    }
  },

  injectSwitcher() {
    if (document.querySelector('.lang-switcher')) return;
    const nav = document.querySelector('.nav');
    if (!nav) return;

    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.setAttribute('role', 'group');
    switcher.setAttribute('aria-label', 'Language');

    this.locales.forEach(lang => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-switcher__btn';
      btn.dataset.lang = lang;
      btn.setAttribute('aria-label', this.flags[lang].label);
      btn.innerHTML = `<img src="${this.flags[lang].src}" alt="" class="lang-switcher__flag" width="28" height="20">`;
      btn.addEventListener('click', () => this.setLocale(lang));
      switcher.appendChild(btn);
    });

    const toggle = document.getElementById('nav-toggle');
    nav.appendChild(switcher);
  },

  updateSwitcher() {
    document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
      btn.classList.toggle('lang-switcher__btn--active', btn.dataset.lang === this.current);
      btn.setAttribute('aria-pressed', btn.dataset.lang === this.current ? 'true' : 'false');
    });
  },

  refreshMenu() {
    if (typeof renderMenu === 'function' && window.MENU_DATA) {
      renderMenu(MarcellaI18n.translateMenuData(window.MENU_DATA));
    }
    const loading = document.querySelector('.menu-loading');
    if (loading) loading.textContent = this.t('menu.loading');
  },
};

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  window.i18nReady = MarcellaI18n.init();
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MarcellaI18n };
}
