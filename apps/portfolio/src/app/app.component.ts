import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
} from '@angular/core';
import { ScrollSpyService } from '@utils/scroll-spy/services/scroll-spy.service';
import { PrimeNGConfig } from 'primeng/api';

import { Section } from './models/section.model';
import { Sections } from './providers/sections.provider';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  constructor(
    primengConfig: PrimeNGConfig,
    @Inject(Sections) public sections: Section[],
    private spyService: ScrollSpyService
  ) {
    primengConfig.ripple = true;
  }

  ngAfterViewInit() {
    this.spyService.spy();
  }
}
