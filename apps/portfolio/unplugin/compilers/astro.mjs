const getRandomId = () => Math.random().toString(36).substr(2, 10);

function handleSVGId(svg) {
  const hasID = /="url\(#/.test(svg);
  const idMap = {};

  if (hasID) {
    svg = svg
      .replace(/\b([\w-]+?)="url\(#(.+?)\)"/g, (_, s, id) => {
        idMap[id] = 'uicons-' + getRandomId();
        return `${s}="url(#${idMap[id]})"`;
      })
      .replace(/\bid="(.+?)"/g, (full, id) => {
        if (idMap[id]) return `id="${idMap[id]}"`;
        return full;
      });
  }

  return { hasID, svg };
}

const AstroCompilerFn = svg => {
  const { svg: normalized } = handleSVGId(svg);
  const svgWithProps = normalized.replace('<svg', '<svg {...props}');
  return `---
  interface Props extends astroHTML.JSX.SVGAttributes {};
  const props = Astro.props;
---
${svgWithProps}`;
};

export const AstroCompiler = { compiler: AstroCompilerFn, extension: 'astro' };
