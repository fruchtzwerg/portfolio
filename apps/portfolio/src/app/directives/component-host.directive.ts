import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { Section } from '../models/section.model';

@Directive({
  selector: '[lpComponentHost]',
})
export class ComponentHostDirective implements OnInit {
  @Input()
  public lpComponentHost!: Section;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        this.lpComponentHost.component
      );

    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }
}
