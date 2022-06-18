import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitMealDetailsPageRoutingModule } from './fit-meal-details-routing.module';

import { FitMealDetailsPage } from './fit-meal-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FitMealDetailsPageRoutingModule
  ],
  declarations: [FitMealDetailsPage]
})
export class FitMealDetailsPageModule {}
