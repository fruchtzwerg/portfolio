import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';

import { Section } from '../models/section.model';

@Directive({
  selector: '[portfolioComponentHost]',
})
export class ComponentHostDirective implements OnInit {
  @Input()
  public portfolioComponentHost!: Section;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(
      this.portfolioComponentHost.component
    );
  }
}
