import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsSection } from './skills.section';
import { CardModule } from 'primeng/card';
import { TECHNOLOGIES_PROVIDER } from './providers/technologies.provider';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { brandsIcons } from '@icons/brands';
import { skillsIcons } from '@icons/skills';
import { FormsModule } from '@angular/forms';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SKILLS_PROVIDER } from './providers/skills.provider';

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
