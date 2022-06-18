import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitMealDetailsPage } from './fit-meal-details.page';

const routes: Routes = [
  {
    path: '',
    component: FitMealDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitMealDetailsPageRoutingModule {}
