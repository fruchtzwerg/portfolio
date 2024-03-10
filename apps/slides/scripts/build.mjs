// @ts-check

import { globSync as glob } from 'glob';
import { basename } from 'path';
import { $ } from 'execa';
import { cp } from 'fs/promises';

const entrypoints = glob('[0-9]-*.md');

entrypoints.reduce(
  /**
   * @param {PromiseLike} $prev
   */
  async ($prev, entrypoint) => {
    await $prev;
    const base = basename(entrypoint, '.md');

    console.info(`⚙️ Building ${base} from ${entrypoint}...`);

    await $({
      stdio: 'inherit',
    })`slidev build ${entrypoint} --out=dist/${base} --base=/slides/${base}/`;

    await cp('public', 'dist/public', { recursive: true });
  },
  Promise.resolve(),
);
