import { ElementRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { SpyTarget } from '../models/spy-target.model';
import { WindowService } from './windows.service';

@Injectable({
  providedIn: 'root',
})
export class ScrollSpyService {
  private stopSpying$ = new Subject();
  private activeSpyTarget = new Subject<string>();
  private spyTargets: SpyTarget[] = [];
  private thresholdTop = 0;
  private thresholdBottom = 0;
  private scrollContainer?: ElementRef;
  private isSpying = false;

  private scrollEvent$ = this.windowService.scrollEvent.pipe(
    takeUntil(this.stopSpying$)
  );

  private resizeEvent$ = this.windowService.resizeEvent.pipe(
    takeUntil(this.stopSpying$)
  );

  public activeSpyTarget$ = this.activeSpyTarget.pipe(distinctUntilChanged());

  constructor(private windowService: WindowService) {}

  public spy({
    scrollContainer,
    thresholdTop = 0,
    thresholdBottom = 0,
  }: SpyOptions = {}) {
    // this is to prevent duplicate listeners
    if (this.isSpying) {
      return;
    }

    this.isSpying = true;
    this.scrollContainer = scrollContainer;
    this.thresholdTop = thresholdTop;
    this.thresholdBottom = thresholdBottom;

    this.scrollEvent$.subscribe(() => this.checkActiveElement(scrollContainer));
    this.resizeEvent$.subscribe(() => this.checkActiveElement(scrollContainer));

    if (scrollContainer != null) {
      this.windowService
        .getScrollEventForContainer(scrollContainer)
        .pipe(takeUntil(this.stopSpying$))
        .subscribe(() => this.checkActiveElement(scrollContainer));
    }

    this.checkActiveElement(scrollContainer);
  }

  public addTarget(target: SpyTarget) {
    this.spyTargets.push({ ...target });
    this.checkActiveElement(this.scrollContainer);
  }

  public removeTarget(target: string) {
    this.spyTargets = this.spyTargets.filter(
      spyTarget => target !== spyTarget.name
    );
    this.checkActiveElement(this.scrollContainer);
  }

  public checkActiveElement(scrollContainer?: ElementRef) {
    const visibleTargets = this.spyTargets.filter(target =>
      this.isElementActive(target.element, scrollContainer, target.element)
    );
    const activeTarget = visibleTargets.length
      ? visibleTargets[0]
      : this.spyTargets[0];

    this.activeSpyTarget.next(activeTarget.name);
  }

  public isElementActive(
    element: ElementRef,
    scrollContainer?: ElementRef,
    currentActiveElement?: ElementRef | null
  ) {
    const targetOffsetTop = this.windowService.getElementOffsetTop(element);
    const targetHeight = this.windowService.getElementHeight(element);

    if (
      currentActiveElement != null &&
      this.windowService.getElementOffsetTop(currentActiveElement) >
        targetOffsetTop
    ) {
      return false;
    }

    const hasContainer = scrollContainer != null;

    const isInsideWindow = this.isElementInsideWindow(
      hasContainer,
      targetHeight,
      targetOffsetTop
    );

    if (isInsideWindow && !hasContainer) return true;

    return (
      isInsideWindow &&
      hasContainer &&
      this.isElementInsiedScrollContainer(
        targetHeight,
        targetOffsetTop,
        scrollContainer
      )
    );
  }

  public stopSpying() {
    this.stopSpying$.next();
    this.spyTargets = [];
    this.isSpying = false;
  }

  private isElementInsideWindow(
    hasContainer: boolean,
    elementHeight: number,
    elementOffsetTop: number
  ) {
    const scrollTop = this.windowService.scrollTop;
    const viewportHeight = this.windowService.viewportHeight;

    const viewportBottom = scrollTop + viewportHeight;
    const elementBottom = elementOffsetTop + elementHeight;

    // target bottom edge is below window top edge && target top edge is above window bottom edge
    // if target has a container, don't check for thresholds on the window
    if (hasContainer) {
      return elementBottom > scrollTop && elementOffsetTop < viewportBottom;
    }

    return (
      elementBottom > scrollTop + this.thresholdTop &&
      elementOffsetTop < viewportBottom - this.thresholdBottom
    );
  }

  private isElementInsiedScrollContainer(
    elementHeight: number,
    elementOffsetTop: number,
    container?: ElementRef
  ): boolean {
    if (!container) return false;

    const scrollContainerScrollTop =
      this.windowService.getElementScrollTop(container);
    const scrollContainerHeight =
      this.windowService.getElementHeight(container);
    const elementOffsetTopFromParent =
      elementOffsetTop - this.windowService.getElementOffsetTop(container);

    // element bottom edge is below container top edge && element top edge is above container bottom edge
    return (
      elementOffsetTopFromParent + elementHeight >
        scrollContainerScrollTop + this.thresholdTop &&
      elementOffsetTopFromParent <
        scrollContainerScrollTop + scrollContainerHeight - this.thresholdBottom
    );
  }
}

interface SpyOptions {
  scrollContainer?: ElementRef;
  thresholdTop?: number;
  thresholdBottom?: number;
}
