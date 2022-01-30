import { AnimationBuilder, AnimationMetadata } from '@angular/animations';
import { Directive, ElementRef, Input, NgZone, OnDestroy } from '@angular/core';
import {
  combineLatest,
  distinctUntilChanged,
  filter,
  map,
  OperatorFunction,
  startWith,
  Subject,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';

import { IntersectionService } from '../../scroll-spy';
import { AnimationType, animations } from '../animations';
import { PlayerSubject } from '../utils/player.subject';

const THRESHOLD = 0.5;
const DURATION = 500;
const DELAY = 0;

const mapToAnimation = (): OperatorFunction<
  [AnimationType, number, number],
  AnimationMetadata[]
> => map(([name, duration, delay]) => animations[name]({ duration, delay }));

@Directive({
  selector: '[portfolioAnimate]',
})
export class AnimateDirective implements OnDestroy {
  private destroy$ = new Subject<void>();

  private player$ = new PlayerSubject(this.elRef.nativeElement, this.builder);

  private animationName$ = new Subject<AnimationType>();
  private threshold$ = new Subject<number>();
  private duration$ = new Subject<number>();
  private delay$ = new Subject<number>();

  /** Name of the animation */
  @Input()
  public set portfolioAnimate(value: AnimationType | undefined) {
    this.animationName$.next(value ?? 'noop');
  }

  /** Animation plays, when this percentage of the element is visible */
  @Input()
  public set threshold(value: number | undefined) {
    this.threshold$.next(value ?? THRESHOLD);
  }

  /** Duration of the animation in ms */
  @Input()
  public set duration(value: number | undefined) {
    this.duration$.next(value ?? DURATION);
  }

  /** Delay of the animation in ms */
  @Input()
  public set delay(value: number | undefined) {
    this.delay$.next(value ?? DELAY);
  }

  private get player() {
    return this.player$.player;
  }

  /** Wait for zone to stabilize */
  private isStable$ = this.zone.onStable.pipe(take(1));

  /** Visible area of the element is >= threshold per-cent */
  private isVisible$ = combineLatest([
    this.threshold$.pipe(startWith(THRESHOLD)),
    this.isStable$,
  ]).pipe(
    switchMap(([threshold]) =>
      this.intersectionSpy.observe(this.elRef.nativeElement, threshold)
    ),
    distinctUntilChanged(),
    filter(visible => visible && !this.player?.hasStarted()),
    takeUntil(this.destroy$)
  );

  /** Construct the final animation */
  private animation$ = combineLatest([
    this.animationName$,
    this.duration$.pipe(startWith(DURATION)),
    this.delay$.pipe(startWith(DELAY)),
  ]).pipe(distinctUntilChanged(), mapToAnimation(), takeUntil(this.destroy$));

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private intersectionSpy: IntersectionService,
    private zone: NgZone,
    private builder: AnimationBuilder
  ) {
    // update animation when input changes
    this.animation$.subscribe(animation => this.player$.next(animation));
    // play animation when enough of the lement is visible
    this.isVisible$.subscribe(() => this.player?.play());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
