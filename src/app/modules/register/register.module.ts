import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { SharedModule } from '../shared/shared.module';
import { RegisterAccountComponent } from './pages/register-account/register-account.component';
import { RegisterStepOneComponent } from './components/register-step-one/register-step-one.component';
import { RegisterStepTwoComponent } from './components/register-step-two/register-step-two.component';
import { RegisterStepFourComponent } from './components/register-step-four/register-step-four.component';
import { RegisterStepThreeComponent } from './components/register-step-three/register-step-three.component';

@NgModule({
  imports: [CommonModule, IonicModule, RegisterPageRoutingModule, SharedModule],
  declarations: [
    RegisterPage,
    RegisterAccountComponent,
    RegisterStepOneComponent,
    RegisterStepTwoComponent,
    RegisterStepFourComponent,
    RegisterStepThreeComponent,
  ],
})
export class RegisterPageModule {}
