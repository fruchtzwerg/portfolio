import { InjectionToken, Provider } from '@angular/core';
import { PARTNERS } from '../constants/partners.const';
import { Partner } from '../models/partner.model';

export const Partners = new InjectionToken<Partner[]>(
  'A list of previous customers'
);

export const PARTNERS_PROVIDER: Provider = {
  provide: Partners,
  useValue: PARTNERS,
};
