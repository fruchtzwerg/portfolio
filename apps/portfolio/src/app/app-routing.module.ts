import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BioModule } from '../modules/bio/bio.module';
import { ContactModule } from '../modules/contact/contact.module';
import { IntroModule } from '../modules/intro/intro.module';
import { PortfolioModule } from '../modules/portfolio/portfolio.module';
import { SkillsModule } from './../modules/skills/skills.module';

export const routes: Routes = [
  { path: '', component: AppComponent },
  // {
  //   path: '',
  //   data: { name: 'projects' },
  //   loadChildren: () =>
  //     import('../modules/projects/projects.module').then(
  //       (m) => m.ProjectsModule
  //     ),
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled' }),
    BioModule,
    ContactModule,
    IntroModule,
    PortfolioModule,
    SkillsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
