import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthHacksPage } from './health-hacks.page';

const routes: Routes = [
  {
    path: '',
    component: HealthHacksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthHacksPageRoutingModule {}
