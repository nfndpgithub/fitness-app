import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VitaminsPage } from './vitamins.page';

const routes: Routes = [
  {
    path: '',
    component: VitaminsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VitaminsPageRoutingModule {}
