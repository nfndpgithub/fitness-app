import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VitaminsPageRoutingModule } from './vitamins-routing.module';

import { VitaminsPage } from './vitamins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VitaminsPageRoutingModule
  ],
  declarations: [VitaminsPage]
})
export class VitaminsPageModule {}
