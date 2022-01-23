import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioSection } from './portfolio.section';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { brandsIcons } from '@icons/brands';
import { PARTNERS_PROVIDER } from './providers/partners.provider';
import { CardModule } from 'primeng/card';
import { CustomerComponent } from './components/customer/customer.component';

@NgModule({
  declarations: [PortfolioSection, CustomerComponent],
  imports: [CommonModule, CardModule, SvgIconsModule.forChild(brandsIcons)],
  providers: [PARTNERS_PROVIDER],
  exports: [PortfolioSection],
})
export class PortfolioModule {}
