// @ts-check

import { globSync as glob } from 'glob';
import { basename } from 'path';
import { $ } from 'execa';
import { cp } from 'fs/promises';
import { rimraf } from 'rimraf';

const entrypoints = glob('[0-9]-*.md');

const clean = async () => {
  console.info('🧹 Cleaning up...');

  await rimraf('dist');
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
    })`slidev export ${base} --dark --timeout=90000 --output dist/${base}/${base}.pdf`;
  },
  clean(),
);
