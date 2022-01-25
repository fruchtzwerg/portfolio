import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { map } from 'rxjs';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'portfolio-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesComponent {
  @Input()
  public technologies: (Technology | null)[] = [];

  public technologies$ = this.breakpoint
    .observe(['(max-width: 900px)'])
    .pipe(
      map(state =>
        state.matches
          ? this.technologies.filter(t => t != null)
          : this.technologies
      )
    );

  constructor(private breakpoint: BreakpointObserver) {}
}
