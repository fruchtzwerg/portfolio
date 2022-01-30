import { Type } from '@angular/core';
import { AnimationType } from '@utils/animation';

export interface Section {
  name: string;
  component: Type<unknown>;
  animation?: AnimationType;
  duration?: number;
}
