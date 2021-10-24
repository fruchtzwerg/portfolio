import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavMenuComponent } from './components/nav-menu.component';
import { ComponentHostDirective } from './directives/component-host.directive';
import { appBulbIcon } from '@icons/bulb';
import { appBulbOutlineIcon } from '@icons/bulb-outline';
import { SECTIONS_PROVIDER } from './providers/sections.provider';
import { skillsIcons } from '@icons/skills';
import { brandsIcons } from '@icons/brands';
import { bioIcons } from '@icons/bio';

@NgModule({
  declarations: [AppComponent, NavMenuComponent, ComponentHostDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SvgIconsModule.forRoot({
      icons: [
        appBulbIcon,
        appBulbOutlineIcon,
        ...skillsIcons,
        ...brandsIcons,
        ...bioIcons,
      ],
      color: 'var(--text-color)',
    }),
  ],
  providers: [SECTIONS_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
