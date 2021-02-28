import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutesEnum } from '../shared/models/enums/AppRoutesEnum';

import { HomePage } from './home.page';
import { HomeMainComponent } from './pages/home-main/home-main.component';

const routes: Routes = [
  {
    path: AppRoutesEnum.NONE,
    component: HomePage,
    children: [
      {
        path: AppRoutesEnum.NONE,
        redirectTo: AppRoutesEnum.FIND,
      },
      {
        path: AppRoutesEnum.FIND,
        component: HomeMainComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
