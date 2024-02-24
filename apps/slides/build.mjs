// @ts-check

import { globSync as glob } from 'glob';
import { basename } from 'path';
import { $ } from 'execa';

const entrypoints = glob('pages/**/[0-9]-*.md');

entrypoints.forEach(entrypoint => {
  const base = basename(entrypoint, '.md');
  console.log(entrypoint, base);
  $`slidev build ${entrypoint} --out=dist/${base} --base=/slides/${base}/`;
});
