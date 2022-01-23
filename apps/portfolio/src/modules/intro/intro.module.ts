import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroSection } from './intro.section';
import { AvatarModule } from 'primeng/avatar';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [IntroSection],
  imports: [CommonModule, AvatarModule, ContactModule],
  exports: [IntroSection],
})
export class IntroModule {}
