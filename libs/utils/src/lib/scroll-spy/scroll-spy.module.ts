import { NgModule } from '@angular/core';
import { SpyTargetDirective } from './directives/spy-target.directive';

@NgModule({
  declarations: [SpyTargetDirective],
  imports: [],
  exports: [SpyTargetDirective],
})
export class ScrollSpyModule {}
