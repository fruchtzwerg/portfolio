import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ScrollSpyService } from '@utils/scroll-spy/services/scroll-spy.service';
import { auditTime } from 'rxjs';

import { Section } from '../models/section.model';

@Component({
  selector: 'portfolio-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent {
  @Input()
  public sections!: Section[];

  // required to prevent checked after init error
  public activeSection$ = this.spyService.activeSpyTarget$.pipe(auditTime(0));

  constructor(private spyService: ScrollSpyService) {}
}
