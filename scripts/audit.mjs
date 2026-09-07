import { access, readFile, readdir } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
/** @type {string[]} */
const files = [];

/** @param {string} directory */
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith('.html')) files.push(path);
  }
}

await walk(root);
const routes = new Set(files.map((file) => {
  const path = relative(root, file).replaceAll('\\', '/');
  return path === 'index.html' ? '/' : `/${path.replace(/index\.html$/, '')}`;
}));

const titles = new Map();
const descriptions = new Map();
const headings = new Map();
const broken = [];
let structuredDataBlocks = 0;

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(/<meta name="description" content="(.*?)"/s)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const h1 = html.match(/<h1[^>]*>(.*?)<\/h1>/s)?.[1].replace(/<[^>]+>/g, '').trim();
  if (!title || !description) throw new Error(`Missing title or description: ${file}`);
  if (!canonical?.startsWith('https://percentageincreasecalculator.xyz/')) throw new Error(`Missing or invalid production canonical: ${file}`);
  if (!h1) throw new Error(`Missing H1: ${file}`);
  if (titles.has(title)) throw new Error(`Duplicate title: ${title}`);
  if (descriptions.has(description)) throw new Error(`Duplicate description: ${description}`);
  if (headings.has(h1)) throw new Error(`Duplicate H1: ${h1}`);
  titles.set(title, file);
  descriptions.set(description, file);
  headings.set(h1, file);

  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    JSON.parse(match[1]);
    structuredDataBlocks += 1;
  }

  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1].split('#')[0].split('?')[0];
    if (!href || href.includes('.')) continue;
    const normalized = href.endsWith('/') ? href : `${href}/`;
    if (!routes.has(normalized)) broken.push(`${relative(root, file)} -> ${href}`);
  }
}

if (broken.length) throw new Error(`Broken internal links:\n${broken.join('\n')}`);

const guideRoot = fileURLToPath(new URL('../src/content/guides/', import.meta.url));
const guideFiles = (await readdir(guideRoot)).filter((name) => name.endsWith('.md'));
const guideIds = new Set(guideFiles.map((name) => name.replace(/\.md$/, '')));
for (const name of guideFiles) {
  const source = await readFile(join(guideRoot, name), 'utf8');
  if (!source.includes('/#calculator')) throw new Error(`Guide does not link to the calculator: ${name}`);
  const related = [...source.matchAll(/\/guides\/([^/)]+)\//g)].map((match) => match[1]);
  if (new Set(related).size < 2) throw new Error(`Guide needs at least two contextual related links: ${name}`);
  for (const id of related) if (!guideIds.has(id)) throw new Error(`Guide has unknown related link: ${name} -> ${id}`);
}

for (const asset of ['favicon.ico', 'favicon.svg', 'favicon-96x96.png', 'apple-touch-icon.png', 'og-default.png', 'robots.txt', 'sitemap-index.xml']) {
  await access(join(root, asset));
}

console.log(`Audit passed: ${files.length} HTML pages, ${titles.size} unique titles/descriptions/H1s, ${structuredDataBlocks} valid JSON-LD blocks, ${guideFiles.length} internally linked guides, 0 broken internal links.`);
