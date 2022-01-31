import { InjectionToken, Provider } from '@angular/core';

import { PROJECTS } from '../constants/projects.const';

export const Projects = new InjectionToken<typeof PROJECTS>('Projects');

export const PROJECTS_PROVIDER: Provider = {
  provide: Projects,
  useValue: PROJECTS,
};
