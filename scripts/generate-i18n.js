/**
 * Generates data/i18n/en.json, ru.json, ar.json from data/menu.json
 */
const fs = require('fs');
const path = require('path');

const menu = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/menu.json'), 'utf8'));
const outDir = path.join(__dirname, '../data/i18n');
fs.mkdirSync(outDir, { recursive: true });

const STEEP_EN = 'Steeped for 10 minutes and served ready to drink.';
const STEEP_RU = 'Заваривается 10 минут и подаётся готовым к употреблению.';
const STEEP_AR = 'يُنقع لمدة 10 دقائق ويُقدَّم جاهزاً للشرب.';

const FRESH_EN = 'Handmade, fresh daily';
const FRESH_RU = 'Ручная работа, свежая ежедневно';
const FRESH_AR = 'صنع يدوياً، طازج يومياً';

const FRESH_WARM_EN = 'Handmade, fresh daily (served warm)';
const FRESH_WARM_RU = 'Ручная работа, свежая ежедневно (подаётся тёплой)';
const FRESH_WARM_AR = 'صنع يدوياً، طازج يومياً (يُقدَّم ساخناً)';

const UI = {
  en: {
    meta: {
      index: {
        description: 'Marcella Coffee — a carefully crafted coffee experience in Nilüfer, Bursa.',
        title: 'Marcella Coffee | Bursa',
      },
      menu: {
        description: 'Marcella Coffee menu — coffees, desserts, snacks and more.',
        title: 'Menu | Marcella Coffee',
      },
    },
    nav: {
      logo: 'Marcella Coffee',
      open: 'Open menu',
      home: 'Home',
      menu: 'Menu',
      about: 'About',
      contact: 'Contact',
      categories: 'Menu categories',
    },
    hero: {
      tagline: 'Nilüfer / Bursa',
      subtitle: "The city's quietest coffee spot.",
      ctaMenu: 'View Menu',
      ctaVisit: 'Visit Us',
    },
    features: {
      beans: { title: 'Carefully Selected Beans', text: 'Every coffee is prepared with care for quality and flavor.' },
      hours: { title: '10:00 AM – 12:00 AM', text: "We're here from early morning until midnight." },
      location: { title: 'In Nilüfer', text: 'A warm, welcoming space in Konak Mahallesi.' },
    },
    about: {
      label: 'About',
      title: 'Coffee is a ritual for us.',
      p1: "Marcella Coffee in Nilüfer, Bursa sees coffee not just as a drink, but as a meeting place. In our space designed in black and cream tones, we prepare every cup with care.",
      p2: 'Whether heading to work in the morning or meeting friends in the evening — feel at home at Marcella.',
      cta: 'Follow on Instagram',
      photoSoon: 'Photo coming soon',
    },
    menuPreview: {
      label: 'Menu',
      title: 'Discover our flavors',
      text: 'Our menu of 156 items — hot coffees, desserts, croissants, pizza and more. Scan the QR code at your table for the same menu.',
      cta: 'View Menu',
    },
    contact: {
      label: 'Contact',
      title: 'Visit us',
      address: 'Konak Mahallesi, Seçkin Sokak No: 46A\nNilüfer / Bursa',
      phone: 'Phone',
      hours: 'Opening Hours',
      hoursValue: 'Every day 10:00 AM – 12:00 AM',
      instagram: 'Instagram',
      mapTitle: 'Marcella Coffee location',
    },
    footer: { rights: '© 2026 Marcella Coffee. All rights reserved.' },
    menu: {
      hero: { title: 'Our Flavors', subtitle: 'Carefully prepared coffees and beverages' },
      loading: 'Loading menu…',
      error: 'Menu could not be loaded. Please refresh the page.',
      priceAsk: 'Ask for price',
      photoZoom: 'Enlarge photo',
      lightbox: { close: 'Close', hint: 'Tap outside to close' },
    },
    allergens: {
      lactose: 'Milk / Lactose',
      gluten: 'Gluten',
      nuts: 'Nuts',
      egg: 'Egg',
      info: 'Allergen information',
      legend: 'Allergen symbol legend',
      note: 'Calorie values are estimates. Please ask staff for details.',
    },
    calories: { estimate: 'Estimated calories' },
  },
  ru: {
    meta: {
      index: {
        description: 'Marcella Coffee — тщательно подготовленный кофейный опыт в Нилюфере, Бурса.',
        title: 'Marcella Coffee | Бурса',
      },
      menu: {
        description: 'Меню Marcella Coffee — кофе, десерты, закуски и многое другое.',
        title: 'Меню | Marcella Coffee',
      },
    },
    nav: {
      logo: 'Marcella Coffee',
      open: 'Открыть меню',
      home: 'Главная',
      menu: 'Меню',
      about: 'О нас',
      contact: 'Контакты',
      categories: 'Категории меню',
    },
    hero: {
      tagline: 'Нилюфер / Бурса',
      subtitle: 'Самое тихое кофейное место города.',
      ctaMenu: 'Смотреть меню',
      ctaVisit: 'Посетить нас',
    },
    features: {
      beans: { title: 'Тщательно отобранные зёрна', text: 'Каждый кофе готовится с заботой о качестве и вкусе.' },
      hours: { title: '10:00 – 00:00', text: 'Мы с вами с раннего утра до полуночи.' },
      location: { title: 'В Нилюфере', text: 'Тёплая и уютная атмосфера в районе Конак.' },
    },
    about: {
      label: 'О нас',
      title: 'Кофе для нас — это ритуал.',
      p1: 'Marcella Coffee в Нилюфере, Бурса, видит в кофе не просто напиток, а место встречи. В нашем пространстве в чёрно-кремовых тонах мы готовим каждую чашку с особой заботой.',
      p2: 'Утром по дороге на работу или вечером с друзьями — чувствуйте себя как дома в Marcella.',
      cta: 'Подписаться в Instagram',
      photoSoon: 'Фото скоро появится',
    },
    menuPreview: {
      label: 'Меню',
      title: 'Откройте для себя наши вкусы',
      text: 'Наше меню из 156 позиций — горячий кофе, десерты, круассаны, пицца и многое другое. Отсканируйте QR-код на столе для того же меню.',
      cta: 'Смотреть меню',
    },
    contact: {
      label: 'Контакты',
      title: 'Посетите нас',
      address: 'Конак Махаллеси, Сечкин Сокак № 46A\nНилюфер / Бурса',
      phone: 'Телефон',
      hours: 'Часы работы',
      hoursValue: 'Ежедневно 10:00 – 00:00',
      instagram: 'Instagram',
      mapTitle: 'Расположение Marcella Coffee',
    },
    footer: { rights: '© 2026 Marcella Coffee. Все права защищены.' },
    menu: {
      hero: { title: 'Наши вкусы', subtitle: 'Тщательно приготовленные кофе и напитки' },
      loading: 'Загрузка меню…',
      error: 'Не удалось загрузить меню. Пожалуйста, обновите страницу.',
      priceAsk: 'Уточните цену',
      photoZoom: 'Увеличить фото',
      lightbox: { close: 'Закрыть', hint: 'Нажмите снаружи, чтобы закрыть' },
    },
    allergens: {
      lactose: 'Молоко / Лактоза',
      gluten: 'Глютен',
      nuts: 'Орехи',
      egg: 'Яйцо',
      info: 'Информация об аллергенах',
      legend: 'Обозначения аллергенов',
      note: 'Калорийность указана приблизительно. Уточняйте у персонала.',
    },
    calories: { estimate: 'Примерная калорийность' },
  },
  ar: {
    meta: {
      index: {
        description: 'مارسيلا كوفي — تجربة قهوة مُعدّة بعناية في نيلوفر، بورصة.',
        title: 'مارسيلا كوفي | بورصة',
      },
      menu: {
        description: 'قائمة مارسيلا كوفي — قهوة، حلويات، وجبات خفيفة والمزيد.',
        title: 'القائمة | مارسيلا كوفي',
      },
    },
    nav: {
      logo: 'مارسيلا كوفي',
      open: 'فتح القائمة',
      home: 'الرئيسية',
      menu: 'القائمة',
      about: 'من نحن',
      contact: 'اتصل بنا',
      categories: 'فئات القائمة',
    },
    hero: {
      tagline: 'نيلوفر / بورصة',
      subtitle: 'أهدأ مقهى في المدينة.',
      ctaMenu: 'عرض القائمة',
      ctaVisit: 'زُرنا',
    },
    features: {
      beans: { title: 'حبوب مختارة بعناية', text: 'نُحضّر كل فنجان بعناية من أجل الجودة والنكهة.' },
      hours: { title: '10:00 – 00:00', text: 'نحن معكم من الصباح الباكر حتى منتصف الليل.' },
      location: { title: 'في نيلوفر', text: 'أجواء دافئة ومرحبة في حي كوناك.' },
    },
    about: {
      label: 'من نحن',
      title: 'القهوة بالنسبة لنا طقس.',
      p1: 'ترى مارسيلا كوفي في نيلوفر، بورصة، في القهوة أكثر من مجرد مشروب — إنها نقطة التقاء. في مساحتنا المصممة بألوان الأسود والكريمي، نُحضّر كل فنجان بعناية.',
      p2: 'سواء في الصباح متوجهاً إلى العمل أو مساءً مع الأصدقاء — اشعر وكأنك في بيتك في مارسيلا.',
      cta: 'تابعنا على إنستغرام',
      photoSoon: 'الصورة قريباً',
    },
    menuPreview: {
      label: 'القائمة',
      title: 'اكتشف نكهاتنا',
      text: 'قائمتنا من 156 صنفاً — قهوة ساخنة، حلويات، كرواسان، بيتزا والمزيد. امسح رمز QR على طاولتك للوصول إلى نفس القائمة.',
      cta: 'عرض القائمة',
    },
    contact: {
      label: 'اتصل بنا',
      title: 'زُرنا',
      address: 'حي كوناك، شارع سيتشكين رقم 46أ\nنيلوفر / بورصة',
      phone: 'الهاتف',
      hours: 'ساعات العمل',
      hoursValue: 'يومياً 10:00 – 00:00',
      instagram: 'إنستغرام',
      mapTitle: 'موقع مارسيلا كوفي',
    },
    footer: { rights: '© 2026 مارسيلا كوفي. جميع الحقوق محفوظة.' },
    menu: {
      hero: { title: 'نكهاتنا', subtitle: 'قهوة ومشروبات مُحضَّرة بعناية' },
      loading: 'جارٍ تحميل القائمة…',
      error: 'تعذّر تحميل القائمة. يُرجى تحديث الصفحة.',
      priceAsk: 'اسأل عن السعر',
      photoZoom: 'تكبير الصورة',
      lightbox: { close: 'إغلاق', hint: 'انقر خارج الصورة للإغلاق' },
    },
    allergens: {
      lactose: 'حليب / لاكتوز',
      gluten: 'غلوتين',
      nuts: 'مكسرات',
      egg: 'بيض',
      info: 'معلومات مسببات الحساسية',
      legend: 'دليل رموز مسببات الحساسية',
      note: 'قيم السعرات الحرارية تقديرية. يُرجى الاستفسار من الموظفين.',
    },
    calories: { estimate: 'سعرات حرارية تقديرية' },
  },
};

