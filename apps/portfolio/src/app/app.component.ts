import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
} from '@angular/core';
import { ScrollSpyService } from '@utils/scroll-spy/services/scroll-spy.service';
import { PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

import { LegalNoticeComponent } from '../modules/contact/components/legal-notice/legal-notice.component';

import { Section } from './models/section.model';
import { Sections } from './providers/sections.provider';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DialogService],
})
export class AppComponent implements AfterViewInit {
  constructor(
    primengConfig: PrimeNGConfig,
    @Inject(Sections) public sections: Section[],
    private spyService: ScrollSpyService,
    private dialogService: DialogService
  ) {
    primengConfig.ripple = true;
  }

  ngAfterViewInit() {
    this.spyService.spy();
  }

  public openLegalNotice() {
    this.dialogService.open(LegalNoticeComponent, {
      header: 'Legal Notice',
      width: '70%',
      style: { maxWidth: '640px' },
      closeOnEscape: true,
      showHeader: false,
      dismissableMask: true,
    });
  }
}
