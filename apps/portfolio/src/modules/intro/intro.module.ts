import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroSection } from './intro.section';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [IntroSection],
  imports: [CommonModule, AvatarModule],
  exports: [IntroSection, AvatarModule],
})
export class IntroModule {}
