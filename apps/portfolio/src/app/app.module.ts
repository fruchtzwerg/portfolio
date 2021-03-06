import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appAngularTextIcon } from '@icons/brands/angular_text';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AnimationModule } from '@utils/animation';
import { ScrollSpyModule } from '@utils/scroll-spy';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { RippleModule } from 'primeng/ripple';

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
    DynamicDialogModule,
    ButtonModule,
    RippleModule,
    ScrollSpyModule,
    AnimationModule,
    SvgIconsModule.forRoot({
      icons: [appAngularTextIcon],
      color: 'var(--text-color)',
    }),
    ScullyLibModule,
  ],
  providers: [SECTIONS_PROVIDER],
  exports: [AnimationModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
