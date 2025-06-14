const fs = require('fs');
const path = require('path');

const slugToTitle = {
  "fried-rice": "Egg Fried Rice",
  "Ham-slice": "Ham slices with Potatoes",
  "acai_bowl": "Tropical Acai Bowl",
  "cajun-chicken": "Cream Cajun Chicken",
  "mussels": "Mussels Clam Pot",
  "ribeye": "Rib Eye steak with Mashed potatoes",
  "fish-vegetables": "Steam Fish Vegetables",
  "Carrot-cake": "Carrot Cake",
  "strawberry-pretzel-cake": "strawberry pretzel Cake",
  "Banana-pudding": "Banana pudding",
  "Cupcakes": "Chocolate Cupcakes",
  "Avocado-toast": "Avocado Toast with Poached Egg",
  "Beans-Bourguignon": "Beans Bourguignon",
  "vegan-poach-egg": "Vegan Poaches Egg",
  "Kung-Pao-Cauliflower": "Kung Pao Cauliflower",
  "creamy-pasta": "Creamy Garlic Parmesan Pasta",
  "teriyaki-chicken": "Teriyaki Chicken Stir Fry",
  "sourdough": "Artisan Sourdough Bread",
  "blueberry_pancake": "Fluffy Blueberry Pancakes"
};

// Path to your project folder where HTML files are located
const projectPath = 'C:\\Users\\delvi\\OneDrive\\Dokumen\\Web programming\\final website\\cooking website\\cooking website';

// Get all HTML files recursively
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith('.html')) {
      results.push(filePath);
    }
  });
  return results;
}

function replaceLinksInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  for (const [oldSlug, title] of Object.entries(slugToTitle)) {
    const newFileName = `${title}.html`; // new filename based on title
    const regex = new RegExp(`(href|data-link)="${oldSlug}\\.html"`, 'g');
    content = content.replace(regex, `$1="${newFileName}"`);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated links in: ${filePath}`);
}

function main() {
  const htmlFiles = getHtmlFiles(projectPath);
  htmlFiles.forEach(replaceLinksInFile);
}

main();
