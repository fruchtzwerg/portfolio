import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsModule } from '../modules/portfolio/portfolio.module';
import { AppComponent } from './app.component';

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
    ProjectsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
