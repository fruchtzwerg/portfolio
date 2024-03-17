import { type CSSProperties } from 'vue';

// See https://github.com/slidevjs/slidev/blob/main/packages/client/layoutHelper.ts

export function resolveAssetUrl(url: string) {
  if (url.startsWith('/')) return import.meta.env.BASE_URL + url.slice(1);
  return url;
}

export function handleBackground(
  background?: string,
  dim: boolean | 'dark' = false,
  backgroundSize: 'cover' | 'container' = 'cover',
): CSSProperties {
  const isColor = background && (background[0] === '#' || background.startsWith('rgb'));
  const gradient = dim === 'dark' ? '#0008, #000a' : '#0005, #0008';

  const style = {
    background: isColor ? background : undefined,
    color: background && !isColor ? 'white' : undefined,
    backgroundImage: isColor
      ? undefined
      : background
        ? dim
          ? `linear-gradient(${gradient}), url(${resolveAssetUrl(background)})`
          : `url("${resolveAssetUrl(background)}")`
        : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize,
  };

  if (!style.background) delete style.background;

  return style;
}
