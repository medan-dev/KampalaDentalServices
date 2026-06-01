const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    .replace(/rounded-full/g, '')
    .replace(/rounded-lg/g, '')
    .replace(/rounded-\[2rem\]/g, '')
    .replace(/rounded-b-3xl/g, '')
    .replace(/rounded-3xl/g, '')
    .replace(/rounded-2xl/g, '')
    .replace(/rounded-xl/g, '')
    .replace(/rounded-md/g, '')
    .replace(/rounded-sm/g, '');
    
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Flattened: ${filePath}`);
  }
}

function processDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

processDir('src');
console.log("Done flattening design.");
