import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

/** @param {string} name */
const assetPath = (name) => fileURLToPath(new URL(`../public/${name}`, import.meta.url));
const faviconSvg = await readFile(assetPath('favicon.svg'));
const favicon64 = await sharp(faviconSvg).resize(64, 64).png().toBuffer();
await sharp(faviconSvg).resize(96, 96).png().toFile(assetPath('favicon-96x96.png'));
await sharp(faviconSvg).resize(180, 180).png().toFile(assetPath('apple-touch-icon.png'));

const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(0, 0);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(1, 4);
icoHeader.writeUInt8(64, 6);
icoHeader.writeUInt8(64, 7);
icoHeader.writeUInt8(0, 8);
icoHeader.writeUInt8(0, 9);
icoHeader.writeUInt16LE(1, 10);
icoHeader.writeUInt16LE(32, 12);
icoHeader.writeUInt32LE(favicon64.length, 14);
icoHeader.writeUInt32LE(22, 18);
await writeFile(assetPath('favicon.ico'), Buffer.concat([icoHeader, favicon64]));

const socialSvg = await readFile(assetPath('og-default.svg'));
await sharp(socialSvg).resize(1200, 630).png().toFile(assetPath('og-default.png'));

console.log('Generated favicon ICO/PNG, Apple touch icon, and social preview PNG.');
