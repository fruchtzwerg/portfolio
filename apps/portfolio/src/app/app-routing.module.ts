import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BioModule } from '../modules/bio/bio.module';
import { IntroModule } from '../modules/intro/intro.module';
import { PortfolioModule } from '../modules/portfolio/portfolio.module';

import { SkillsModule } from './../modules/skills/skills.module';
import { AppComponent } from './app.component';

export const routes: Routes = [{ path: '', component: AppComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BioModule,
    IntroModule,
    PortfolioModule,
    SkillsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
