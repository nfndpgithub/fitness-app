import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChestPage } from './chest.page';

const routes: Routes = [
  {
    path: '',
    component: ChestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChestPageRoutingModule {}
