import { NgModule } from '@angular/core';

import { AnimateDirective } from './directives/animate.directive';

@NgModule({
  declarations: [AnimateDirective],
  exports: [AnimateDirective],
})
export class AnimationModule {}
