import { Component, Type } from '@angular/core';

export interface Section {
  name: string;
  component: Type<Component>;
}
