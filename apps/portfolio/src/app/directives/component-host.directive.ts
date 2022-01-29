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

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        this.portfolioComponentHost.component
      );

    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
}
