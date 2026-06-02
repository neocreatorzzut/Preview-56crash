import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '../dist');

const routes = ['horarios', 'sucursales', 'equipo', 'waitlist_crash_app'];

const html = readFileSync(join(distDir, 'index.html'), 'utf-8');

for (const route of routes) {
  const dir = join(distDir, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html);
  console.log(`  created: dist/${route}/index.html`);
}

console.log('Static pages generated for:', routes);
