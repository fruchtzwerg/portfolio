import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'portfolio-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesComponent {
  @Input()
  public technologies: Technology[] = [];
}
