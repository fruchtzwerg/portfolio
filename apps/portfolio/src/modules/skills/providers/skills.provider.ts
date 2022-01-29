import { InjectionToken, Provider } from '@angular/core';

import { SKILLS } from '../constants/skills.const';
import { Skill } from '../models/skill.model';

export const Skills = new InjectionToken<Skill[]>('A set of skills.');

export const SKILLS_PROVIDER: Provider = { provide: Skills, useValue: SKILLS };
