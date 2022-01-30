import { fades } from './fade.animation';
import { noop } from './noop.animation';
import { bounce } from './notify.animation';

export const animations = { noop, ...fades, bounce };

export type AnimationType = keyof typeof animations;
