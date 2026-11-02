// Marcella Coffee — Basit etkileşimler

function getLightboxText(key) {
  if (typeof MarcellaI18n !== 'undefined') {
    return MarcellaI18n.t(`menu.lightbox.${key}`);
  }
  return key === 'close' ? 'Kapat' : 'Kapatmak için dışarı dokunun';
}

const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Scroll'da header arka planı
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobil menü aç/kapa
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navMenu.classList.toggle('open');
  });

  // Menü linkine tıklanınca kapat
  navMenu.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      navMenu.classList.remove('open');
    });
  });
}

// Sayfa yüklendiğinde scroll durumunu kontrol et
if (header) {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  }
}

// Menü fotoğrafı — dokununca büyüt (QR menü)
function initMenuLightbox() {
  const photos = document.querySelectorAll('.menu-item__photo:not([data-lightbox])');
  if (!photos.length) return;

  let lightbox = document.querySelector('.menu-lightbox');

  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'menu-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = `
      <div class="menu-lightbox__backdrop"></div>
      <div class="menu-lightbox__content">
        <button type="button" class="menu-lightbox__close" aria-label="${getLightboxText('close')}">✕</button>
        <img class="menu-lightbox__img" src="" alt="">
        <div class="menu-lightbox__caption">
          <span class="menu-lightbox__name"></span>
          <span class="menu-lightbox__price"></span>
        </div>
        <p class="menu-lightbox__hint">${getLightboxText('hint')}</p>
      </div>
    `;
    document.body.appendChild(lightbox);

    const closeBtn = lightbox.querySelector('.menu-lightbox__close');
    const backdrop = lightbox.querySelector('.menu-lightbox__backdrop');

    closeBtn.addEventListener('click', () => closeMenuLightbox(lightbox));
    backdrop.addEventListener('click', () => closeMenuLightbox(lightbox));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        closeMenuLightbox(lightbox);
      }
    });
  }

  const img = lightbox.querySelector('.menu-lightbox__img');
  const nameEl = lightbox.querySelector('.menu-lightbox__name');
  const priceEl = lightbox.querySelector('.menu-lightbox__price');

  photos.forEach(photo => {
    photo.setAttribute('data-lightbox', 'true');
    photo.addEventListener('click', () => {
      const menuItem = photo.closest('.menu-item');
      const photoImg = photo.querySelector('img');
      if (!photoImg) return;

      const name = menuItem?.querySelector('.menu-item__name')?.textContent || '';
      const price = menuItem?.querySelector('.menu-item__price')?.textContent || '';

      img.src = photoImg.src;
      img.alt = photoImg.alt || name;
      nameEl.textContent = name;
      priceEl.textContent = price;

      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });
}

function closeMenuLightbox(lightbox) {
  const img = lightbox.querySelector('.menu-lightbox__img');
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  img.src = '';
}

initMenuLightbox();

window.addEventListener('marcella:locale', () => {
  const lightbox = document.querySelector('.menu-lightbox');
  if (!lightbox) return;
  const closeBtn = lightbox.querySelector('.menu-lightbox__close');
  const hint = lightbox.querySelector('.menu-lightbox__hint');
  if (closeBtn) closeBtn.setAttribute('aria-label', getLightboxText('close'));
  if (hint) hint.textContent = getLightboxText('hint');
});
