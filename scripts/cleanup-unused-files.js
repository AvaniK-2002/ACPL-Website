#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get project root directory
const projectRoot = path.resolve(__dirname, '..');

// Files and directories to analyze
const sourceDir = path.join(projectRoot, 'src');
const publicDir = path.join(projectRoot, 'public');
const distDir = path.join(projectRoot, 'dist');

// Files to remove after WebP conversion
const originalImageFiles = [
  // Source images (original formats)
  'src/assets/images/ACPL.png',
  'src/assets/images/Ajinkya-Deshmukh.jpg',
  'src/assets/images/Hrishikesh-Mohite.jpg',
  'src/assets/images/KontentCreate.png',
  'src/assets/images/Ruturaj-Kale.jpg',
  'src/assets/images/VIRA.png',
  'src/assets/images/Venus.jpg',
  
  // Public images (original formats)
  'public/ACPL.png',
  'public/KontentCreate.png',
  'public/VIRA.png',
  'public/Venus.jpg',
  
  // Unused development files
  'src/assets/react.svg',
  'public/vite.svg',
  
  // Temporary development documentation (keeping essential ones)
  'public/favicon-placeholder.txt'
];

// Essential files to keep (never remove)
const essentialFiles = [
  'README.md',
  'package.json',
  'package-lock.json',
  'vite.config.ts',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.node.json',
  'tailwind.config.js',
  'postcss.config.js',
  'eslint.config.js',
  'hostinger-setup.md',
  'PRODUCTION-DEPLOYMENT-GUIDE.md',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/pages-sitemap.xml',
  'public/image-sitemap.xml',
  'public/contact-form-handler.php'
];

/**
 * Check if a file exists
 * @param {string} filePath - Path to check
 * @returns {boolean}
 */
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    return false;
  }
}

/**
 * Get file size in KB
 * @param {string} filePath - Path to file
 * @returns {number}
 */
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return (stats.size / 1024).toFixed(1);
  } catch (error) {
    return 0;
  }
}

/**
 * Remove a file safely
 * @param {string} filePath - Path to file to remove
 * @returns {boolean}
 */
function removeFile(filePath) {
  try {
    if (fileExists(filePath)) {
      const size = getFileSize(filePath);
      fs.unlinkSync(filePath);
      console.log(`  ✓ Removed: ${filePath} (${size}KB)`);
      return true;
    } else {
      console.log(`  ⚠️  File not found: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`  ❌ Error removing ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Analyze and remove unused files
 */
function cleanupUnusedFiles() {
  console.log('🧹 Starting cleanup of unused files...\n');
  
  let totalRemoved = 0;
  let totalSizeSaved = 0;
  
  console.log('📁 Removing original image files (replaced with WebP):');
  
  for (const file of originalImageFiles) {
    const fullPath = path.join(projectRoot, file);
    
    if (fileExists(fullPath)) {
      const size = parseFloat(getFileSize(fullPath));
      const removed = removeFile(fullPath);
      
      if (removed) {
        totalRemoved++;
        totalSizeSaved += size;
      }
    }
  }
  
  console.log('\n📊 Cleanup Summary:');
  console.log(`✅ Successfully removed ${totalRemoved} unused files`);
  console.log(`💾 Total space saved: ${totalSizeSaved.toFixed(1)}KB`);
  
  console.log('\n📝 Files removed:');
  console.log('• Original PNG/JPG images (replaced with WebP)');
  console.log('• Unused SVG files (react.svg, vite.svg)');
  console.log('• Temporary placeholder files');
  
  console.log('\n✅ Essential files preserved:');
  console.log('• README.md and documentation');
  console.log('• Configuration files');
  console.log('• SEO and sitemap files');
  console.log('• Production deployment files');
  
  console.log('\n🎯 Next steps:');
  console.log('1. Test the application to ensure all images load correctly');
  console.log('2. Run npm run build to verify production build');
  console.log('3. Check Lighthouse performance score');
  console.log('4. Deploy to production');
  
  console.log('\n✨ Cleanup completed!');
}

/**
 * Verify WebP files exist before cleanup
 */
function verifyWebPFiles() {
  console.log('🔍 Verifying WebP files exist before cleanup...\n');
  
  const webpFiles = [
    'src/assets/images/ACPL.webp',
    'src/assets/images/Ajinkya-Deshmukh.webp',
    'src/assets/images/Hrishikesh-Mohite.webp',
    'src/assets/images/KontentCreate.webp',
    'src/assets/images/Ruturaj-Kale.webp',
    'src/assets/images/VIRA.webp',
    'src/assets/images/Venus.webp',
    'public/ACPL.webp',
    'public/KontentCreate.webp',
    'public/VIRA.webp',
    'public/Venus.webp'
  ];
  
  let allWebPExist = true;
  
  for (const file of webpFiles) {
    const fullPath = path.join(projectRoot, file);
    if (!fileExists(fullPath)) {
      console.error(`❌ Missing WebP file: ${file}`);
      allWebPExist = false;
    } else {
      console.log(`✅ Found: ${file} (${getFileSize(fullPath)}KB)`);
    }
  }
  
  if (!allWebPExist) {
    console.error('\n❌ Some WebP files are missing. Please run the conversion script first.');
    process.exit(1);
  }
  
  console.log('\n✅ All WebP files verified. Proceeding with cleanup...\n');
  return true;
}

// Main execution
function main() {
  console.log('🚀 ACPL Website Cleanup Tool\n');
  
  // Verify WebP files exist
  verifyWebPFiles();
  
  // Perform cleanup
  cleanupUnusedFiles();
}

// Run the cleanup
main();
