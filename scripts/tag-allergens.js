const fs = require('fs');
const path = require('path');
const { detectAllergens } = require('../js/allergens');
const { estimateCalories } = require('../js/calories');

const menuPath = path.join(__dirname, '../data/menu.json');
const data = JSON.parse(fs.readFileSync(menuPath, 'utf8'));

for (const category of data.categories) {
  for (const item of category.items) {
    item.allergens = detectAllergens(item, category.id);
    item.calories = estimateCalories(item, category.id);
  }
}

fs.writeFileSync(menuPath, JSON.stringify(data, null, 2), 'utf8');
fs.writeFileSync(
  path.join(__dirname, '../js/menu-data.js'),
  `window.MENU_DATA = ${JSON.stringify(data)};\n`,
  'utf8'
);

console.log('Menü etiketleri güncellendi (alerjen + kalori).');
