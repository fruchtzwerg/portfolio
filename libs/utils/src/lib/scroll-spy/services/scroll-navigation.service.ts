import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollNavigationService {
  constructor(private router: Router) {}

  public async navigate(fragment: string) {
    const result = await this.router.navigate([], {
      fragment,
      replaceUrl: true,
    });

    return result;
  }
}
