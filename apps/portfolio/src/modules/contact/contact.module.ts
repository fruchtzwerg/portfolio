import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { contactsIcons } from '@icons/contacts';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

import { ContactSection } from './contact.section';
import { CONTACTS_PROVIDER } from './providers/contacts.provider';

@NgModule({
  declarations: [ContactSection],
  imports: [
    CommonModule,
    ButtonModule,
    TooltipModule,
    SvgIconsModule.forChild(contactsIcons),
  ],
  providers: [CONTACTS_PROVIDER],
  exports: [ContactSection],
})
export class ContactModule {}
