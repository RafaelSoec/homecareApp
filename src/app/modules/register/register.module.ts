import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { SharedModule } from '../shared/shared.module';
import { RegisterAccountComponent } from './pages/register-account/register-account.component';

@NgModule({
  imports: [CommonModule, IonicModule, RegisterPageRoutingModule, SharedModule],
  declarations: [RegisterPage, RegisterAccountComponent],
})
export class RegisterPageModule {}
