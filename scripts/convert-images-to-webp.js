#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get project root directory
const projectRoot = path.resolve(__dirname, '..');

// Directories to process
const directories = [
  path.join(projectRoot, 'src', 'assets', 'images'),
  path.join(projectRoot, 'public')
];

// Supported image formats to convert
const supportedFormats = ['.jpg', '.jpeg', '.png'];

// WebP conversion options
const webpOptions = {
  quality: 85, // High quality for web
  effort: 6,   // Maximum compression effort
  lossless: false
};

/**
 * Convert a single image to WebP format
 * @param {string} inputPath - Path to the input image
 * @param {string} outputPath - Path for the output WebP image
 */
async function convertToWebP(inputPath, outputPath) {
  try {
    console.log(`Converting: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);

    await sharp(inputPath)
      .webp(webpOptions)
      .toFile(outputPath);

    // Get file sizes for comparison
    const originalStats = fs.statSync(inputPath);
    const webpStats = fs.statSync(outputPath);
    const savings = ((originalStats.size - webpStats.size) / originalStats.size * 100).toFixed(1);

    console.log(`  ✓ Converted successfully`);
    console.log(`  📊 Size: ${(originalStats.size / 1024).toFixed(1)}KB -> ${(webpStats.size / 1024).toFixed(1)}KB (${savings}% reduction)`);

    return true;
  } catch (error) {
    console.error(`  ❌ Error converting ${inputPath}:`, error.message);
    return false;
  }
}

/**
 * Process all images in a directory
 * @param {string} dirPath - Directory path to process
 */
async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory not found: ${dirPath}`);
    return [];
  }

  console.log(`\n📁 Processing directory: ${dirPath}`);

  const files = fs.readdirSync(dirPath);
  const conversions = [];

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const fileExt = path.extname(file).toLowerCase();

    // Skip if not a supported image format
    if (!supportedFormats.includes(fileExt)) {
      continue;
    }

    // Skip if it's already a WebP file
    if (fileExt === '.webp') {
      continue;
    }

    // Generate WebP filename
    const baseName = path.basename(file, fileExt);
    const webpFileName = `${baseName}.webp`;
    const webpPath = path.join(dirPath, webpFileName);

    // Convert to WebP
    const success = await convertToWebP(filePath, webpPath);

    if (success) {
      conversions.push({
        original: filePath,
        webp: webpPath,
        originalName: file,
        webpName: webpFileName
      });
    }
  }

  return conversions;
}

/**
 * Main conversion function
 */
async function main() {
  console.log('🚀 Starting image conversion to WebP format...\n');

  let totalConversions = [];

  // Process each directory
  for (const dir of directories) {
    const conversions = await processDirectory(dir);
    totalConversions = totalConversions.concat(conversions);
  }

  // Summary
  console.log('\n📊 Conversion Summary:');
  console.log(`✅ Successfully converted ${totalConversions.length} images to WebP format`);

  if (totalConversions.length > 0) {
    console.log('\n📝 Converted files:');
    totalConversions.forEach(({ originalName, webpName }) => {
      console.log(`  • ${originalName} -> ${webpName}`);
    });

    console.log('\n⚠️  Next steps:');
    console.log('1. Update all import statements in React components');
    console.log('2. Update image references in sitemap files');
    console.log('3. Test all image references work correctly');
    console.log('4. Remove original image files after verification');
  }

  console.log('\n✨ Image conversion completed!');
}

// Run the conversion
main().catch(error => {
  console.error('❌ Conversion failed:', error);
  process.exit(1);
});
