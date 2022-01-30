import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { bioIcons } from '@icons/bio';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { AnimationModule } from '@utils/animation';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';

import { BioSection } from './bio.section';
import { ACHIEVEMENTS_PROVIDER } from './providers/achievements.provider';

@NgModule({
  declarations: [BioSection],
  imports: [
    CommonModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    LayoutModule,
    AnimationModule,
    SvgIconsModule.forChild(bioIcons),
  ],
  providers: [ACHIEVEMENTS_PROVIDER],
  exports: [BioSection],
})
export class BioModule {}
