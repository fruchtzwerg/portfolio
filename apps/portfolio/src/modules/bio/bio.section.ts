import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { map } from 'rxjs';

import { Achievement } from './models/achievement.model';
import { Achievements } from './providers/achievements.provider';

@Component({
  selector: 'portfolio-bio-section',
  templateUrl: './bio.section.html',
  styleUrls: ['./bio.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioSection {
  public largeScreen$ = this.breakpoint
    .observe(['(min-width: 600px)'])
    .pipe(map(breakpint => breakpint.matches));

  constructor(
    @Inject(Achievements) public bio: Achievement[],
    private breakpoint: BreakpointObserver
  ) {}
}
