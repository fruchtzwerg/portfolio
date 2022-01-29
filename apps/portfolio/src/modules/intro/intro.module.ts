import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

import { ContactModule } from '../contact/contact.module';

import { IntroSection } from './intro.section';

@NgModule({
  declarations: [IntroSection],
  imports: [CommonModule, AvatarModule, ContactModule],
  exports: [IntroSection],
})
export class IntroModule {}
