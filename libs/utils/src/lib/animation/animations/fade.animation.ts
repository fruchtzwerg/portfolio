import { animate, style } from '@angular/animations';

import {
  scale,
  transform,
  Transformer,
  translate,
} from '../utils/transform.utils';

const fadeFactory =
  (transformers: Transformer[]) =>
  (params = { duration: 1_000, delay: 0 }) =>
    [
      style({
        transform: transform(...transformers),
        opacity: 0,
      }),
      animate(`${params.duration}ms ${params.delay}ms ease`, style('*')),
    ];

/** Fade-in without transition */
export const fadeIn = fadeFactory([scale(1.2)]);

/** Fade-in to the left */
export const fadeInLeft = fadeFactory([scale(0.8), translate(80)]);

/** Fade-in to the right */
export const fadeInRight = fadeFactory([scale(0.8), translate(-80)]);

// export const fades = [...fadeIn, ...fadeInLeft, ...fadeInRight];
export const fades = { fadeIn, fadeInLeft, fadeInRight };
