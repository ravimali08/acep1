const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, 'public', 'images');

async function processImages() {
    const files = fs.readdirSync(imagesDir);
    let count = 0;
    
    for (const file of files) {
        if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
            const ext = path.extname(file);
            const baseName = path.basename(file, ext);
            const inputPath = path.join(imagesDir, file);
            const outputPath = path.join(imagesDir, `${baseName}.webp`);
            
            try {
                await sharp(inputPath)
                    .webp({ quality: 80 }) 
                    .toFile(outputPath);
                console.log(`Converted ${file} to ${baseName}.webp`);
                
                // Delete original to save space
                fs.unlinkSync(inputPath);
                count++;
            } catch (err) {
                console.error(`Error processing ${file}:`, err);
            }
        }
    }
    console.log(`Successfully converted ${count} images.`);
}

processImages();
