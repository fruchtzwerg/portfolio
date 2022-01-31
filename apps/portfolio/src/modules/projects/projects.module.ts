import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { brandsIcons } from '@icons/brands';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { AnimationModule } from '@utils/animation';

import { ProjectsSection } from './projects.section';
import { PROJECTS_PROVIDER } from './providers/projects.provider';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
  declarations: [ProjectsSection, ProjectComponent],
  imports: [
    CommonModule,
    AnimationModule,
    SvgIconsModule.forChild(brandsIcons),
  ],
  providers: [PROJECTS_PROVIDER],
})
export class ProjectsModule {}
