import { Type } from '@angular/core';

export interface Section {
  name: string;
  component: Type<unknown>;
}
