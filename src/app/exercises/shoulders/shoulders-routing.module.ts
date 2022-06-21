import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShouldersPage } from './shoulders.page';

const routes: Routes = [
  {
    path: '',
    component: ShouldersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShouldersPageRoutingModule {}
