import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalvesPage } from './calves.page';

const routes: Routes = [
  {
    path: '',
    component: CalvesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalvesPageRoutingModule {}
