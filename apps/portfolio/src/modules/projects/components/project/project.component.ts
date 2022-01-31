import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Project } from '../../models/project.model';

@Component({
  selector: 'portfolio-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
  @Input()
  public project!: Project;
}
