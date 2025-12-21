/**
 * Generate LinkedIn Schema Image
 *
 * Compose une image de schema pour LinkedIn avec :
 * - Une image blob/ghost (sans texte)
 * - Un schema avec boites et fleches
 * - Textes ajoutes programmatiquement (orthographe garantie)
 *
 * Usage:
 *   node src/scripts/generate-linkedin-schema.js <blobImagePath> [outputPath]
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
  backgroundColor: '#fcfbfc',
  textColor: '#000000',
  boxBorderColor: '#000000',
  fontFamily: 'Space Grotesk',
  blobSize: 500
};

/**
 * Generate SVG with the complete schema
 */
function generateSchemaSvg() {
  // Positions - adjusted for better layout
  const centerX = CONFIG.width / 2 + 100;
  const topBoxY = 60;
  const middleY = CONFIG.height / 2;
  const bottomBoxY = CONFIG.height - 110;

  // Box dimensions - larger for better visibility
  const boxWidth = 260;
  const boxHeight = 60;
  const vaultWidth = 300;
  const vaultHeight = 90;

  return `<svg width="${CONFIG.width}" height="${CONFIG.height}" xmlns="http://www.w3.org/2000/svg">
    <!-- Claude Projects Box (top) -->
    <rect x="${centerX - boxWidth/2}" y="${topBoxY}" width="${boxWidth}" height="${boxHeight}"
          fill="white" stroke="${CONFIG.boxBorderColor}" stroke-width="3" rx="6"/>
    <text x="${centerX}" y="${topBoxY + 40}"
          font-family="${CONFIG.fontFamily}" font-size="26" font-weight="700"
          fill="${CONFIG.textColor}" text-anchor="middle">Claude Projects</text>

    <!-- Arrow down + MCP label -->
    <line x1="${centerX}" y1="${topBoxY + boxHeight + 8}" x2="${centerX}" y2="${middleY - 55}"
          stroke="${CONFIG.boxBorderColor}" stroke-width="3" marker-end="url(#arrowhead)"/>
    <text x="${centerX + 20}" y="${topBoxY + boxHeight + 50}"
          font-family="${CONFIG.fontFamily}" font-size="20" font-weight="700"
          fill="${CONFIG.textColor}">MCP</text>

    <!-- Obsidian Vault Box (center) -->
    <rect x="${centerX - vaultWidth/2}" y="${middleY - vaultHeight/2}" width="${vaultWidth}" height="${vaultHeight}"
          fill="white" stroke="${CONFIG.boxBorderColor}" stroke-width="3" rx="6"/>
    <text x="${centerX}" y="${middleY - 5}"
          font-family="${CONFIG.fontFamily}" font-size="24" font-weight="700"
          fill="${CONFIG.textColor}" text-anchor="middle">OBSIDIAN VAULT</text>
    <text x="${centerX}" y="${middleY + 22}"
          font-family="${CONFIG.fontFamily}" font-size="16" font-weight="500"
          fill="#666666" text-anchor="middle">Source de verite</text>

    <!-- Arrow down + filesystem label -->
    <line x1="${centerX}" y1="${middleY + vaultHeight/2 + 8}"
          x2="${centerX}" y2="${bottomBoxY - 10}"
          stroke="${CONFIG.boxBorderColor}" stroke-width="3" marker-end="url(#arrowhead)"/>
    <text x="${centerX + 20}" y="${middleY + vaultHeight/2 + 50}"
          font-family="${CONFIG.fontFamily}" font-size="20" font-weight="700"
          fill="${CONFIG.textColor}">filesystem</text>

    <!-- Claude Code Box (bottom) -->
    <rect x="${centerX - boxWidth/2}" y="${bottomBoxY}" width="${boxWidth}" height="${boxHeight}"
          fill="white" stroke="${CONFIG.boxBorderColor}" stroke-width="3" rx="6"/>
    <text x="${centerX}" y="${bottomBoxY + 40}"
          font-family="${CONFIG.fontFamily}" font-size="26" font-weight="700"
          fill="${CONFIG.textColor}" text-anchor="middle">Claude Code</text>

    <!-- Arrowhead marker definition -->
    <defs>
      <marker id="arrowhead" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
        <polygon points="0 0, 12 4, 0 8" fill="${CONFIG.boxBorderColor}"/>
      </marker>
    </defs>
  </svg>`;
}

/**
 * Generate LinkedIn schema image
 */
async function generateLinkedInSchema(blobImagePath, outputPath) {
  // Validate inputs
  if (!fs.existsSync(blobImagePath)) {
    throw new Error(`Blob image not found: ${blobImagePath}`);
  }

  console.log('Generating LinkedIn schema...');
  console.log(`  Blob image: ${blobImagePath}`);
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

  // Process blob image - remove background by making near-white pixels transparent
  const blobImage = sharp(blobImagePath);
  const { width, height } = await blobImage.metadata();

  // Extract raw pixel data
  const { data, info } = await blobImage
    .raw()
    .ensureAlpha()
    .toBuffer({ resolveWithObject: true });

  // Make near-white pixels transparent (threshold: 240+)
  const threshold = 245;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r > threshold && g > threshold && b > threshold) {
      data[i + 3] = 0; // Set alpha to 0 (transparent)
    }
  }

  // Rebuild image with transparency
  const transparentBlob = await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
    .trim()
    .resize(CONFIG.blobSize, CONFIG.blobSize, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  // Generate schema SVG
  const schemaSvg = generateSchemaSvg();
  const schemaBuffer = Buffer.from(schemaSvg);

  // Position blob on the left-center
  const blobX = 50;
  const blobY = Math.floor((CONFIG.height - CONFIG.blobSize) / 2);

  // Composite all layers
  const result = await background
    .composite([
      {
        input: schemaBuffer,
        left: 0,
        top: 0
      },
      {
        input: transparentBlob,
        left: blobX,
        top: blobY
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

  console.log(`LinkedIn schema generated successfully: ${outputPath}`);

  const stats = fs.statSync(outputPath);
  console.log(`  File size: ${(stats.size / 1024).toFixed(1)} KB`);

  return outputPath;
}

// CLI execution
const args = process.argv.slice(2);

if (args.length >= 1) {
  const [blobImagePath, outputPath = './public/images/linkedin/schema.png'] = args;

  generateLinkedInSchema(blobImagePath, outputPath)
    .then(() => {
      console.log('Done!');
    })
    .catch((error) => {
      console.error('Error:', error.message);
      process.exit(1);
    });
} else {
  console.log('Usage: node generate-linkedin-schema.js <blobImagePath> [outputPath]');
  console.log('');
  console.log('Example:');
  console.log('  node generate-linkedin-schema.js ./blob.png ./public/images/linkedin/schema.png');
  process.exit(1);
}

export { generateLinkedInSchema, CONFIG };
