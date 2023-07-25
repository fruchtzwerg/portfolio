import {
  Tree,
  readProjectConfiguration,
  joinPathFragments,
  ProjectConfiguration,
} from '@nx/devkit';
import { relative } from 'path';
import { GeneratorOptions, NormalizedGeneratorOptions } from '../schema';

const getDirectory = (options: GeneratorOptions, project, componentType: string) => {
  let directory: string;

  if (options.directory) {
    directory = joinPathFragments(project.root, options.directory);
  } else if (project.projectType === 'library') {
    directory = joinPathFragments(project.root, 'src', 'lib');
  } else {
    directory = joinPathFragments(project.root, 'src', `${componentType}s`);
  }

  return directory;
};

const getExtension = (options: GeneratorOptions) => options.extension ?? 'md';

const getLayout = (
  { layout }: GeneratorOptions,
  targetDir: string,
  project: ProjectConfiguration
) => {
  if (!layout) return '';

  const layoutsDir = relative(targetDir, joinPathFragments(project.root, 'src', 'layouts'));

  return layout.endsWith('.astro') ? layout : joinPathFragments(layoutsDir, `${layout}.astro`);
};

export function normalizeOptions(
  tree: Tree,
  options: GeneratorOptions
): NormalizedGeneratorOptions {
  const project = readProjectConfiguration(tree, options.project);
  const componentType = options.type ?? 'page';

  const directory = getDirectory(options, project, componentType);
  const extension = getExtension(options);
  const layout = getLayout(options, directory, project);

  return {
    ...options,
    directory,
    extension,
    layout,
  };
}
