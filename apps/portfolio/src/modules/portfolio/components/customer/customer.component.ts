import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { Partner } from '../../models/partner.model';

@Component({
  selector: 'portfolio-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerComponent {
  @Input()
  public customer!: Partner;
}
