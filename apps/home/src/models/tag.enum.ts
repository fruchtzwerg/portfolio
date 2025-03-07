export type Tag =
  | 'vue'
  | 'angular'
  | 'react'
  | 'astro'
  | 'vite'
  | 'tailwind'
  | 'express'
  | 'nest'
  | 'trpc'
  | 'socketio'
  | 'designsystem'
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
