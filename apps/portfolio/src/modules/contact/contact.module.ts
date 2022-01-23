import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactSection } from './contact.section';
import { CONTACTS_PROVIDER } from './providers/contacts.provider';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { contactsIcons } from '@icons/contacts';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ContactSection],
  imports: [CommonModule, ButtonModule, SvgIconsModule.forChild(contactsIcons)],
  providers: [CONTACTS_PROVIDER],
  exports: [ContactSection],
})
export class ContactModule {}
