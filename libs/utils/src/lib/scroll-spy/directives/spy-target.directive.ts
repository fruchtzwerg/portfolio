import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { ScrollNavigationService } from '../services/scroll-navigation.service';
import { ScrollSpyService } from '../services/scroll-spy.service';

@Directive({
  selector: '[portfolioSpyTarget]',
})
export class SpyTargetDirective implements OnInit, OnDestroy {
  @Input() portfolioSpyTarget!: string;

  private destroy$ = new Subject();

  private get htmlElement() {
    return this.el.nativeElement;
  }

  constructor(
    private el: ElementRef,
    private spyService: ScrollSpyService,
    private renderer: Renderer2,
    navigator: ScrollNavigationService
  ) {
    this.spyService.activeSpyTarget$
      .pipe(takeUntil(this.destroy$))
      .subscribe(target => navigator.navigate(target));
  }

  ngOnInit() {
    this.renderer.setAttribute(this.htmlElement, 'id', this.portfolioSpyTarget);
    this.spyService.addTarget({
      name: this.portfolioSpyTarget,
      element: this.el,
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.spyService.removeTarget(this.portfolioSpyTarget);
  }
}
