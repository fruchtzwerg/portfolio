import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';

import { Skill } from './models/skill.model';
import { Technology } from './models/technology.model';
import { Skills } from './providers/skills.provider';
import { Technologies } from './providers/technologies.provider';

@Component({
  selector: 'portfolio-skills-section',
  templateUrl: './skills.section.html',
  styleUrls: ['./skills.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSection {
  constructor(
    @Inject(Technologies) public technologies: Technology[],
    @Inject(Skills) public skills: Skill[]
  ) {}
}
