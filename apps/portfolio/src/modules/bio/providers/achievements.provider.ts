import { InjectionToken, Provider } from '@angular/core';
import { ACHIEVEMENTS } from '../constants/achievements.const';
import { Achievement } from '../models/achievement.model';

export const Achievements = new InjectionToken<Achievement[]>(
  'Timeline of achievements'
);

export const ACHIEVEMENTS_PROVIDER: Provider = {
  provide: Achievements,
  useValue: ACHIEVEMENTS,
};
