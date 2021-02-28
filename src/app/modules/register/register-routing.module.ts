import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutesEnum } from '../shared/models/enums/AppRoutesEnum';
import { RegisterAccountComponent } from './pages/register-account/register-account.component';

import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: AppRoutesEnum.NONE,
    component: RegisterPage,
    children: [
      {
        path: AppRoutesEnum.NONE,
        redirectTo: AppRoutesEnum.ACCOUNT,
      },
      {
        path: AppRoutesEnum.ACCOUNT,
        component: RegisterAccountComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
