const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const indexHtml = path.join(__dirname, 'index.html');

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace .jpg, .jpeg, .png with .webp
    const newContent = content.replace(/\.(png|jpg|jpeg)/gi, '.webp');

    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated paths in ${filePath}`);
    }
}

function traverseDirectory(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.lstatSync(fullPath).isDirectory()) {
            traverseDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            updateFile(fullPath);
        }
    });
}

traverseDirectory(srcDir);
if (fs.existsSync(indexHtml)) {
    updateFile(indexHtml);
}
console.log('Update complete.');
