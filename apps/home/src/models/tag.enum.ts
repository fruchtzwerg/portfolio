export type Tag =
  | 'vue'
  | 'angular'
  | 'astro'
  | 'vite'
  | 'tailwind'
  | 'jest'
  | 'playwright'
  | 'nx'
  | 'webpack'
  | 'stencil'
  | 'electron'
  | 'scrum'
  | 'kanban'
  | 'typescript'
  | 'atlassian'
  | 'gitlab'
  | 'jenkins';

export interface Taggable {
  id: string;
  tags: Tag[];
}
