import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Partner } from './models/partner.model';
import { Partners } from './providers/partners.provider';

@Component({
  selector: 'portfolio-portfolio-section',
  templateUrl: './portfolio.section.html',
  styleUrls: ['./portfolio.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioSection {
  constructor(@Inject(Partners) public partners: Partner[]) {}
}