const CATEGORIES = {
  en: {
    'marcella-ozel': 'MARCELLA SPECIAL',
    pizzalar: 'PIZZAS',
    tatlilar: 'DESSERTS',
    kruvasanlar: 'CROISSANTS',
    'sicak-kahveler': 'HOT COFFEES',
    'soguk-kahveler': 'COLD COFFEES',
    '3-nesil-demleme-kahveler': '3RD WAVE COFFEES',
    'sicak-icecekler': 'HOT DRINKS',
    'fresh-bar--frozen': 'FRESH BAR & FROZEN',
    milkshake: 'MILKSHAKES',
    'bitki-caylari': 'HERBAL TEAS',
    atistirmaliklar: 'SNACKS',
    mesrubatlar: 'SOFT DRINKS',
    ekstralar: 'EXTRAS',
  },
  ru: {
    'marcella-ozel': 'MARCELLA СПЕЦИАЛЬНОЕ',
    pizzalar: 'ПИЦЦЫ',
    tatlilar: 'ДЕСЕРТЫ',
    kruvasanlar: 'КРУАССАНЫ',
    'sicak-kahveler': 'ГОРЯЧИЙ КОФЕ',
    'soguk-kahveler': 'ХОЛОДНЫЙ КОФЕ',
    '3-nesil-demleme-kahveler': 'КОФЕ 3-ГО ПОКОЛЕНИЯ',
    'sicak-icecekler': 'ГОРЯЧИЕ НАПИТКИ',
    'fresh-bar--frozen': 'ФРЕШ-БАР И FROZEN',
    milkshake: 'МИЛКШЕЙКИ',
    'bitki-caylari': 'ТРАВЯНЫЕ ЧАИ',
    atistirmaliklar: 'ЗАКУСКИ',
    mesrubatlar: 'БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ',
    ekstralar: 'ДОПОЛНЕНИЯ',
  },
  ar: {
    'marcella-ozel': 'مارسيلا المميز',
    pizzalar: 'بيتزا',
    tatlilar: 'حلويات',
    kruvasanlar: 'كرواسان',
    'sicak-kahveler': 'قهوة ساخنة',
    'soguk-kahveler': 'قهوة باردة',
    '3-nesil-demleme-kahveler': 'قهوة الجيل الثالث',
    'sicak-icecekler': 'مشروبات ساخنة',
    'fresh-bar--frozen': 'فريش بار وآيس',
    milkshake: 'ميلك شيك',
    'bitki-caylari': 'شاي أعشاب',
    atistirmaliklar: 'وجبات خفيفة',
    mesrubatlar: 'مشروبات غازية',
    ekstralar: 'إضافات',
  },
};

