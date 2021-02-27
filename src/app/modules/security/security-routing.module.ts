import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutesEnum } from '../shared/models/enums/AppRoutesEnum';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: AppRoutesEnum.NONE,
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityPageRoutingModule {}
