import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChestPageRoutingModule } from './chest-routing.module';

import { ChestPage } from './chest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChestPageRoutingModule
  ],
  declarations: [ChestPage]
})
export class ChestPageModule {}