// Per-item translations: [enName?, enDesc, ruName?, ruDesc, arName?, arDesc]
// name omitted when same as Turkish key for international items
const ITEMS = {
  'Original Greek Frappe': {
    en: { desc: 'The famous Greek frappe made with specialty coffee from Greece. Coffee, milk, vanilla ice cream, ice.' },
    ru: { desc: 'Знаменитый греческий фраппе на специальном кофе из Греции. Кофе, молоко, ванильное мороженое, лёд.' },
    ar: { desc: 'الفرابيه اليوناني الشهير بقهوة خاصة من اليونان. قهوة، حليب، آيس كريم فانيليا، ثلج.' },
  },
  'Freddo Cappuccino': {
    en: { desc: 'Frothed double-shot espresso, cold milk foam, ice.' },
    ru: { desc: 'Взбитый эспрессо дабл, холодная молочная пена, лёд.' },
    ar: { desc: 'إسبريسو مزدوج مُرغى، رغوة حليب باردة، ثلج.' },
  },
  'Freddo Espresso': {
    en: { desc: 'Frothed double-shot espresso, ice.' },
    ru: { desc: 'Взбитый эспрессо дабл, лёд.' },
    ar: { desc: 'إسبريسو مزدوج مُرغى، ثلج.' },
  },
  'Marcella Soğuk Çikolata': {
    en: { name: 'Marcella Iced Chocolate', desc: 'Banana ice cream with iced chocolate.' },
    ru: { name: 'Marcella Холодный шоколад', desc: 'Банановое мороженое с холодным шоколадом.' },
    ar: { name: 'مارسيلا شوكولاتة باردة', desc: 'آيس كريم موز مع شوكولاتة باردة.' },
  },
  'Pizza Margherita': {
    en: { desc: 'Two-day rested Neapolitan-style dough, house pizza sauce, buffalo mozzarella, basil and olive oil, baked in a stone oven.' },
    ru: { desc: 'Тесто в неаполитанском стиле с двухдневной выдержкой, фирменный соус, моцарелла из сыроватки, базилик и оливковое масло, выпекается в каменной печи.' },
    ar: { desc: 'عجينة نابولي مُرتاحة يومين، صلصة بيتزا خاصة، موزاريلا جاموس، ريحان وزيت زيتون، تُخبز في فرن حجري.' },
  },
  'Pizza Manzo Dorato': {
    en: { desc: 'Two-day rested Neapolitan-style dough, house pizza sauce, buffalo mozzarella, beef roast beef & sirloin with a touch of honey mustard and olive oil, baked in a stone oven.' },
    ru: { desc: 'Тесто в неаполитанском стиле с двухдневной выдержкой, фирменный соус, моцарелла, ростбиф и антрекот с лёгкой горчицей с мёдом и оливковым маслом, выпекается в каменной печи.' },
    ar: { desc: 'عجينة نابولي مُرتاحة يومين، صلصة بيتزا خاصة، موزاريلا، روست بيف ولحم بقري مع لمسة من الخردل بالعسل وزيت الزيتون، تُخبز في فرن حجري.' },
  },
  'Çilekli Magnolia': {
    en: { name: 'Strawberry Magnolia', desc: FRESH_EN },
    ru: { name: 'Магнолия с клубникой', desc: FRESH_RU },
    ar: { name: 'ماغنوليا بالفراولة', desc: FRESH_AR },
  },
  'Muzlu Magnolia': {
    en: { name: 'Banana Magnolia', desc: FRESH_EN },
    ru: { name: 'Магнолия с бананом', desc: FRESH_RU },
    ar: { name: 'ماغنوليا بالموز', desc: FRESH_AR },
  },
  'Cedric Grolet Limon': {
    en: { name: 'Cedric Grolet Lemon', desc: 'Lemon cream, fresh lemon, almond pastry and cream. Handmade, fresh daily.' },
    ru: { name: 'Cedric Grolet Лимон', desc: 'Лимонный крем, свежий лимон, миндальное тесто и крем. Ручная работа, свежая ежедневно.' },
    ar: { name: 'سيدريك غروليه ليمون', desc: 'كريمة الليمون، ليمون طازج، عجينة باللوز وكريمة. صنع يدوياً، طازج يومياً.' },
  },
  'Cedric Grolet Çilek': {
    en: { name: 'Cedric Grolet Strawberry', desc: 'Fresh strawberries and cream. Handmade, fresh daily.' },
    ru: { name: 'Cedric Grolet Клубника', desc: 'Свежая клубника и крем. Ручная работа, свежая ежедневно.' },
    ar: { name: 'سيدريك غروليه فراولة', desc: 'فراولة طازجة وكريمة. صنع يدوياً، طازج يومياً.' },
  },
  'Cedric Grolet Antep Fıstığı': {
    en: { name: 'Cedric Grolet Pistachio', desc: 'Pistachio cream and cream. Handmade, fresh daily.' },
    ru: { name: 'Cedric Grolet Фисташка', desc: 'Фисташковый крем и крем. Ручная работа, свежая ежедневно.' },
    ar: { name: 'سيدريك غروليه فستق حلبي', desc: 'كريمة فستق حلبي وكريمة. صنع يدوياً، طازج يومياً.' },
  },
  'Kit-Kat Pasta': {
    en: { name: 'Kit-Kat Cake', desc: null },
    ru: { name: 'Торт Kit-Kat', desc: null },
    ar: { name: 'كعكة كيت كات', desc: null },
  },
  'Cookie Pie': {
    en: { desc: null },
    ru: { desc: null },
    ar: { desc: null },
  },
  'Lotus Magnolia': {
    en: { desc: 'Lotus cream and Lotus biscuit Magnolia. Handmade, fresh daily.' },
    ru: { desc: 'Магнолия с кремом Lotus и печеньем Lotus. Ручная работа, свежая ежедневно.' },
    ar: { desc: 'ماغنوليا بكريمة لوتس وبسكويت لوتس. صنع يدوياً، طازج يومياً.' },
  },
  'Beyaz Çikolatalı Brownie': {
    en: { name: 'White Chocolate Brownie', desc: 'Ice cream option available for +40 TL. Handmade, fresh daily (served warm).' },
    ru: { name: 'Брауни с белым шоколадом', desc: 'Опция с мороженым за +40 TL. Ручная работа, свежая ежедневно (подаётся тёплой).' },
    ar: { name: 'براوني بالشوكولاتة البيضاء', desc: 'خيار مع آيس كريم بفرق +40 ليرة. صنع يدوياً، طازج يومياً (يُقدَّم ساخناً).' },
  },
  'San Sebastian Cheesecake': {
    en: { desc: 'Served with chocolate for +30 TL. Handmade, fresh daily.' },
    ru: { desc: 'Подаётся с шоколадом за +30 TL. Ручная работа, свежая ежедневно.' },
    ar: { desc: 'يُقدَّم مع الشوكولاتة بفرق +30 ليرة. صنع يدوياً، طازج يومياً.' },
  },
  'Çikolatalı Cup': {
    en: { name: 'Chocolate Cup', desc: 'Ground white chocolate, chocolate pudding and chocolate cake. Handmade, fresh daily.' },
    ru: { name: 'Шоколадный кап', desc: 'Молотый белый шоколад, шоколадный пудинг и шоколадный кекс. Ручная работа, свежая ежедневно.' },
    ar: { name: 'كوب شوكولاتة', desc: 'شوكولاتة بيضاء مطحونة، بودينغ شوكولاتة وكيك شوكولاتة. صنع يدوياً، طازج يومياً.' },
  },
  'Latte Cup': {
    en: { desc: 'Coffee cream, white cake, hazelnut pieces, white & milk chocolate.' },
    ru: { desc: 'Кофейный крем, белый кекс, кусочки фундука, белый и молочный шоколад.' },
    ar: { desc: 'كريمة قهوة، كيك أبيض، قطع بندق، شوكولاتة بيضاء وحليبية.' },
  },
  'Spoonful': {
    en: { desc: 'Chocolate cake with cream and chocolate sauce. Handmade, fresh daily.' },
    ru: { desc: 'Шоколадный кекс с кремом и шоколадным соусом. Ручная работа, свежая ежедневно.' },
    ar: { desc: 'كيك شوكولاتة مع كريمة وصلصة شوكولاتة. صنع يدوياً، طازج يومياً.' },
  },
  'Tiramisu': {
    en: { desc: FRESH_EN },
    ru: { desc: FRESH_RU },
    ar: { desc: FRESH_AR },
  },
  'Pastacı Kremalı Cream Puff': {
    en: { name: 'Pastry Cream Cream Puff', desc: 'Topped with milk & white chocolate sauce. Handmade, fresh daily.' },
    ru: { name: 'Профитроль с заварным кремом', desc: 'С соусом из молочного и белого шоколада. Ручная работа, свежая ежедневно.' },
    ar: { name: 'كريم باف بكريمة المعجنات', desc: 'مغطى بصلصة شوكولاتة حليبية وبيضاء. صنع يدوياً، طازج يومياً.' },
  },
  'Çikolatalı Kruvasan': {
    en: { name: 'Chocolate Croissant', desc: 'Buttery croissant filled with Nutella, strawberry and banana, topped with chocolate sauce and hazelnut pieces.' },
    ru: { name: 'Шоколадный круассан', desc: 'Сливочный круассан с Nutella, клубникой и бананом, с шоколадным соусом и кусочками фундука.' },
    ar: { name: 'كرواسان بالشوكولاتة', desc: 'كرواسان زبدي محشو بنوتيلا وفراولة وموز، مغطى بصلصة شوكولاتة وقطع بندق.' },
  },
  'Lotus Kruvasan': {
    en: { name: 'Lotus Croissant', desc: 'Buttery croissant filled with Lotus cream, topped with Lotus topping, sliced almonds and Lotus biscuit crumbs.' },
    ru: { name: 'Круассан Lotus', desc: 'Сливочный круассан с кремом Lotus, топпингом Lotus, лепестками миндаля и крошками печенья Lotus.' },
    ar: { name: 'كرواسان لوتس', desc: 'كرواسان زبدي محشو بكريمة لوتس، مغطى بتوبينغ لوتس ولوز مقطّع وفتات بسكويت لوتس.' },
  },
  'Antep Fıstıklı Kruvasan': {
    en: { name: 'Pistachio Croissant', desc: 'Buttery croissant filled with pistachio cream and special goat milk ice cream, topped with pistachio sauce and crumbs.' },
    ru: { name: 'Круассан с фисташками', desc: 'Сливочный круассан с фисташковым кремом и козьим мороженым, с фисташковым соусом и крошками.' },
    ar: { name: 'كرواسان بالفستق', desc: 'كرواسان زبدي محشو بكريمة فستق وآيس كريم حليب ماعز خاص، مغطى بصلصة فستق وفُتات.' },
  },
  'Filtre Kahve': {
    en: { name: 'Filter Coffee', desc: null },
    ru: { name: 'Фильтр-кофе', desc: null },
    ar: { name: 'قهوة مفلترة', desc: null },
  },
  'Sütlü Filtre Kahve': {
    en: { name: 'Milk Filter Coffee', desc: null },
    ru: { name: 'Фильтр-кофе с молоком', desc: null },
    ar: { name: 'قهوة مفلترة بالحليب', desc: null },
  },
  'Red Eye Coffee': {
    en: { desc: 'Filter coffee with a shot of espresso.' },
    ru: { desc: 'Фильтр-кофе с шотом эспрессо.' },
    ar: { desc: 'قهوة مفلترة مع شوت إسبريسو.' },
  },
  'Black Eye Coffee': {
    en: { desc: 'Filter coffee with a double shot of espresso.' },
    ru: { desc: 'Фильтр-кофе с двойным шотом эспрессо.' },
    ar: { desc: 'قهوة مفلترة مع شوت إسبريسو مزدوج.' },
  },
  'Türk Kahvesi': {
    en: { name: 'Turkish Coffee', desc: 'Komotini coffee from Greece.' },
    ru: { name: 'Турецкий кофе', desc: 'Кофе Гюмюльджине из Греции.' },
    ar: { name: 'قهوة تركية', desc: 'قهوة كوموتيني من اليونان.' },
  },
  'Double Türk Kahvesi': {
    en: { name: 'Double Turkish Coffee', desc: 'Komotini coffee from Greece.' },
    ru: { name: 'Двойной турецкий кофе', desc: 'Кофе Гюмюльджине из Греции.' },
    ar: { name: 'قهوة تركية مزدوجة', desc: 'قهوة كوموتيني من اليونان.' },
  },
  'Damla Sakızlı Türk Kahvesi': {
    en: { name: 'Mastic Turkish Coffee', desc: 'Made with authentic mastic from Greece.' },
    ru: { name: 'Турецкий кофе с мастикой', desc: 'С настоящей мастикой из Греции.' },
    ar: { name: 'قهوة تركية بالمستكة', desc: 'بمستكة أصلية من اليونان.' },
  },
  'Double Damla S. Türk Kahvesi': {
    en: { name: 'Double Mastic Turkish Coffee', desc: 'Made with authentic mastic from Greece.' },
    ru: { name: 'Двойной турецкий кофе с мастикой', desc: 'С настоящей мастикой из Греции.' },
    ar: { name: 'قهوة تركية مزدوجة بالمستكة', desc: 'بمستكة أصلية من اليونان.' },
  },
  'Espresso': { en: { desc: null }, ru: { desc: null }, ar: { desc: null } },
  'Double Espresso': {
    en: { desc: 'Double shot espresso.' },
    ru: { desc: 'Эспрессо дабл.' },
    ar: { desc: 'إسبريسو مزدوج.' },
  },
  'Espresso Macchiato': {
    en: { desc: 'Espresso, milk foam.' },
    ru: { desc: 'Эспрессо, молочная пена.' },
    ar: { desc: 'إسبريسو، رغوة حليب.' },
  },
  'Americano': {
    en: { desc: 'Double shot espresso, water.' },
    ru: { desc: 'Эспрессо дабл, вода.' },
    ar: { desc: 'إسبريسو مزدوج، ماء.' },
  },
  'Latte': {
    en: { desc: 'Espresso, milk.' },
    ru: { desc: 'Эспрессо, молоко.' },
    ar: { desc: 'إسبريسو، حليب.' },
  },
  'Cappuccino': {
    en: { desc: 'Espresso, milk, milk foam.' },
    ru: { desc: 'Эспрессо, молоко, молочная пена.' },
    ar: { desc: 'إسبريسو، حليب، رغوة حليب.' },
  },
  'Flat White': {
    en: { desc: 'Double shot espresso, milk.' },
    ru: { desc: 'Эспрессо дабл, молоко.' },
    ar: { desc: 'إسبريسو مزدوج، حليب.' },
  },
  'Cortado': {
    en: { desc: 'Double shot espresso, milk.' },
    ru: { desc: 'Эспрессо дабл, молоко.' },
    ar: { desc: 'إسبريسو مزدوج، حليب.' },
  },
  'Mocha': {
    en: { desc: 'Espresso, chocolate sauce, milk.' },
    ru: { desc: 'Эспрессо, шоколадный соус, молоко.' },
    ar: { desc: 'إسبريسو، صلصة شوكولاتة، حليب.' },
  },
  'White Mocha': {
    en: { desc: 'Espresso, white chocolate sauce, milk.' },
    ru: { desc: 'Эспрессо, соус из белого шоколада, молоко.' },
    ar: { desc: 'إسبريسو، صلصة شوكولاتة بيضاء، حليب.' },
  },
  'Vanilya Latte': {
    en: { name: 'Vanilla Latte', desc: 'Espresso, vanilla flavor, milk.' },
    ru: { name: 'Ванильный латте', desc: 'Эспрессо, ванильный ароматизатор, молоко.' },
    ar: { name: 'لاتيه فانيليا', desc: 'إسبريسو، نكهة فانيليا، حليب.' },
  },
  'Karamel Latte': {
    en: { name: 'Caramel Latte', desc: 'Espresso, caramel flavor, milk.' },
    ru: { name: 'Карамельный латте', desc: 'Эспрессо, карамельный ароматизатор, молоко.' },
    ar: { name: 'لاتيه كراميل', desc: 'إسبريسو، نكهة كراميل، حليب.' },
  },
  'Salted Caramel Mocha': {
    en: { desc: 'Espresso, salted caramel flavor, milk (not a salty coffee :)' },
    ru: { desc: 'Эспрессо, ароматизатор солёной карамели, молоко (не солёный кофе :)' },
    ar: { desc: 'إسبريسو، نكهة كراميل مملح، حليب (ليس قهوة مالحة :)' },
  },
  'Fındık Latte': {
    en: { name: 'Hazelnut Latte', desc: 'Espresso, hazelnut flavor, milk.' },
    ru: { name: 'Латте с фундуком', desc: 'Эспрессо, фундучный ароматизатор, молоко.' },
    ar: { name: 'لاتيه بندق', desc: 'إسبريسو، نكهة بندق، حليب.' },
  },
  'Toffeenut Latte': {
    en: { desc: 'Espresso, toffee nut flavor, milk.' },
    ru: { desc: 'Эспрессо, ароматизатор тофи-орех, молоко.' },
    ar: { desc: 'إسبريسو، نكهة توفي نات، حليب.' },
  },
  'Coconut Latte': {
    en: { desc: 'Espresso, coconut flavor, milk.' },
    ru: { desc: 'Эспрессо, кокосовый ароматизатор, молоко.' },
    ar: { desc: 'إسبريسو، نكهة جوز الهند، حليب.' },
  },
  'Pumpkin Spice Latte': {
    en: { desc: 'Espresso, spiced pumpkin flavor, milk.' },
    ru: { desc: 'Эспрессо, ароматизатор пряной тыквы, молоко.' },
    ar: { desc: 'إسبريسو، نكهة قرع متبّلة، حليب.' },
  },
  'Honeymoon Latte': {
    en: { desc: 'Espresso, honey, cinnamon, milk.' },
    ru: { desc: 'Эспрессо, мёд, корица, молоко.' },
    ar: { desc: 'إسبريسو، عسل، قرفة، حليب.' },
  },
  'Nutella Latte': {
    en: { desc: 'Espresso, Nutella, milk.' },
    ru: { desc: 'Эспрессо, Nutella, молоко.' },
    ar: { desc: 'إسبريسو، نوتيلا، حليب.' },
  },
  'Irish Cream Latte': {
    en: { desc: 'Irish cream flavored.' },
    ru: { desc: 'С ароматом ирландского крема.' },
    ar: { desc: 'بنكهة الكريم الأيرلندي.' },
  },
  'Lotus Latte': {
    en: { desc: 'Espresso, Lotus topping sauce, milk.' },
    ru: { desc: 'Эспрессо, соус Lotus, молоко.' },
    ar: { desc: 'إسبريسو، صلصة توبينغ لوتس، حليب.' },
  },
  'Pistachio Mocha': {
    en: { desc: 'Pistachio paste, milk, espresso.' },
    ru: { desc: 'Фисташковая паста, молоко, эспрессо.' },
    ar: { desc: 'معجون فستق، حليب، إسبريسو.' },
  },
  'Spanish Latte': {
    en: { desc: 'Natural condensed milk, espresso, milk.' },
    ru: { desc: 'Натуральное молочное сгущённое молоко, эспрессо, молоко.' },
    ar: { desc: 'حليب مكثّف طبيعي، إسبريسو، حليب.' },
  },
  'Ice Americano': {
    en: { desc: 'Double shot espresso, ice, water.' },
    ru: { desc: 'Эспрессо дабл, лёд, вода.' },
    ar: { desc: 'إسبريسو مزدوج، ثلج، ماء.' },
  },
  'Ice Latte': {
    en: { desc: 'Double shot espresso, ice, milk.' },
    ru: { desc: 'Эспрессо дабл, лёд, молоко.' },
    ar: { desc: 'إسبريسو مزدوج، ثلج، حليب.' },
  },
  'Ice Honeymoon Latte': {
    en: { desc: 'Double shot espresso, milk, ice, honey, cinnamon.' },
    ru: { desc: 'Эспрессо дабл, молоко, лёд, мёд, корица.' },
    ar: { desc: 'إسبريسو مزدوج، حليب، ثلج، عسل، قرفة.' },
  },
  'Ice Vanilya Latte': {
    en: { name: 'Iced Vanilla Latte', desc: 'Double shot espresso, vanilla flavor, milk, ice.' },
    ru: { name: 'Айс ванильный латте', desc: 'Эспрессо дабл, ванильный ароматизатор, молоко, лёд.' },
    ar: { name: 'آيس لاتيه فانيليا', desc: 'إسبريسو مزدوج، نكهة فانيليا، حليب، ثلج.' },
  },
  'Ice Karamel Latte': {
    en: { name: 'Iced Caramel Latte', desc: 'Double shot espresso, caramel flavor, milk, ice.' },
    ru: { name: 'Айс карамельный латте', desc: 'Эспрессо дабл, карамельный ароматизатор, молоко, лёд.' },
    ar: { name: 'آيس لاتيه كراميل', desc: 'إسبريسو مزدوج، نكهة كراميل، حليب، ثلج.' },
  },
  'Ice Fındık Latte': {
    en: { name: 'Iced Hazelnut Latte', desc: 'Double shot espresso, hazelnut flavor, milk, ice.' },
    ru: { name: 'Айс латте с фундуком', desc: 'Эспрессо дабл, фундучный ароматизатор, молоко, лёд.' },
    ar: { name: 'آيس لاتيه بندق', desc: 'إسبريسو مزدوج، نكهة بندق، حليب، ثلج.' },
  },
  'Ice Toffeenut Latte': {
    en: { desc: 'Double shot espresso, toffee nut flavor, milk, ice.' },
    ru: { desc: 'Эспрессо дабл, ароматизатор тофи-орех, молоко, лёд.' },
    ar: { desc: 'إسبريسو مزدوج، نكهة توفي نات، حليب، ثلج.' },
  },
  'Ice Mocha': {
    en: { desc: 'Double shot espresso, chocolate sauce, milk, ice.' },
    ru: { desc: 'Эспрессо дабл, шоколадный соус, молоко, лёд.' },
    ar: { desc: 'إسبريسو مزدوج، صلصة شوكولاتة، حليب، ثلج.' },
  },
  'Ice White Mocha': {
    en: { desc: 'Double shot espresso, white chocolate sauce, milk, ice.' },
    ru: { desc: 'Эспрессо дабл, соус из белого шоколада, молоко, лёд.' },
    ar: { desc: 'إسبريسو مزدوج، صلصة شوكولاتة بيضاء، حليب، ثلج.' },
  },
  'Ice Nutella Latte': {
    en: { desc: 'Double shot espresso, Nutella, milk, ice.' },
    ru: { desc: 'Эспрессо дабл, Nutella, молоко, лёд.' },
    ar: { desc: 'إسبريسو مزدوج، نوتيلا، حليب، ثلج.' },
  },
  'Ice Lotus Latte': {
    en: { desc: 'Double shot espresso, Lotus Biscoff topping sauce, milk, ice.' },
    ru: { desc: 'Эспрессо дабл, соус Lotus Biscoff, молоко, лёд.' },
    ar: { desc: 'إسبريسو مزدوج، صلصة توبينغ لوتس بيسكوف، حليب، ثلج.' },
  },
  'Ice Pistachio Mocha': {
    en: { desc: 'Double shot espresso, pistachio paste, milk, ice.' },
    ru: { desc: 'Эспрессо дабл, фисташковая паста, молоко, лёд.' },
    ar: { desc: 'إسبريسو مزدوج، معجون فستق، حليب، ثلج.' },
  },
  'Ice Salted Caramel Mocha': {
    en: { desc: 'Double shot espresso, salted caramel flavor, milk, ice (not a salty coffee :)' },
    ru: { desc: 'Эспрессо дабл, ароматизатор солёной карамели, молоко, лёд (не солёный кофе :)' },
    ar: { desc: 'إسبريسو مزدوج، نكهة كراميل مملح، حليب، ثلج (ليس قهوة مالحة :)' },
  },
  'Ice Coconut Latte': {
    en: { desc: 'Double shot espresso, coconut flavor, milk, ice.' },
    ru: { desc: 'Эспрессо дабл, кокосовый ароматизатор, молоко, лёд.' },
    ar: { desc: 'إسبريسو مزدوج، نكهة جوز الهند، حليب، ثلج.' },
  },
  'Ice Pumpkin Spice Latte': {
    en: { desc: 'Double shot espresso, milk, ice, spiced pumpkin flavor.' },
    ru: { desc: 'Эспрессо дабл, молоко, лёд, ароматизатор пряной тыквы.' },
    ar: { desc: 'إسبريسو مزدوج، حليب، ثلج، نكهة قرع متبّلة.' },
  },
  'Ice Irish Cream Latte': {
    en: { desc: 'Double shot espresso, milk, ice, Irish cream flavor.' },
    ru: { desc: 'Эспрессо дабл, молоко, лёд, аромат ирландского крема.' },
    ar: { desc: 'إسبريسو مزدوج، حليب، ثلج، نكهة الكريم الأيرلندي.' },
  },
  'Ice Spanish Latte': {
    en: { desc: 'Double shot espresso, milk, ice, condensed milk.' },
    ru: { desc: 'Эспрессо дабл, молоко, лёд, сгущённое молоко.' },
    ar: { desc: 'إسبريسو مزدوج، حليب، ثلج، حليب مكثّف.' },
  },
  'Ice Filtre Kahve': {
    en: { name: 'Iced Filter Coffee', desc: null },
    ru: { name: 'Айс фильтр-кофе', desc: null },
    ar: { name: 'قهوة مفلترة باردة', desc: null },
  },
  'Ice Sütlü Filtre Kahve': {
    en: { name: 'Iced Milk Filter Coffee', desc: null },
    ru: { name: 'Айс фильтр-кофе с молоком', desc: null },
    ar: { name: 'قهوة مفلترة باردة بالحليب', desc: null },
  },
  'Cold Brew': { en: { desc: null }, ru: { desc: null }, ar: { desc: null } },
  'Affogato': {
    en: { desc: 'Espresso, vanilla ice cream.' },
    ru: { desc: 'Эспрессо, ванильное мороженое.' },
    ar: { desc: 'إسبريسو، آيس كريم فانيليا.' },
  },
  'V60': {
    en: { desc: 'Beans: Brazil, Peru, Colombia, Ethiopia.' },
    ru: { desc: 'Зёрна: Бразилия, Перу, Колумбия, Эфиопия.' },
    ar: { desc: 'حبوب: البرازيل، بيرو، كولومبيا، إثيوبيا.' },
  },
  'V60 Double': {
    en: { desc: 'For 2. Beans: Brazil, Peru, Colombia, Ethiopia.' },
    ru: { desc: 'На 2 персоны. Зёрна: Бразилия, Перу, Колумбия, Эфиопия.' },
    ar: { desc: 'لشخصين. حبوب: البرازيل، بيرو، كولومبيا، إثيوبيا.' },
  },
  'Chemex': {
    en: { desc: 'Beans: Brazil, Peru, Colombia, Ethiopia.' },
    ru: { desc: 'Зёрна: Бразилия, Перу, Колумбия, Эфиопия.' },
    ar: { desc: 'حبوب: البرازيل، بيرو، كولومبيا، إثيوبيا.' },
  },
  'Chemex Double': {
    en: { desc: 'For 2. Beans: Brazil, Peru, Colombia, Ethiopia.' },
    ru: { desc: 'На 2 персоны. Зёрна: Бразилия, Перу, Колумбия, Эфиопия.' },
    ar: { desc: 'لشخصين. حبوب: البرازيل، بيرو، كولومبيا، إثيوبيا.' },
  },
  'Sahlep': { en: { desc: null }, ru: { desc: null }, ar: { desc: null } },
  'Damla Sakızlı Sahlep': {
    en: { name: 'Mastic Salep', desc: null },
    ru: { name: 'Салеп с мастикой', desc: null },
    ar: { name: 'سحلب بالمستكة', desc: null },
  },
  'Sıcak Çikolata': {
    en: { name: 'Hot Chocolate', desc: 'Made with Cadbury chocolate.' },
    ru: { name: 'Горячий шоколад', desc: 'На шоколаде Cadbury.' },
    ar: { name: 'شوكولاتة ساخنة', desc: 'بشوكولاتة كادبوري.' },
  },
  'Chai Tea Latte': {
    en: { desc: 'Da Vinci Chai Tea flavor with milk.' },
    ru: { desc: 'Аромат Da Vinci Chai Tea с молоком.' },
    ar: { desc: 'نكهة دا فينشي تشاي تي مع الحليب.' },
  },
  'Sıcak Ballı Süt': {
    en: { name: 'Hot Honey Milk', desc: null },
    ru: { name: 'Горячее молоко с мёдом', desc: null },
    ar: { name: 'حليب ساخن بالعسل', desc: null },
  },
  'Fincan Çay': {
    en: { name: 'Cup of Tea', desc: null },
    ru: { name: 'Чай в чашке', desc: null },
    ar: { name: 'فنجان شاي', desc: null },
  },
  'Çay': {
    en: { name: 'Tea', desc: null },
    ru: { name: 'Чай', desc: null },
    ar: { name: 'شاي', desc: null },
  },
  'Bal Badem Sahlep': {
    en: { name: 'Honey Almond Salep', desc: null },
    ru: { name: 'Салеп с мёдом и миндалём', desc: null },
    ar: { name: 'سحلب بالعسل واللوز', desc: null },
  },
  'Taze Sıkma Portakal Suyu': {
    en: { name: 'Freshly Squeezed Orange Juice', desc: 'Approx. 300 ml.' },
    ru: { name: 'Свежевыжатый апельсиновый сок', desc: 'Около 300 мл.' },
    ar: { name: 'عصير برتقال طازج', desc: 'حوالي 300 مل.' },
  },
  'Limonata': {
    en: { name: 'Lemonade', desc: 'Available in summer months only.' },
    ru: { name: 'Лимонад', desc: 'Только в летние месяцы.' },
    ar: { name: 'ليموناضة', desc: 'متوفر في أشهر الصيف فقط.' },
  },
  'Cool Lime': {
    en: { desc: 'Refreshing drink with key lime flavor.' },
    ru: { desc: 'Освежающий напиток с ароматом лайма.' },
    ar: { desc: 'مشروب منعش بنكهة الليمون الحامض.' },
  },
  'Cool Berry': { en: { desc: null }, ru: { desc: null }, ar: { desc: null } },
  'Watermelon Mojito': {
    en: { desc: 'Watermelon and mint syrup, Sprite and ice.' },
    ru: { desc: 'Арбузный и мятный сироп, Sprite и лёд.' },
    ar: { desc: 'شراب بطيخ ونعناع، سبرايت وثلج.' },
  },
  'Kırmızı Kutu': {
    en: { name: 'Red Box', desc: 'Lemon, key lime and red berry boxed drink.' },
    ru: { name: 'Красная коробка', desc: 'Лимон, лайм и красные ягоды в коробочном напитке.' },
    ar: { name: 'الصندوق الأحمر', desc: 'ليمون، ليمون حامض ومشروب علبة بالتوت الأحمر.' },
  },
  'Sarı Kutu': {
    en: { name: 'Yellow Box', desc: 'Lemon, key lime and mango boxed drink.' },
    ru: { name: 'Жёлтая коробка', desc: 'Лимон, лайм и манго в коробочном напитке.' },
    ar: { name: 'الصندوق الأصفر', desc: 'ليمون، ليمون حامض ومانجو في مشروب علبة.' },
  },
  'Yeşil Kutu': {
    en: { name: 'Green Box', desc: 'Lemon, key lime and mint boxed drink.' },
    ru: { name: 'Зелёная коробка', desc: 'Лимон, лайм и мята в коробочном напитке.' },
    ar: { name: 'الصندوق الأخضر', desc: 'ليمون، ليمون حامض ونعناع في مشروب علبة.' },
  },
  'Pink Acid': {
    en: { desc: 'Dragon fruit, orange, lemon, passion fruit and ice.' },
    ru: { desc: 'Питахайя, апельсин, лимон, маракуйя и лёд.' },
    ar: { desc: 'فاكهة التنين، برتقال، ليمون، باشن فروت وثلج.' },
  },
  'Ice Chai Tea Latte': {
    en: { desc: 'Da Vinci Chai Tea flavor, milk, ice.' },
    ru: { desc: 'Аромат Da Vinci Chai Tea, молоко, лёд.' },
    ar: { desc: 'نكهة دا فينشي تشاي تي، حليب، ثلج.' },
  },
  'Uranos': {
    en: { desc: 'Blue Curaçao (orange) flavor, green apple soda.' },
    ru: { desc: 'Аромат Blue Curaçao (апельсин), содовая с зелёным яблоком.' },
    ar: { desc: 'نكهة بلو كوراساو (برتقال)، صودا تفاح أخضر.' },
  },
  'Kuzu Kulağı': {
    en: { name: 'Sorrel', desc: 'Green apple, sorrel and mint.' },
    ru: { name: 'Щавель', desc: 'Зелёное яблоко, щавель и мята.' },
    ar: { name: 'حميض', desc: 'تفاح أخضر، حميض ونعناع.' },
  },
  'Mango Sol': {
    en: { desc: 'Mango, coconut and cinnamon.' },
    ru: { desc: 'Манго, кокос и корица.' },
    ar: { desc: 'مانجو، جوز هند وقرفة.' },
  },
  'Böğürtlen Frozen': {
    en: { name: 'Blackberry Frozen', desc: null },
    ru: { name: 'Фрозен с ежевикой', desc: null },
    ar: { name: 'فروزن توت أسود', desc: null },
  },
  'Yeşil Elma Frozen': {
    en: { name: 'Green Apple Frozen', desc: null },
    ru: { name: 'Фрозен с зелёным яблоком', desc: null },
    ar: { name: 'فروزن تفاح أخضر', desc: null },
  },
  'Ananas Frozen': {
    en: { name: 'Pineapple Frozen', desc: null },
    ru: { name: 'Фрозен с ананасом', desc: null },
    ar: { name: 'فروزن أناناس', desc: null },
  },
  'Mango Frozen': { en: { desc: null }, ru: { desc: null }, ar: { desc: null } },
  'Çilek Frozen': {
    en: { name: 'Strawberry Frozen', desc: null },
    ru: { name: 'Фрозен с клубникой', desc: null },
    ar: { name: 'فروزن فراولة', desc: null },
  },
  'Kavun Frozen': {
    en: { name: 'Melon Frozen', desc: null },
    ru: { name: 'Фрозен с дыней', desc: null },
    ar: { name: 'فروزن شمام', desc: null },
  },
  'Muz Frozen': {
    en: { name: 'Banana Frozen', desc: null },
    ru: { name: 'Фрозен с бананом', desc: null },
    ar: { name: 'فروزن موز', desc: null },
  },
  'Orman Meyveli Frozen': {
    en: { name: 'Forest Berry Frozen', desc: null },
    ru: { name: 'Фрозен с лесными ягодами', desc: null },
    ar: { name: 'فروزن توت الغابة', desc: null },
  },
  'Çikolatalı Milkshake': {
    en: { name: 'Chocolate Milkshake', desc: null },
    ru: { name: 'Шоколадный милкшейк', desc: null },
    ar: { name: 'ميلك شيك شوكولاتة', desc: null },
  },
  'Ferrero Milkshake': {
    en: { desc: 'Hazelnut chocolate Ferrero flavored milkshake.' },
    ru: { desc: 'Милкшейк с ароматом фундучного шоколада Ferrero.' },
    ar: { desc: 'ميلك شيك بنكهة شوكولاتة فيريرو بالبندق.' },
  },
  'Vanilya-Çilek Milkshake': {
    en: { name: 'Vanilla-Strawberry Milkshake', desc: null },
    ru: { name: 'Ванильно-клубничный милкшейк', desc: null },
    ar: { name: 'ميلك شيك فانيليا وفراولة', desc: null },
  },
  'Karamel Milkshake': {
    en: { name: 'Caramel Milkshake', desc: null },
    ru: { name: 'Карамельный милкшейк', desc: null },
    ar: { name: 'ميلك شيك كراميل', desc: null },
  },
  'Banoffee Milkshake': {
    en: { desc: 'A blend of caramel, banana and chocolate flavors.' },
    ru: { desc: 'Сочетание карамельного, бананового и шоколадного вкусов.' },
    ar: { desc: 'مزيج من نكهات الكراميل والموز والشوكولاتة.' },
  },
  'Vanilya Milkshake': {
    en: { name: 'Vanilla Milkshake', desc: null },
    ru: { name: 'Ванильный милкшейк', desc: null },
    ar: { name: 'ميلك شيك فانيليا', desc: null },
  },
  'Lotus Milkshake': {
    en: { desc: 'A special blend with Lotus biscuit cream that instantly satisfies your sweet craving.' },
    ru: { desc: 'Особый рецепт с кремом печенья Lotus, мгновенно утоляющий тягу к сладкому.' },
    ar: { desc: 'خلطة خاصة بكريمة بسكويت لوتس تُشبع رغبتك في الحلوى فوراً.' },
  },
  'Mystic': {
    en: { desc: `Turmeric mango green tea. ${STEEP_EN}` },
    ru: { desc: `Зелёный чай с куркумой и манго. ${STEEP_RU}` },
    ar: { desc: `شاي أخضر بالكركم والمانجو. ${STEEP_AR}` },
  },
  'Relax': {
    en: { desc: `Lavender rooibos tea. ${STEEP_EN}` },
    ru: { desc: `Ройбуш с лавандой. ${STEEP_RU}` },
    ar: { desc: `شاي رويبوس باللافندر. ${STEEP_AR}` },
  },
  'Happy': {
    en: { desc: `Strawberry mint tea. ${STEEP_EN}` },
    ru: { desc: `Чай с клубникой и мятой. ${STEEP_RU}` },
    ar: { desc: `شاي بالفراولة والنعناع. ${STEEP_AR}` },
  },
  'Boost': {
    en: { desc: `Hibiscus fruit tea. ${STEEP_EN}` },
    ru: { desc: `Фруктовый чай с гибискусом. ${STEEP_RU}` },
    ar: { desc: `شاي فواكه بالكركديه. ${STEEP_AR}` },
  },
  'Indulge': {
    en: { desc: `Organic vanilla rooibos tea. ${STEEP_EN}` },
    ru: { desc: `Органический ванильный ройбуш. ${STEEP_RU}` },
    ar: { desc: `شاي رويبوس عضوي بالفانيليا. ${STEEP_AR}` },
  },
  'Escape': {
    en: { desc: `Tropical oolong tea. ${STEEP_EN}` },
    ru: { desc: `Тропический улун. ${STEEP_RU}` },
    ar: { desc: `شاي أولونغ استوائي. ${STEEP_AR}` },
  },
  'Adaçayı': {
    en: { name: 'Sage Tea', desc: `Served with lemon and honey. ${STEEP_EN}` },
    ru: { name: 'Чай с шалфеем', desc: `Подаётся с лимоном и мёдом. ${STEEP_RU}` },
    ar: { name: 'شاي المريمية', desc: `يُقدَّم مع الليمون والعسل. ${STEEP_AR}` },
  },
  'Ihlamur': {
    en: { name: 'Linden Tea', desc: `Served with honey and lemon. ${STEEP_EN}` },
    ru: { name: 'Липовый чай', desc: `Подаётся с мёдом и лимоном. ${STEEP_RU}` },
    ar: { name: 'شاي الزيزفون', desc: `يُقدَّم مع العسل والليمون. ${STEEP_AR}` },
  },
  'Yeşil Çay': {
    en: { name: 'Green Tea', desc: STEEP_EN },
    ru: { name: 'Зелёный чай', desc: STEEP_RU },
    ar: { name: 'شاي أخضر', desc: STEEP_AR },
  },
  'Velvet Berry': {
    en: { desc: `Apple, hibiscus, rosehip, raspberry and raspberry leaves. ${STEEP_EN}` },
    ru: { desc: `Яблоко, гибискус, шиповник, малина и листья малины. ${STEEP_RU}` },
    ar: { desc: `تفاح، كركديه، ورد البلبل، توت العليق وأوراق التوت. ${STEEP_AR}` },
  },
  'Green Boost': {
    en: { desc: `Green tea, lime & ginger. ${STEEP_EN}` },
    ru: { desc: `Зелёный чай, лайм и имбирь. ${STEEP_RU}` },
    ar: { desc: `شاي أخضر، ليمون حامض وزنجبيل. ${STEEP_AR}` },
  },
  'Nordic': {
    en: { desc: `Green tea, apple, orange peel, clove, almond, rose petals and cinnamon. ${STEEP_EN}` },
    ru: { desc: `Зелёный чай, яблоко, апельсиновая цедра, гвоздика, миндаль, лепестки роз и корица. ${STEEP_RU}` },
    ar: { desc: `شاي أخضر، تفاح، قشر برتقال، قرنفل، لوز، بتلات ورد وقرفة. ${STEEP_AR}` },
  },
  'Bliss': {
    en: { desc: `Apple, hibiscus, rosehip, orange peel, papaya, pineapple, strawberry, raspberry, raisin, rose petals and natural flavor. ${STEEP_EN}` },
    ru: { desc: `Яблоко, гибискус, шиповник, апельсиновая цедра, папайя, ананас, клубника, малина, изюм, лепестки роз и натуральный аромат. ${STEEP_RU}` },
    ar: { desc: `تفاح، كركديه، ورد البلبل، قشر برتقال، بابايا، أناناس، فراولة، توت العليق، زبيب، بتلات ورد ونكهة طبيعية. ${STEEP_AR}` },
  },
  'Spark': {
    en: { desc: `Fennel, licorice root, cinnamon, ginger, clove, black pepper, cardamom, juniper and orange peel. ${STEEP_EN}` },
    ru: { desc: `Фенхель, корень солодки, корица, имбирь, гвоздика, чёрный перец, кардамон, можжевельник и апельсиновая цедра. ${STEEP_RU}` },
    ar: { desc: `شمر، جذر عرق السوس، قرفة، زنجبيل، قرنفل، فلفل أسود، هيل، عرعر وقشر برتقال. ${STEEP_AR}` },
  },
  'Amour': {
    en: { desc: `Apple, hibiscus, rosehip, raspberry, rose petals, cherry, sugar-coated heart candies and flavor. ${STEEP_EN}` },
    ru: { desc: `Яблоко, гибискус, шиповник, малина, лепестки роз, вишня, сахарные конфеты в форме сердец и аромат. ${STEEP_RU}` },
    ar: { desc: `تفاح، كركديه، ورد البلبل، توت العليق، بتلات ورد، كرز، حلوى قلبية مغطاة بالسكر ونكهة. ${STEEP_AR}` },
  },
  'Yogi Spice': {
    en: { desc: `Cinnamon, clove, ginger, cardamom. ${STEEP_EN}` },
    ru: { desc: `Корица, гвоздика, имбирь, кардамон. ${STEEP_RU}` },
    ar: { desc: `قرفة، قرنفل، زنجبيل، هيل. ${STEEP_AR}` },
  },
  'Chocolate Banana': {
    en: { desc: `Chocolate and banana rooibos tea. ${STEEP_EN}` },
    ru: { desc: `Ройбуш с шоколадом и бананом. ${STEEP_RU}` },
    ar: { desc: `شاي رويبوس بالشوكولاتة والموز. ${STEEP_AR}` },
  },
  'Herb Power': {
    en: { desc: `Coltsfoot, elderberry, marshmallow root, great mullein, licorice root and eucalyptus. ${STEEP_EN}` },
    ru: { desc: `Мать-и-мачеха, бузина, корень алтея, коровяк, корень солодки и эвкалипт. ${STEEP_RU}` },
    ar: { desc: `حشيشة السعادى، البلسان، جذر الخطمي، البطماء، جذر عرق السوس والأوكالبتوس. ${STEEP_AR}` },
  },
  'Olympus Power': {
    en: { desc: `Lemongrass, mountain tea, calendula, chamomile, orange peel, natural flavor. ${STEEP_EN}` },
    ru: { desc: `Лемонграсс, горный чай, календула, ромашка, апельسиновая цедра, натуральный аромат. ${STEEP_RU}` },
    ar: { desc: `عشب الليمون، شاي الجبل، آذريون، بابونج، قشر برتقال ونكهة طبيعية. ${STEEP_AR}` },
  },
  'Fit Blend': {
    en: { desc: `Lemon verbena, green tea, hibiscus, birch leaf, senna, wormwood. ${STEEP_EN}` },
    ru: { desc: `Лимонная вербена, зелёный чай, гибискус, берёзовый лист, сенна, полынь. ${STEEP_RU}` },
    ar: { desc: `لويزة، شاي أخضر، كركديه، ورق البتولا، السنا والشيح. ${STEEP_AR}` },
  },
  'Strawberry Spice': {
    en: { desc: `Strawberry and pink pepper rooibos tea. ${STEEP_EN}` },
    ru: { desc: `Ройбуш с клубникой и розовым перцем. ${STEEP_RU}` },
    ar: { desc: `شاي رويبوس بالفراولة والفلفل الوردي. ${STEEP_AR}` },
  },
  'Calm Breeze': {
    en: { desc: `Fennel, chamomile, apple, cinnamon, ginger, nettle, clove, orange peel. ${STEEP_EN}` },
    ru: { desc: `Фенхель, ромашка, яблоко, корица, имбирь, крапива, гвоздика, апельсиновая цедра. ${STEEP_RU}` },
    ar: { desc: `شمر، بابونج، تفاح، قرفة، زنجبيل، القراص، قرنفل وقشر برتقال. ${STEEP_AR}` },
  },
  'Hot Bitter': {
    en: { desc: `Black tea with chocolate pieces and hot pepper. ${STEEP_EN}` },
    ru: { desc: `Чёрный чай с кусочками шоколада и острым перцем. ${STEEP_RU}` },
    ar: { desc: `شاي أسود بقطع شوكولاتة وفلفل حار. ${STEEP_AR}` },
  },
  'Chocorange': {
    en: { desc: `Chocolate and orange rooibos tea. ${STEEP_EN}` },
    ru: { desc: `Ройбуш с шоколадом и апельсином. ${STEEP_RU}` },
    ar: { desc: `شاي رويبوس بالشوكولاتة والبرتقال. ${STEEP_AR}` },
  },
  "Winter's Gone": {
    en: { desc: `Linden, dried ginger, dried lemon, cinnamon, clove and mint. ${STEEP_EN}` },
    ru: { desc: `Липа, сушёный имбирь, сушёный лимон, корица, гвоздика и мята. ${STEEP_RU}` },
    ar: { desc: `زيزفون، زنجبيل مجفف، ليمون مجفف، قرفة، قرنفل ونعناع. ${STEEP_AR}` },
  },
  'Forest Brew': {
    en: { desc: `Orange, apple, clove, pink pepper, cinnamon, cardamom, coriander seed. ${STEEP_EN}` },
    ru: { desc: `Апельсин, яблоко, гвоздика, розовый перец, корица, кардамон, семена кориандра. ${STEEP_RU}` },
    ar: { desc: `برتقال، تفاح، قرنفل، فلفل وردي، قرفة، هيل وبذور الكزبرة. ${STEEP_AR}` },
  },
  'Pai Mu Tan': {
    en: { desc: `Chinese white tea. ${STEEP_EN}` },
    ru: { desc: `Китайский белый чай. ${STEEP_RU}` },
    ar: { desc: `شاي أبيض صيني. ${STEEP_AR}` },
  },
  'Kış Çayı': {
    en: { name: 'Winter Tea', desc: `Caramelized apple & chicory root. ${STEEP_EN}` },
    ru: { name: 'Зимний чай', desc: `Карамелизированное яблоко и корень цикория. ${STEEP_RU}` },
    ar: { name: 'شاي الشتاء', desc: `تفاح مكرمل وجذر الهندباء. ${STEEP_AR}` },
  },
  'Marcella Red Tost': {
    en: { name: 'Marcella Red Toast', desc: 'Kashar cheese, beef ham, tomato paste. (Served with sweet chili sauce and gherkin pickles.)' },
    ru: { name: 'Marcella Red тост', desc: 'Сыр кашар, говяжья ветчина, томатная паста. (Подаётся со сладким чили-соусом и маринованными огурчиками.)' },
    ar: { name: 'مارسيلا توست أحمر', desc: 'جبن قشقوان، لحم بقري مدخّن، معجون طماطم. (يُقدَّم مع صلصة تشيلي حلوة ومخلل خيار.)' },
  },
  'Marcella White Tost': {
    en: { name: 'Marcella White Toast', desc: 'Kashar cheese, tomato paste. (Served with sweet chili sauce and gherkin pickles.)' },
    ru: { name: 'Marcella White тост', desc: 'Сыр кашар, томатная паста. (Подаётся со сладким чили-соусом и маринованными огурчиками.)' },
    ar: { name: 'مارسيلا توست أبيض', desc: 'جبن قشقوان، معجون طماطم. (يُقدَّم مع صلصة تشيلي حلوة ومخلل خيار.)' },
  },
  'Atıştırma Sepeti': {
    en: { name: 'Snack Basket', desc: 'Seasoned french fries, sausage, crispy chicken pieces, onion rings.' },
    ru: { name: 'Корзина закусок', desc: 'Картофель фри с приправами, сосиски, хрустящая курица, луковые кольца.' },
    ar: { name: 'سلة وجبات خفيفة', desc: 'بطاطس مقلية متبّلة، سجق، قطع دجاج مقرمشة، حلقات بصل.' },
  },
  'Patates Kızartması': {
    en: { name: 'French Fries', desc: null },
    ru: { name: 'Картофель фри', desc: null },
    ar: { name: 'بطاطس مقلية', desc: null },
  },
  'Mini Atıştırmalıklar': {
    en: { name: 'Mini Snacks', desc: 'Please ask us for stock and pricing. Cinnamon roll, cherry danish, apple cinnamon danish, mini chocolate croissant, mini butter croissant.' },
    ru: { name: 'Мини-закуски', desc: 'Уточняйте наличие и цену. Синнабон, вишнёвый даниш, яблочно-коричный даниш, мини-шоколадный круассан, мини-сливочный круассан.' },
    ar: { name: 'وجبات خفيفة صغيرة', desc: 'يُرجى الاستفسار عن التوفر والأسعار. لفائف قرفة، دانش بالكرز، دانش تفاح وقرفة، كرواسان شوكولاتة صغير، كرواسان زبدة صغير.' },
  },
  'Cola': { en: { desc: null }, ru: { desc: null }, ar: { desc: null } },
  'Gazoz': {
    en: { name: 'Lemon Soda', desc: null },
    ru: { name: 'Газировка', desc: null },
    ar: { name: 'مشروب غازي', desc: null },
  },
  'Sade Soda': {
    en: { name: 'Plain Sparkling Water', desc: null },
    ru: { name: 'Газированная вода', desc: null },
    ar: { name: 'مياه غازية سادة', desc: null },
  },
  'Karadut & Frenk Üzümlü Soda': {
    en: { name: 'Blackberry & Blackcurrant Soda', desc: null },
    ru: { name: 'Содовая с ежевикой и смородиной', desc: null },
    ar: { name: 'صودا توت أسود وكشمش أسود', desc: null },
  },
  'Elmalı Soda': {
    en: { name: 'Apple Soda', desc: null },
    ru: { name: 'Яблочная содовая', desc: null },
    ar: { name: 'صودا تفاح', desc: null },
  },
  'Churchill': { en: { desc: null }, ru: { desc: null }, ar: { desc: null } },
  'Ice Tea Şeftali': {
    en: { name: 'Peach Iced Tea', desc: null },
    ru: { name: 'Айс-ти персиковый', desc: null },
    ar: { name: 'شاي مثلج بالخوخ', desc: null },
  },
  'Ice Tea Limon': {
    en: { name: 'Lemon Iced Tea', desc: null },
    ru: { name: 'Айс-ти лимонный', desc: null },
    ar: { name: 'شاي مثلج بالليمون', desc: null },
  },
  'Ice Tea Mango & Karışık Meyve': {
    en: { name: 'Mango & Mixed Fruit Iced Tea', desc: null },
    ru: { name: 'Айс-ти манго и смешанные фрукты', desc: null },
    ar: { name: 'شاي مثلج بالمانجو وفواكه مشكلة', desc: null },
  },
  'Su': {
    en: { name: 'Water', desc: '0.5 L' },
    ru: { name: 'Вода', desc: '0,5 л' },
    ar: { name: 'ماء', desc: '0.5 لتر' },
  },
  'Extra Espresso': { en: { desc: null }, ru: { desc: null }, ar: { desc: null } },
  'Extra Şurup': {
    en: { name: 'Extra Syrup', desc: null },
    ru: { name: 'Доп. сироп', desc: null },
    ar: { name: 'شراب إضافي', desc: null },
  },
  'Extra Süt': {
    en: { name: 'Extra Milk', desc: null },
    ru: { name: 'Доп. молоко', desc: null },
    ar: { name: 'حليب إضافي', desc: null },
  },
  'Extra Bal': {
    en: { name: 'Extra Honey', desc: null },
    ru: { name: 'Доп. мёд', desc: null },
    ar: { name: 'عسل إضافي', desc: null },
  },
  'Doğum Günü Pasta Servisi': {
    en: { name: 'Birthday Cake Service', desc: 'For cakes brought from outside.' },
    ru: { name: 'Сервировка торта на день рождения', desc: 'Для тортов, принесённых извне.' },
    ar: { name: 'خدمة تقديم كعكة عيد الميلاد', desc: 'للكعك المُحضَّر من الخارج.' },
  },
};

