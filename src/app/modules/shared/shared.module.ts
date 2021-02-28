import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './components/footer/footer.component';
import { ImgComponent } from './components/img/img.component';
import { InputComponent } from './components/input/input.component';
import { BrMaskerModule } from 'br-mask';
import { TextMsgComponent } from './components/text-msg/text-msg.component';
import { SharedPageRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { IconMapComponent } from './components/icons/icon-map/icon-map.component';
import { IconComponent } from './components/icons/icon/icon.component';
import { SvgIconComponent } from './components/icons/svg-icon/svg-icon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BrMaskerModule,

    SharedPageRoutingModule,
  ],
  declarations: [
    //components
    IconComponent,
    IconMapComponent,
    SvgIconComponent,
    ImgComponent,
    InputComponent,
    FooterComponent,
    TextMsgComponent,
    HeaderComponent,
    SearchComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    //components
    IconComponent,
    IconMapComponent,
    SvgIconComponent,
    ImgComponent,
    InputComponent,
    FooterComponent,
    TextMsgComponent,
    HeaderComponent,
    SearchComponent,
  ],
})
export class SharedModule {}
