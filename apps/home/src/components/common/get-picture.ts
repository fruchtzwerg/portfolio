// https://github.com/withastro/astro/blob/2-legacy/packages/integrations/image/src/lib/get-picture.ts
/// <reference types="astro/astro-jsx" />

import type { ImageMetadata, ImageOutputFormat, ImageTransform } from 'astro';
import { getImage } from 'astro:assets';
import mime from 'mime';

export type ColorDefinition =
  | `#${string}`
  | `rgb(${number}, ${number}, ${number})`
  | `rgb(${number},${number},${number})`
  | `rgba(${number}, ${number}, ${number}, ${number})`
  | `rgba(${number},${number},${number},${number})`
  // eslint-disable-next-line @typescript-eslint/ban-types
  | ({} & string);
export type CropFit = 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
export type CropPosition =
  | 'top'
  | 'right top'
  | 'right'
  | 'right bottom'
  | 'bottom'
  | 'left bottom'
  | 'left'
  | 'left top'
  | 'north'
  | 'northeast'
  | 'east'
  | 'southeast'
  | 'south'
  | 'southwest'
  | 'west'
  | 'northwest'
  | 'center'
  | 'centre'
  | 'cover'
  | 'entropy'
  | 'attention';

export interface TransformOptions extends ImageTransform {
  alt?: string;
  aspectRatio?: number | `${number}:${number}` | undefined;
  background?: ColorDefinition | undefined;
  fit?: CropFit | undefined;
  position?: CropPosition | undefined;
}

interface AstroGetImage {
  src: string;
  attributes: {
    alt: string;
    aspectRatio: number;
    width: number;
    height: number;
    loading: 'lazy' | 'eager';
    decoding: 'async' | 'sync' | 'auto';
  };
}

function parseAspectRatio(aspectRatio: TransformOptions['aspectRatio']) {
  if (!aspectRatio) {
    return undefined;
  }

  // parse aspect ratio strings, if required (ex: "16:9")
  if (typeof aspectRatio === 'number') {
    return aspectRatio;
  }
  const [width, height] = aspectRatio.split(':');
  return parseInt(width, 10) / parseInt(height, 10);
}

// ----

function removeQueryString(src: string) {
  const index = src.lastIndexOf('?');
  return index > 0 ? src.substring(0, index) : src;
}

function basename(src: string) {
  // eslint-disable-next-line no-useless-escape
  return removeQueryString(src.replace(/^.*[\\\/]/, ''));
}

function extname(src: string) {
  const base = basename(src);
  const index = base.lastIndexOf('.');

  if (index <= 0) {
    return '';
  }

  return base.substring(index);
}

// ----

export interface GetPictureParams {
  src: string | ImageMetadata | Promise<{ default: ImageMetadata }>;
  alt: string;
  widths: number[];
  formats: ImageOutputFormat[];
  aspectRatio?: TransformOptions['aspectRatio'];
  fit?: TransformOptions['fit'];
  background?: TransformOptions['background'];
  position?: TransformOptions['position'];
}

export interface GetPictureResult {
  image: astroHTML.JSX.ImgHTMLAttributes;
  sources: { type: string; srcset: string }[];
}

async function resolveAspectRatio({ src, aspectRatio }: GetPictureParams) {
  if (typeof src === 'string') {
    return parseAspectRatio(aspectRatio);
  }
  const metadata = 'then' in src ? (await src).default : src;
  return parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
}

async function resolveFormats({ src, formats }: GetPictureParams) {
  const unique = new Set(formats);

  if (typeof src === 'string') {
    unique.add(extname(src).replace('.', '') as ImageOutputFormat);
  } else {
    const metadata = 'then' in src ? (await src).default : src;
    unique.add(extname(metadata.src).replace('.', '') as ImageOutputFormat);
  }

  return Array.from(unique).filter(Boolean);
}

export async function getPicture(params: GetPictureParams): Promise<GetPictureResult> {
  const { src, alt, widths, fit, position, background } = params;

  if (!src) {
    throw new Error('[astro:assets] `src` is required');
  }

  if (!widths || !Array.isArray(widths)) {
    throw new Error('[astro:assets] at least one `width` is required. ex: `widths={[100]}`');
  }

  const aspectRatio = await resolveAspectRatio(params);

  if (!aspectRatio) {
    throw new Error('`aspectRatio` must be provided for remote images');
  }

  // always include the original image format
  const allFormats = await resolveFormats(params);
  const lastFormat = allFormats[allFormats.length - 1];
  const maxWidth = Math.max(...widths);
  const height = Math.round(maxWidth / aspectRatio);

  let image: astroHTML.JSX.ImgHTMLAttributes;

  async function getSource(format: ImageOutputFormat) {
    const imgs = await Promise.all(
      widths.map(async width => {
        const img: AstroGetImage = await getImage({
          src: src as any,
          alt,
          format,
          width,
          height,
          fit,
          position,
          background,
          aspectRatio,
        });

        if (format === lastFormat && width === maxWidth) {
          const { src, attributes } = img;
          image = { src, ...attributes };
        }

        return `${img.src?.replaceAll(' ', encodeURI)} ${width}w`;
      }),
    );

    return {
      type: mime.getType(format) || format,
      srcset: imgs.join(','),
    };
  }

  const sources = await Promise.all(allFormats.map(format => getSource(format)));

  return {
    sources,
    // @ts-expect-error image will always be defined
    image,
  };
}
