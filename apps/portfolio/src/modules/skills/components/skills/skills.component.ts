import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Skill } from '../../models/skill.model';

@Component({
  selector: 'portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  @Input()
  public skills: Skill[] = [];
}
