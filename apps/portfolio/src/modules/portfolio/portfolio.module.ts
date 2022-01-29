import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { brandsIcons } from '@icons/brands';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { CardModule } from 'primeng/card';

import { CustomerComponent } from './components/customer/customer.component';
import { PortfolioSection } from './portfolio.section';
import { PARTNERS_PROVIDER } from './providers/partners.provider';

@NgModule({
  declarations: [PortfolioSection, CustomerComponent],
  imports: [CommonModule, CardModule, SvgIconsModule.forChild(brandsIcons)],
  providers: [PARTNERS_PROVIDER],
  exports: [PortfolioSection],
})
export class PortfolioModule {}
