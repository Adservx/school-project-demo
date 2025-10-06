// Run: npm install sharp --save-dev
// Then: node generate-favicon-sharp.js

const fs = require('fs');
const path = require('path');

try {
  const sharp = require('sharp');
  
  const svgPath = path.join(__dirname, 'public', 'favicon.svg');
  const svgBuffer = fs.readFileSync(svgPath);
  
  // Generate favicon.ico (32x32)
  sharp(svgBuffer)
    .resize(32, 32)
    .toFile(path.join(__dirname, 'public', 'favicon.ico'))
    .then(() => console.log('✓ Created favicon.ico'))
    .catch(err => console.error('Error creating favicon.ico:', err));
  
  // Generate apple-touch-icon.png (180x180)
  sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, 'public', 'apple-touch-icon.png'))
    .then(() => console.log('✓ Created apple-touch-icon.png'))
    .catch(err => console.error('Error creating apple-touch-icon.png:', err));
  
  // Generate favicon-16x16.png
  sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(path.join(__dirname, 'public', 'favicon-16x16.png'))
    .then(() => console.log('✓ Created favicon-16x16.png'))
    .catch(err => console.error('Error creating favicon-16x16.png:', err));
  
  // Generate favicon-32x32.png
  sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, 'public', 'favicon-32x32.png'))
    .then(() => console.log('✓ Created favicon-32x32.png'))
    .catch(err => console.error('Error creating favicon-32x32.png:', err));

} catch (err) {
  console.error('Error: sharp package not found.');
  console.log('\nPlease run: npm install sharp --save-dev');
  console.log('Then run: node generate-favicon-sharp.js\n');
  console.log('Or use online tool: https://realfavicongenerator.net/');
}
