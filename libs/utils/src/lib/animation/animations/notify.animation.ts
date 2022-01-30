import { animate, keyframes, style } from '@angular/animations';

import { scale } from '../utils/transform.utils';

export const bounce = (params = { duration: 1_000, delay: 0 }) => [
  style('*'),
  animate(
    `${params.duration}ms ${params.delay}ms ease`,
    keyframes([
      style({ transform: scale(1) }),
      style({ transform: scale(0.75) }),
      style({ transform: scale(1.25) }),
      style({ transform: scale(1) }),
    ])
  ),
];
