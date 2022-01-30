import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { AnimationType } from '@utils/animation';
import { map } from 'rxjs';

import { Achievement } from './models/achievement.model';
import { Achievements } from './providers/achievements.provider';

const getAnimation = (isLarge: boolean, isEven: boolean): AnimationType => {
  if (!isLarge) return 'fadeInRight';

  return isEven ? 'fadeInRight' : 'fadeInLeft';
};

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

  public achievements$ = this.largeScreen$.pipe(
    map(isLarge =>
      this.bio.map<Achievement & { animation: AnimationType }>(
        (achievement, i) => ({
          ...achievement,
          animation: getAnimation(isLarge, i % 2 === 0),
        })
      )
    )
  );

  constructor(
    @Inject(Achievements) public bio: Achievement[],
    private breakpoint: BreakpointObserver
  ) {}
}
