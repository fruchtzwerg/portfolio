import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export type Theme = 'tokyo-night-dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public applyTheme(theme: Theme) {
    const themeLink = this.document.querySelector<HTMLLinkElement>('#theme');

    if (themeLink) themeLink.href = theme + '.css';
  }
}
