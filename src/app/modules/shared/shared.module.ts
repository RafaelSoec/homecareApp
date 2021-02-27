import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './components/footer/footer.component';
import { IconComponent } from './components/icons/icon/icon.component';
import { IconMapComponent } from './components/icons/icon-map/icon-map.component';
import { SvgIconComponent } from './components/icons/svg-icon/svg-icon.component';
import { ImgComponent } from './components/img/img.component';
import { InputComponent } from './components/input/input.component';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BrMaskerModule],
  declarations: [
    IconComponent,
    IconMapComponent,
    SvgIconComponent,
    ImgComponent,
    InputComponent,
    FooterComponent,
  ],
  exports: [
    IconComponent,
    IconMapComponent,
    SvgIconComponent,
    ImgComponent,
    InputComponent,
    FooterComponent,
  ],
})
export class SharedPageModule {}