function buildItemEntry(turkishName, lang) {
  const t = ITEMS[turkishName]?.[lang];
  if (!t) {
    throw new Error(`Missing translation for "${turkishName}" in ${lang}`);
  }
  const entry = { desc: t.desc === undefined ? null : t.desc };
  if (t.name) entry.name = t.name;
  return entry;
}

function buildLocale(lang) {
  const items = {};
  for (const cat of menu.categories) {
    for (const item of cat.items) {
      items[item.name] = buildItemEntry(item.name, lang);
    }
  }
  return {
    ui: UI[lang],
    categories: CATEGORIES[lang],
    items,
  };
}

const counts = {};
for (const lang of ['en', 'ru', 'ar']) {
  const data = buildLocale(lang);
  const filePath = path.join(outDir, `${lang}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  counts[lang] = Object.keys(data.items).length;
  console.log(`Wrote ${filePath} — ${counts[lang]} items, ${Object.keys(data.categories).length} categories`);
}

// Validate all menu items covered
const allNames = menu.categories.flatMap(c => c.items.map(i => i.name));
const missing = allNames.filter(n => !ITEMS[n]);
if (missing.length) {
  console.error('Missing ITEMS entries:', missing);
  process.exit(1);
}
if (allNames.length !== 156) {
  console.error('Expected 156 items, got', allNames.length);
  process.exit(1);
}
console.log('All 156 items translated successfully.');
