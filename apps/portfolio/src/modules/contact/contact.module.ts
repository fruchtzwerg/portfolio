import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { contactsIcons } from '@icons/contacts';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { AnimationModule } from '@utils/animation';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';
import { ContactSection } from './contact.section';
import { CONTACTS_PROVIDER } from './providers/contacts.provider';

@NgModule({
  declarations: [ContactSection, LegalNoticeComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TooltipModule,
    AnimationModule,
    SvgIconsModule.forChild(contactsIcons),
  ],
  providers: [CONTACTS_PROVIDER],
  exports: [ContactSection, LegalNoticeComponent],
})
export class ContactModule {}
