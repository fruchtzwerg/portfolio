import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { SECTIONS } from './constants/sections.const';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public sections = SECTIONS;

  constructor(primengConfig: PrimeNGConfig) {
    primengConfig.ripple = true;
  }
}
