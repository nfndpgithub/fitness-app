import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplorePageRoutingModule } from './explore-routing.module';

import { ExplorePage } from './explore.page';
import { FitMealElementComponent } from '../fit-meal-element/fit-meal-element.component';
import {FitMealModalComponent} from '../fit-meal-modal/fit-meal-modal.component';
import {FitMealModalUpdateComponent} from "../fit-meal-modal-update/fit-meal-modal-update.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExplorePageRoutingModule
    ],
    declarations: [ExplorePage, FitMealElementComponent, FitMealModalComponent, FitMealModalUpdateComponent],
    exports: [
        FitMealElementComponent
    ],
    entryComponents: [FitMealModalComponent]
})
export class ExplorePageModule {}
