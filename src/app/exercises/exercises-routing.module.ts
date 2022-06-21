import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisesPage } from './exercises.page';

const routes: Routes = [
  {
    path: '',
    component: ExercisesPage
  },  {
    path: 'chest',
    loadChildren: () => import('./chest/chest.module').then( m => m.ChestPageModule)
  },
  {
    path: 'back',
    loadChildren: () => import('./back/back.module').then( m => m.BackPageModule)
  },
  {
    path: 'arms',
    loadChildren: () => import('./arms/arms.module').then( m => m.ArmsPageModule)
  },
  {
    path: 'shoulders',
    loadChildren: () => import('./shoulders/shoulders.module').then( m => m.ShouldersPageModule)
  },
  {
    path: 'abs',
    loadChildren: () => import('./abs/abs.module').then( m => m.AbsPageModule)
  },
  {
    path: 'legs',
    loadChildren: () => import('./legs/legs.module').then( m => m.LegsPageModule)
  },
  {
    path: 'calves',
    loadChildren: () => import('./calves/calves.module').then( m => m.CalvesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisesPageRoutingModule {}
