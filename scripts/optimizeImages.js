/**
 * Image Optimization Script
 * Converts images to WebP and resizes for optimal mobile performance.
 * Run with: node scripts/optimizeImages.js
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const IMG_DIR = path.join(__dirname, '..', 'src', 'assets', 'img');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Team member images: displayed at max ~300px on desktop, ~150px on mobile
const TEAM_IMAGES = [
  'team-member1.png', 'team-member2.png', 'team-member3.png', 'team-member4.png',
  'team-member5.png', 'team-member6.png', 'team-member7.png', 'team-member8.png'
];

// Project images: displayed at max ~500px on desktop, ~300px on mobile
const PROJECT_IMAGES = [
  'project-ecommerce.png', 'project-saas.png', 'project-fitness.png',
  'project-branding.png', 'project-ai.png', 'project-cloud.png', 'project-marketing.png'
];

// Background/decoration images
const BG_IMAGES = [
  'color-sharp.png', 'color-sharp2.png', 'banner-bg.png',
  'footer-bg.png', 'bg.png'
];

// Other images to optimize
const OTHER_IMAGES = [
  'Asset1.png', 'rocket-01.png', 'rocket-02-01.png'
];

// GRAFFIX JPGs
const GRAFFIX_IMAGES = [
  'GRAFFIX-1.jpg', 'GRAFFIX-2.jpg', 'GRAFFIX-3.1.jpg'
];

async function optimizeImage(filename, maxWidth, quality = 80) {
  const inputPath = path.join(IMG_DIR, filename);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`  ⚠ Skipped (not found): ${filename}`);
    return;
  }

  const ext = path.extname(filename);
  const basename = path.basename(filename, ext);
  const outputPath = path.join(IMG_DIR, `${basename}.webp`);
  
  const originalSize = fs.statSync(inputPath).size;
  
  try {
    await sharp(inputPath)
      .resize(maxWidth, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality })
      .toFile(outputPath);
    
    const newSize = fs.statSync(outputPath).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(`  ✓ ${filename} → ${basename}.webp (${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB, -${savings}%)`);
  } catch (err) {
    console.error(`  ✗ Error processing ${filename}:`, err.message);
  }
}

async function optimizeFavicon() {
  const faviconPath = path.join(PUBLIC_DIR, 'favicon.ico');
  
  if (!fs.existsSync(faviconPath)) {
    console.log('  ⚠ favicon.ico not found');
    return;
  }

  const originalSize = fs.statSync(faviconPath).size;
  console.log(`  Original favicon: ${(originalSize/1024).toFixed(0)}KB`);

  // Create a proper small PNG favicon
  const faviconPng32 = path.join(PUBLIC_DIR, 'favicon-32.png');
  const faviconPng16 = path.join(PUBLIC_DIR, 'favicon-16.png');
  
  try {
    // Create 32x32 and 16x16 PNG versions
    await sharp(faviconPath)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 90 })
      .toFile(faviconPng32);
    
    await sharp(faviconPath)
      .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 90 })
      .toFile(faviconPng16);

    // Replace the original favicon.ico with the 32x32 version
    // (rename original as backup first)
    const backupPath = path.join(PUBLIC_DIR, 'favicon-original-backup.ico');
    if (!fs.existsSync(backupPath)) {
      fs.renameSync(faviconPath, backupPath);
    }
    
    // Use the 32x32 PNG as the new favicon
    // Rename it to .ico (browsers handle PNG-based favicons fine)
    fs.copyFileSync(faviconPng32, faviconPath);
    
    const newSize = fs.statSync(faviconPath).size;
    console.log(`  ✓ favicon.ico: ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (-${((1 - newSize / originalSize) * 100).toFixed(1)}%)`);
  } catch (err) {
    console.error('  ✗ Error processing favicon:', err.message);
  }
}

async function main() {
  console.log('\n🚀 Starting Image Optimization...\n');

  // 1. Favicon
  console.log('📌 Favicon:');
  await optimizeFavicon();

  // 2. Team images (resize to 400px width)
  console.log('\n👥 Team Member Images (→ 400px):');
  for (const img of TEAM_IMAGES) {
    await optimizeImage(img, 400, 82);
  }

  // 3. Project images (resize to 800px width)
  console.log('\n🖼 Project Images (→ 800px):');
  for (const img of PROJECT_IMAGES) {
    await optimizeImage(img, 800, 80);
  }

  // 4. Background images (resize to 1200px max)
  console.log('\n🎨 Background Images (→ 1200px):');
  for (const img of BG_IMAGES) {
    await optimizeImage(img, 1200, 75);
  }

  // 5. Other images
  console.log('\n📦 Other Images (→ 600px):');
  for (const img of OTHER_IMAGES) {
    await optimizeImage(img, 600, 80);
  }

  // 6. GRAFFIX images (resize to 1000px)
  console.log('\n📸 GRAFFIX Images (→ 1000px):');
  for (const img of GRAFFIX_IMAGES) {
    await optimizeImage(img, 1000, 78);
  }

  console.log('\n✅ Image optimization complete!\n');
  console.log('Next steps:');
  console.log('1. Update your component imports to use .webp files');
  console.log('2. Add loading="lazy" to <img> tags');
  console.log('3. Run npm run build to verify\n');
}

main().catch(console.error);
