import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appBulbIcon } from '@icons/bulb';
import { appBulbOutlineIcon } from '@icons/bulb-outline';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ScrollSpyModule } from '@utils/scroll-spy/scroll-spy.module';

import { ContactModule } from '../modules/contact/contact.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu.component';
import { ComponentHostDirective } from './directives/component-host.directive';
import { SECTIONS_PROVIDER } from './providers/sections.provider';

@NgModule({
  declarations: [AppComponent, NavMenuComponent, ComponentHostDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ContactModule,
    ScrollSpyModule,
    SvgIconsModule.forRoot({
      icons: [appBulbIcon, appBulbOutlineIcon],
      color: 'var(--text-color)',
    }),
    ScullyLibModule,
  ],
  providers: [SECTIONS_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
