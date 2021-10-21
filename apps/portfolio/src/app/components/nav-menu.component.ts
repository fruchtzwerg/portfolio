import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { ROUTER_LINK_ACTIVE_OPTIONS } from '../constants/router-link-active-options.const';
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

  public routerLinkActiveOptions = ROUTER_LINK_ACTIVE_OPTIONS;
}
