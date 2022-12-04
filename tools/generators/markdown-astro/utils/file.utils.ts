import { generateFiles, joinPathFragments, names, Tree } from '@nrwl/devkit';
import { NormalizedGeneratorOptions } from '../schema';

const SRC_DIR = joinPathFragments(__dirname, '..', 'files');

export function addComponentFile(tree: Tree, options: NormalizedGeneratorOptions): void {
  generateFiles(tree, SRC_DIR, options.directory, {
    ...options,
    ...names(options.name),
    tmpl: '',
  });
}
