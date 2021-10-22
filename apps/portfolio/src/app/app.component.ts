import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Section } from './models/section.model';
import { Sections } from './providers/sections.provider';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    @Inject(Sections) public sections: Section[],
    primengConfig: PrimeNGConfig
  ) {
    primengConfig.ripple = true;
  }
}
