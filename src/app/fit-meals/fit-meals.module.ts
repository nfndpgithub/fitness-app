import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitMealsPageRoutingModule } from './fit-meals-routing.module';

import { FitMealsPage } from './fit-meals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FitMealsPageRoutingModule
  ],
  declarations: [FitMealsPage]
})
export class FitMealsPageModule {}
