export type Extension = 'md' | 'mdx';
export type ComponentType = 'page' | 'layout' | 'component';

export interface GeneratorOptions {
  name: string;
  extension: Extension;
  project: string;
  type: ComponentType;
  layout?: string;
  directory?: string;
}

export type NormalizedGeneratorOptions = Required<GeneratorOptions>;
