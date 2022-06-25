import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthyEatingPage } from './healthy-eating.page';

const routes: Routes = [
  {
    path: '',
    component: HealthyEatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthyEatingPageRoutingModule {}
