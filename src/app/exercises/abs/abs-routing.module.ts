import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbsPage } from './abs.page';

const routes: Routes = [
  {
    path: '',
    component: AbsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbsPageRoutingModule {}
