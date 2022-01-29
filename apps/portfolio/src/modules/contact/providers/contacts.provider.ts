import { InjectionToken, Provider } from '@angular/core';

import { CONTACTS } from '../constants/contacts.const';

export const Contacts = new InjectionToken<typeof CONTACTS>(
  'Ways to contact me'
);

export const CONTACTS_PROVIDER: Provider = {
  provide: Contacts,
  useValue: CONTACTS,
};
