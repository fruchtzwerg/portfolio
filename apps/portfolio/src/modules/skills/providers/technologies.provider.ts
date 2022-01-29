import { InjectionToken, Provider } from '@angular/core';

import { TECHNOLOGIES } from '../constants/technologies.const';
import { Technology } from '../models/technology.model';

export const Technologies = new InjectionToken<Technology[]>(
  'A set of skills.'
);

export const TECHNOLOGIES_PROVIDER: Provider = {
  provide: Technologies,
  useValue: TECHNOLOGIES,
};
