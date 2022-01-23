import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioSection } from './portfolio.section';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { brandsIcons } from '@icons/brands';
import { PARTNERS_PROVIDER } from './providers/partners.provider';

@NgModule({
  declarations: [PortfolioSection],
  imports: [CommonModule, SvgIconsModule.forChild(brandsIcons)],
  providers: [PARTNERS_PROVIDER],
  exports: [PortfolioSection],
})
export class PortfolioModule {}
