const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../data/menu-raw.html'), 'utf8');
const baseUrl = 'https://marcella.neccina.com';

// Menüden hariç tutulacak ürünler (Neccina'dan yeniden çekilse bile eklenmez)
const EXCLUDED_ITEMS = new Set([
  'Limon Frozen',
  'Üç Peynirli Bagel Sandviç',
]);

function decodeHtml(text) {
  return text
    .replace(/&#x([0-9A-Fa-f]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num) => String.fromCodePoint(parseInt(num, 10)))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const menuStart = html.indexOf('<div class="order-menu-section">');
const menuEnd = html.indexOf('</div>\n\n    </div>\n\n    <footer', menuStart);
const menuBlock = html.slice(menuStart, menuEnd);

const categories = [];
const parts = menuBlock.split(/<div id="([^"]+)" class="order-section">/);

for (let i = 1; i < parts.length; i += 2) {
  const slug = parts[i];
  const block = parts[i + 1];

  const titleMatch = block.match(/<div class="order-title">\s*<h5>([\s\S]*?)<\/h5>/);
  if (!titleMatch) continue;

  const name = decodeHtml(titleMatch[1]);
  const items = [];
  const itemParts = block.split(/<div class="items row"/).slice(1);

  for (const itemPart of itemParts) {
    const itemBlock = '<div class="items row"' + itemPart;

    const imgMatch = itemBlock.match(/<img src="([^"]+)" alt="([^"]*)"/);
    const nameMatch = itemBlock.match(/<h6><bold>([\s\S]*?)<\/bold><\/h6>/);
    const descMatch = itemBlock.match(/<p style="padding-right:0;max-width:100%">\s*([\s\S]*?)\s*<\/p>/);
    const priceMatch = itemBlock.match(/<h5>([\s\S]*?)<\/h5>/);

    if (!nameMatch || !priceMatch) continue;

    const priceText = decodeHtml(priceMatch[1]).replace(/\s/g, '');
    const priceNum = parseFloat(priceText.replace('TL', '').replace(/\./g, '').replace(',', '.'));

    const desc = descMatch ? decodeHtml(descMatch[1]) : null;
    const itemName = decodeHtml(nameMatch[1]);

    if (EXCLUDED_ITEMS.has(itemName)) continue;

    items.push({
      name: itemName,
      desc: desc || null,
      price: isNaN(priceNum) ? 0 : Math.round(priceNum),
      image: imgMatch ? baseUrl + imgMatch[1] : null
    });
  }

  categories.push({ id: slug, name, items });
}

const output = {
  source: 'https://marcella.neccina.com/tr/site/menu',
  updated: new Date().toISOString().slice(0, 10),
  categories
};

const total = categories.reduce((n, c) => n + c.items.length, 0);
const jsonPath = path.join(__dirname, '../data/menu.json');
const jsPath = path.join(__dirname, '../js/menu-data.js');

fs.writeFileSync(jsonPath, JSON.stringify(output, null, 2), 'utf8');
fs.writeFileSync(jsPath, `window.MENU_DATA = ${JSON.stringify(output)};\n`, 'utf8');
console.log(`Parsed ${categories.length} categories, ${total} items`);
