/**
 * Generate LinkedIn Cover Image
 *
 * Format classique: texte à gauche + blob à droite
 * Adapté du script blog cover pour le format LinkedIn 1200x627
 *
 * Usage:
 *   node src/scripts/generate-linkedin-cover.js <blobImagePath> <title> [outputPath]
 */

import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration LinkedIn
const CONFIG = {
  width: 1200,
  height: 627,
  blobWidth: 400,
  textAreaWidth: 480,
  backgroundColor: '#fcfbfc',
  textColor: '#000000',
  fontFamily: 'Space Grotesk',
  fontSize: 64,
  fontWeight: 700,
  padding: 60,
  lineHeight: 1.15
};

/**
 * Wrap text to fit within a given width
 */
function wrapText(text, maxCharsPerLine = 16) {
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
 */
function generateTextSvg(title) {
  const lines = wrapText(title, 16);
  const lineHeight = CONFIG.fontSize * CONFIG.lineHeight;
  const totalTextHeight = lines.length * lineHeight;
  const startY = (CONFIG.height - totalTextHeight) / 2 + CONFIG.fontSize;

  const textElements = lines.map((line, index) => {
    const y = startY + (index * lineHeight);
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
 * Generate LinkedIn cover image
 */
async function generateLinkedInCover(blobImagePath, title, outputPath) {
  if (!fs.existsSync(blobImagePath)) {
    throw new Error(`Blob image not found: ${blobImagePath}`);
  }

  if (!title || title.trim().length === 0) {
    throw new Error('Title cannot be empty');
  }

  console.log('Generating LinkedIn cover...');
  console.log(`  Blob image: ${blobImagePath}`);
  console.log(`  Title: ${title}`);
  console.log(`  Output: ${outputPath}`);

  // Create background
  const background = sharp({
    create: {
      width: CONFIG.width,
      height: CONFIG.height,
      channels: 4,
      background: { r: 252, g: 251, b: 252, alpha: 1 }
    }
  });

  // Process blob image - remove white background
  const blobImage = sharp(blobImagePath);
  const { data, info } = await blobImage
    .raw()
    .ensureAlpha()
    .toBuffer({ resolveWithObject: true });

  // Make near-white pixels transparent
  const threshold = 245;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r > threshold && g > threshold && b > threshold) {
      data[i + 3] = 0;
    }
  }

  const transparentBlob = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    .trim()
    .resize(CONFIG.blobWidth, CONFIG.height - 20, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  // Generate text SVG
  const textSvg = generateTextSvg(title);
  const textBuffer = Buffer.from(textSvg);

  // Composite all layers - logo on the right with spacing
  const result = await background
    .composite([
      {
        input: transparentBlob,
        left: CONFIG.textAreaWidth + 120,
        top: 10
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

  await sharp(result).toFile(outputPath);

  console.log(`LinkedIn cover generated successfully: ${outputPath}`);

  const stats = fs.statSync(outputPath);
  console.log(`  File size: ${(stats.size / 1024).toFixed(1)} KB`);

  return outputPath;
}

// CLI execution
const args = process.argv.slice(2);

if (args.length >= 2) {
  const [blobImagePath, title, outputPath = './public/images/linkedin/cover.png'] = args;

  generateLinkedInCover(blobImagePath, title, outputPath)
    .then(() => {
      console.log('Done!');
    })
    .catch((error) => {
      console.error('Error:', error.message);
      process.exit(1);
    });
} else {
  console.log('Usage: node generate-linkedin-cover.js <blobImagePath> <title> [outputPath]');
  console.log('');
  console.log('Example:');
  console.log('  node generate-linkedin-cover.js ./blob.png "Un contexte pour tous" ./cover.png');
  process.exit(1);
}

export { generateLinkedInCover, CONFIG };
