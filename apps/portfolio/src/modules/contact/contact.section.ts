import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { CONTACTS } from './constants/contacts.const';

import { Contacts } from './providers/contacts.provider';

@Component({
  selector: 'portfolio-contact-section',
  templateUrl: './contact.section.html',
  styleUrls: ['./contact.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  constructor(@Inject(Contacts) public contacts: typeof CONTACTS) {}
}
