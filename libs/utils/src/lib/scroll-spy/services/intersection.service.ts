import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

type RootMargin = `${number}px ${number}px ${number}px ${number}px`;

export interface Margin {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

const getRootMargin = ({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
}: Margin): RootMargin => `${top}px ${right}px ${bottom}px ${left}px`;

@Injectable({
  providedIn: 'root',
})
export class IntersectionService {
  constructor(private zone: NgZone) {}

  public observe(
    el: HTMLElement,
    threshold: number,
    margin: Margin = {}
  ): Observable<boolean> {
    const rootMargin = getRootMargin(margin);

    return new Observable<boolean>(subscriber => {
      const observer = new IntersectionObserver(
        ([{ intersectionRatio }]) => {
          const visible = intersectionRatio >= threshold;
          const invisibble = intersectionRatio <= 0;

          // Emits true whenever the intersection cross the threashold (making sure to run in the angular zone)
          if (visible) this.zone.run(() => subscriber.next(true));

          // Emits false whenever the intersection cross back to full invisibility (making sure to run in the angular zone)
          if (invisibble) this.zone.run(() => subscriber.next(false));
        },
        { threshold: [0, threshold], rootMargin }
      );

      observer.observe(el);

      return () => observer.disconnect();
    });
  }
}
