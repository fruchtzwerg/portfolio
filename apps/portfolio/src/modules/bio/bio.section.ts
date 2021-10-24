import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Achievement } from './models/achievement.model';
import { Achievements } from './providers/achievements.provider';

@Component({
  selector: 'portfolio-bio-section',
  templateUrl: './bio.section.html',
  styleUrls: ['./bio.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioSection {
  constructor(@Inject(Achievements) public bio: Achievement[]) {}
}
