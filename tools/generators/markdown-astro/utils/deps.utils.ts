import {
  detectPackageManager,
  joinPathFragments,
  PackageManager,
  readProjectConfiguration,
  Tree,
  readRootPackageJson,
  updateJson,
} from '@nrwl/devkit';
import { execSync } from 'child_process';
import { join } from 'path';
import { GeneratorOptions } from '../schema';

export function addMarkdownDependencies(
  tree: Tree,
  options: GeneratorOptions,
  cwd: string = '',
  packageManager: PackageManager = detectPackageManager(cwd)
) {
  const hasMdxPlugin = '@astrojs/mdx' in (readRootPackageJson().dependencies ?? {});

  if (hasMdxPlugin) return;

  const executor = packageManager === 'npm' ? 'npx' : packageManager;
  const project = readProjectConfiguration(tree, options.project);
  const astroConfig = joinPathFragments(project.root, 'astro.config.mjs');

  execSync(`${executor} astro add mdx --config ${astroConfig}`, {
    cwd: join(tree.root, cwd),
    stdio: [0, 1, 2],
  });
}

export function addVSCodeFileAssociation(tree: Tree) {
  updateJson(tree, '.vscode/settings.json', json => {
    const key = 'files.associations';
    const mdx = '*.mdx';

    json[key] = json[key] ?? {};

    if (mdx in json[key]) return json;

    json[key][mdx] = 'markdown';

    return json;
  });
}
