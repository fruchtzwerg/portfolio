import { IsActiveMatchOptions } from '@angular/router';

export const ROUTER_LINK_ACTIVE_OPTIONS: IsActiveMatchOptions = {
  matrixParams: 'ignored',
  paths: 'exact',
  queryParams: 'ignored',
  fragment: 'exact',
};
