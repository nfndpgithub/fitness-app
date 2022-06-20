import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorePageRoutingModule } from './explore-routing.module';

import { ExplorePage } from './explore.page';
import { FitMealElementComponent } from '../fit-meal-element/fit-meal-element.component';
import {FitMealModalComponent} from '../fit-meal-modal/fit-meal-modal.component';

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplorePageRoutingModule
  ],
  declarations: [ExplorePage,FitMealElementComponent,FitMealModalComponent],
  entryComponents: [FitMealModalComponent]
})
export class ExplorePageModule {}
