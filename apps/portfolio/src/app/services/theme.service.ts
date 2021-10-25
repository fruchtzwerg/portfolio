import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

export type Theme = 'bootstrap-dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  public applyTheme(theme: Theme) {
    const themeLink = this.document.querySelector<HTMLLinkElement>('#theme');

    console.log(themeLink);

    if (themeLink) themeLink.href = theme + '.css';
  }
}
