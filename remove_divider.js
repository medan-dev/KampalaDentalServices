const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content
    .replace(/import \{ SectionDivider \} from "@\/components\/SectionDivider";\n?/g, '')
    .replace(/import \{ SectionDivider \} from "\.\/SectionDivider";\n?/g, '')
    .replace(/<SectionDivider[^>]*\/>/g, '');
    
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Removed SectionDivider: ${filePath}`);
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
console.log("Done removing SectionDividers.");
