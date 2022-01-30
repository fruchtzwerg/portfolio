import { NgModule } from '@angular/core';

import { SpyTargetDirective } from './directives/spy-target.directive';

@NgModule({
  declarations: [SpyTargetDirective],
  exports: [SpyTargetDirective],
})
export class ScrollSpyModule {}
