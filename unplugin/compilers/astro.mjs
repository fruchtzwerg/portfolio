const getRandomId = () => Math.random().toString(36).substr(2, 10);

/** @type {(svg: string) => string} */
function handleSVGId(svg) {
  const hasID = /="url\(#/.test(svg);
  const idMap = new Map();

  if (hasID) {
    svg = svg
      .replace(/\b([\w-]+?)="url\(#(.+?)\)"/g, (_, s, id) => {
        idMap.set(id, 'uicons-' + getRandomId());
        return `${s}="url(#${idMap.get(id)})"`;
      })
      .replace(/\bid="(.+?)"/g, (full, id) => (idMap.get(id) ? `id="${idMap.get(id)}"` : full));
  }

  return svg;
}

const AstroCompilerFn = icon => {
  const normalized = handleSVGId(icon);
  const svgWithProps = normalized.replace('<svg', '<svg {...props}');

  return `---
  interface Props extends astroHTML.JSX.SVGAttributes {};
  const props = Astro.props;
---
${svgWithProps}`;
};

export const AstroCompiler = { compiler: AstroCompilerFn, extension: 'astro' };
