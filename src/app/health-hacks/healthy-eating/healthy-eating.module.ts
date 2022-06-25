import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthyEatingPageRoutingModule } from './healthy-eating-routing.module';

import { HealthyEatingPage } from './healthy-eating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthyEatingPageRoutingModule
  ],
  declarations: [HealthyEatingPage]
})
export class HealthyEatingPageModule {}
