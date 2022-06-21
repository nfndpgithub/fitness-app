import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalvesPageRoutingModule } from './calves-routing.module';

import { CalvesPage } from './calves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalvesPageRoutingModule
  ],
  declarations: [CalvesPage]
})
export class CalvesPageModule {}
