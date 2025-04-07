// @ts-check

import { $ } from 'execa';
import { cp } from 'fs/promises';
import { globSync as glob } from 'glob';
import { basename } from 'path';
import { rimraf } from 'rimraf';

const args = process.argv.slice(2);
const entrypoints = args.length ? args : glob('[0-9]-*.md');

const clean = async () => {
  console.info('🧹 Cleaning up...');

  await rimraf(`dist/${entrypoints.join('|')}|public`);
  await rimraf('index.html');

  await cp('public', 'dist/public', { recursive: true });
};

entrypoints.reduce(
  /**
   * @param {PromiseLike} $prev
   */
  async ($prev, entrypoint) => {
    await $prev;
    const base = basename(entrypoint, '.md');

    console.info(`🔧 Building ${base} from ${entrypoint}...`);

    await $({
      stdio: 'inherit',
    })`slidev build ${entrypoint} --out=dist/${base} --base=/slides/${base}/`;

    await $({
      stdio: 'inherit',
    })`slidev export ${base} --dark --timeout=90000 --wait 5000 --wait-until load --output dist/${base}/${base}.pdf`;
  },
  clean(),
);
