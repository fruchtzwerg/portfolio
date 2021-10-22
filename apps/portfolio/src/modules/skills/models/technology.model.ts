import { Skill } from './skill.model';

export interface Technology extends Skill {
  experience: number;
  color: string;
}
