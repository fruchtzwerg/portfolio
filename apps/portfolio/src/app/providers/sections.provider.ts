import { InjectionToken, Provider } from '@angular/core';
import { SECTIONS } from '../constants/sections.const';
import { Section } from '../models/section.model';

export const Sections = new InjectionToken<Section[]>(
  'A set of sections to display.'
);

export const SECTIONS_PROVIDER: Provider = {
  provide: Sections,
  useValue: SECTIONS,
};
