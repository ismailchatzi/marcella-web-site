// Marcella Coffee — Menü render

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function t(key) {
  return typeof MarcellaI18n !== 'undefined' ? MarcellaI18n.t(key) : key;
}

function formatPrice(price) {
  if (price === 0) return t('menu.priceAsk');
  return `${price} ₺`;
}

function renderMenuItem(item, categoryId) {
  const zoomLabel = `${item.name} ${t('menu.photoZoom')}`;
  const photoHtml = item.image
    ? `<button type="button" class="menu-item__photo" aria-label="${escapeHtml(zoomLabel)}">
         <img src="${item.image}" alt="${escapeHtml(item.name)}" loading="lazy">
       </button>`
    : '';

  const descHtml = item.desc
    ? `<span class="menu-item__desc">${escapeHtml(item.desc)}</span>`
    : '';

  const allergens = categoryId === 'ekstralar'
    ? []
    : item.allergens?.length
      ? item.allergens
      : (typeof detectAllergens === 'function' ? detectAllergens(item, categoryId) : []);

  const allergenHtml = categoryId === 'ekstralar' || typeof renderAllergenIcons !== 'function'
    ? ''
    : renderAllergenIcons(allergens);

  const calories = categoryId === 'ekstralar'
    ? ''
    : item.calories || (typeof estimateCalories === 'function' ? estimateCalories(item, categoryId) : '');
  const caloriesHtml = categoryId === 'ekstralar' || typeof renderCalories !== 'function'
    ? ''
    : renderCalories(calories);

  return `
    <li class="menu-item${item.image ? '' : ' menu-item--no-photo'}">
      ${photoHtml}
      <div class="menu-item__body">
        <div class="menu-item__info">
          <span class="menu-item__name-row">
            <span class="menu-item__name">${escapeHtml(item.name)}</span>
            ${allergenHtml}
            ${caloriesHtml}
          </span>
          ${descHtml}
        </div>
        <span class="menu-item__price">${formatPrice(item.price)}</span>
      </div>
    </li>
  `;
}

function renderCategory(category) {
  return `
    <article class="menu-category" id="${category.id}">
      <h2 class="menu-category__title">${escapeHtml(category.name)}</h2>
      <ul class="menu-list">
        ${category.items.map(item => renderMenuItem(item, category.id)).join('')}
      </ul>
    </article>
  `;
}

function renderCategoryNav(categories) {
  return categories.map(cat => `
    <a href="#${cat.id}" class="menu-nav__link">${escapeHtml(cat.name)}</a>
  `).join('');
}

function renderMenu(data) {
  const nav = document.getElementById('menu-nav');
  const container = document.getElementById('menu-categories');
  const legend = document.getElementById('allergen-legend');

  if (!container || !data?.categories) return;

  if (nav) {
    nav.innerHTML = renderCategoryNav(data.categories);
  }

  if (legend && typeof renderAllergenLegend === 'function') {
    legend.innerHTML = renderAllergenLegend();
  }

  container.innerHTML = data.categories.map(renderCategory).join('');

  if (typeof initMenuLightbox === 'function') {
    initMenuLightbox();
  }
}

function loadMenuData() {
  const raw = window.MENU_DATA;
  const data = typeof MarcellaI18n !== 'undefined'
    ? MarcellaI18n.translateMenuData(raw)
    : raw;
  renderMenu(data);
}

function showMenuError() {
  const container = document.getElementById('menu-categories');
  if (container) {
    container.innerHTML = `<p class="menu-error">${escapeHtml(t('menu.error'))}</p>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const boot = () => {
    if (window.MENU_DATA) {
      loadMenuData();
      return;
    }

    fetch('data/menu.json')
      .then(res => res.json())
      .then(data => {
        window.MENU_DATA = data;
        loadMenuData();
      })
      .catch(showMenuError);
  };

  if (window.i18nReady) {
    window.i18nReady.then(boot);
  } else {
    boot();
  }
});
