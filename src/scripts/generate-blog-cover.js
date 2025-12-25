/**
 * Generate Blog Cover Image
 *
 * Compose une image de couverture de blog en combinant :
 * - Une image blob/ghost generee par IA (sans texte)
 * - Un titre ajoute programmatiquement (orthographe garantie)
 *
 * Usage:
 *   node src/scripts/generate-blog-cover.js <blobImagePath> <title> [outputPath]
 *
 * Exemple:
 *   node src/scripts/generate-blog-cover.js ./blob.png "Automatiser son club sportif facilement" ./public/images/blog/cover.png
 */

import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  width: 1920,
  height: 1080,
  blobWidth: 900, // Zone pour le blob (agrandi)
  textAreaWidth: 700, // Position du blob (rapproché du texte)
  backgroundColor: '#fcfbfc',
  textColor: '#000000',
  fontFamily: 'Space Grotesk, Arial, sans-serif',
  fontSize: 120,
  fontWeight: 700,
  padding: 120,
  lineHeight: 1.15
};

/**
 * Wrap text to fit within a given width
 * @param {string} text - Text to wrap
 * @param {number} maxCharsPerLine - Maximum characters per line
 * @returns {string[]} - Array of lines
 */
function wrapText(text, maxCharsPerLine = 20) {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (testLine.length <= maxCharsPerLine) {
      currentLine = testLine;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
    }
  }
  if (currentLine) lines.push(currentLine);

  return lines;
}

/**
 * Generate SVG with title text
 * @param {string} title - Title text
 * @returns {string} - SVG string
 */
function generateTextSvg(title) {
  const lines = wrapText(title, 14);
  const lineHeight = CONFIG.fontSize * CONFIG.lineHeight;
  const totalTextHeight = lines.length * lineHeight;
  const startY = (CONFIG.height - totalTextHeight) / 2 + CONFIG.fontSize;

  const textElements = lines.map((line, index) => {
    const y = startY + (index * lineHeight);
    // Escape special characters for SVG
    const escapedLine = line
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
    return `<text x="${CONFIG.padding}" y="${y}" font-family="${CONFIG.fontFamily}" font-size="${CONFIG.fontSize}" font-weight="${CONFIG.fontWeight}" fill="${CONFIG.textColor}">${escapedLine}</text>`;
  }).join('\n    ');

  return `<svg width="${CONFIG.width}" height="${CONFIG.height}" xmlns="http://www.w3.org/2000/svg">
    ${textElements}
  </svg>`;
}

/**
 * Generate blog cover image
 * @param {string} blobImagePath - Path to the blob image
 * @param {string} title - Title text
 * @param {string} outputPath - Output file path
 */
async function generateBlogCover(blobImagePath, title, outputPath) {
  // Validate inputs
  if (!fs.existsSync(blobImagePath)) {
    throw new Error(`Blob image not found: ${blobImagePath}`);
  }

  if (!title || title.trim().length === 0) {
    throw new Error('Title cannot be empty');
  }

  console.log('Generating blog cover...');
  console.log(`  Blob image: ${blobImagePath}`);
  console.log(`  Title: ${title}`);
  console.log(`  Output: ${outputPath}`);

  // Create white background
  const background = sharp({
    create: {
      width: CONFIG.width,
      height: CONFIG.height,
      channels: 4,
      background: { r: 252, g: 251, b: 252, alpha: 1 }
    }
  });

  // Process blob image - trim whitespace, force white background, resize to fill height
  const blobBuffer = await sharp(blobImagePath)
    .trim() // Supprimer l'espace blanc autour du blob
    .flatten({ background: '#fcfbfc' }) // Forcer fond blanc pur
    .resize(null, Math.round(CONFIG.height * 0.85), { // 85% de la hauteur
      fit: 'contain',
      background: { r: 252, g: 251, b: 252, alpha: 1 }
    })
    .extend({
      top: Math.round(CONFIG.height * 0.075),
      bottom: Math.round(CONFIG.height * 0.075),
      left: 0,
      right: 0,
      background: { r: 252, g: 251, b: 252, alpha: 1 }
    })
    .toBuffer();

  // Generate text SVG
  const textSvg = generateTextSvg(title);
  const textBuffer = Buffer.from(textSvg);

  // Composite all layers
  const result = await background
    .composite([
      {
        input: blobBuffer,
        left: CONFIG.textAreaWidth, // Position blob on the right
        top: 0
      },
      {
        input: textBuffer,
        left: 0,
        top: 0
      }
    ])
    .png()
    .toBuffer();

  // Ensure output directory exists
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Save the result
  await sharp(result).toFile(outputPath);

  console.log(`Blog cover generated successfully: ${outputPath}`);

  // Get file size
  const stats = fs.statSync(outputPath);
  console.log(`  File size: ${(stats.size / 1024).toFixed(1)} KB`);

  return outputPath;
}

// CLI execution
const args = process.argv.slice(2);

if (args.length >= 2) {
  const [blobImagePath, title, outputPath = './output-cover.png'] = args;

  generateBlogCover(blobImagePath, title, outputPath)
    .then(() => {
      console.log('Done!');
    })
    .catch((error) => {
      console.error('Error:', error.message);
      process.exit(1);
    });
} else if (args.length > 0) {
  console.log('Usage: node generate-blog-cover.js <blobImagePath> <title> [outputPath]');
  console.log('');
  console.log('Arguments:');
  console.log('  blobImagePath  Path to the blob/ghost image (PNG)');
  console.log('  title          Title text (5-8 words)');
  console.log('  outputPath     Output file path (default: ./output-cover.png)');
  console.log('');
  console.log('Example:');
  console.log('  node generate-blog-cover.js ./blob.png "Automatiser son club sportif facilement" ./cover.png');
  process.exit(1);
}

export { generateBlogCover, CONFIG };
