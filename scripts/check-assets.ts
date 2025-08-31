// scripts/check-assets.ts
import { PRODUCTS } from '../lib/data';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

let missing: string[] = [];
for (const p of PRODUCTS) {
  for (const img of p.images ?? []) {
    const fsPath = join(process.cwd(), 'public', img.replace(/^\//, ''));
    if (!existsSync(fsPath)) missing.push(`${p.slug} -> ${img}`);
  }
}
if (missing.length) {
  console.error('Faltando arquivos:\n' + missing.join('\n'));
  process.exit(1);
} else {
  console.log('Tudo OK ✅');
}
