import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioSection } from './bio.section';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { bioIcons } from '@icons/bio';
import { ACHIEVEMENTS_PROVIDER } from './providers/achievements.provider';

@NgModule({
  declarations: [BioSection],
  imports: [
    CommonModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    SvgIconsModule.forChild(bioIcons),
  ],
  providers: [ACHIEVEMENTS_PROVIDER],
  exports: [BioSection],
})
export class BioModule {}
