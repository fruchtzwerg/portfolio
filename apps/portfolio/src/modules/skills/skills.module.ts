import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { brandsIcons } from '@icons/brands';
import { skillsIcons } from '@icons/skills';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { CardModule } from 'primeng/card';

import { SkillsComponent } from './components/skills/skills.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { SKILLS_PROVIDER } from './providers/skills.provider';
import { TECHNOLOGIES_PROVIDER } from './providers/technologies.provider';
import { SkillsSection } from './skills.section';

@NgModule({
  declarations: [SkillsSection, TechnologiesComponent, SkillsComponent],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    SvgIconsModule.forChild([...brandsIcons, ...skillsIcons]),
  ],
  providers: [SKILLS_PROVIDER, TECHNOLOGIES_PROVIDER],
  exports: [SkillsSection],
})
export class SkillsModule {}
