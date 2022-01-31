import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';

import { Project } from './models/project.model';
import { Projects } from './providers/projects.provider';

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.section.html',
  styleUrls: ['./projects.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  constructor(@Inject(Projects) public projects: Project[]) {}
}
