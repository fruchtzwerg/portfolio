import { Tree, formatFiles } from '@nx/devkit';
import { GeneratorOptions } from './schema';
import { addComponentFile } from './utils/file.utils';
import { normalizeOptions } from './utils/options.utils';
import { addMarkdownDependencies, addVSCodeFileAssociation } from './utils/deps.utils';

export default async function (tree: Tree, schema: GeneratorOptions) {
  const options = normalizeOptions(tree, schema);

  addComponentFile(tree, options);

  return async () => {
    if (options.extension === 'mdx') {
      addMarkdownDependencies(tree, options);
      addVSCodeFileAssociation(tree);
    }

    await formatFiles(tree);
  };
}
