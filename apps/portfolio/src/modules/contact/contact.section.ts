import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  Input,
} from '@angular/core';
import { CONTACTS } from './constants/contacts.const';

import { Contacts } from './providers/contacts.provider';

type TooltipPosition = 'right' | 'left' | 'top' | 'bottom';

@Component({
  selector: 'portfolio-contact-section',
  templateUrl: './contact.section.html',
  styleUrls: ['./contact.section.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  @Input()
  public tooltipPosition: TooltipPosition = 'top';

  constructor(@Inject(Contacts) public contacts: typeof CONTACTS) {}
}
