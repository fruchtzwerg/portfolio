export const getPages = (globs: Record<string, any>[]) =>
  globs
    .filter(page => !page.url.includes('_'))
    .map(({ frontmatter, ...props }) => ({ ...props, ...frontmatter }))
    .filter(page => page.title)
    .sort((a, b) => a.order - b.order);
