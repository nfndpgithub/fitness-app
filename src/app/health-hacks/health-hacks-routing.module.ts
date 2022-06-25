import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthHacksPage } from './health-hacks.page';

const routes: Routes = [
  {
    path: '',
    component: HealthHacksPage
  },
  {
    path: 'vitamins',
    loadChildren: () => import('./vitamins/vitamins.module').then( m => m.VitaminsPageModule)
  },
  {
    path: 'healthy-eating',
    loadChildren: () => import('./healthy-eating/healthy-eating.module').then( m => m.HealthyEatingPageModule)
  },
  {
    path: 'mental-health',
    loadChildren: () => import('./mental-health/mental-health.module').then( m => m.MentalHealthPageModule)
  },
  {
    path: 'sleep',
    loadChildren: () => import('./sleep/sleep.module').then( m => m.SleepPageModule)
  },
  {
    path: 'tips-and-tricks',
    loadChildren: () => import('./tips-and-tricks/tips-and-tricks.module').then( m => m.TipsAndTricksPageModule)
  },
  {
    path: 'fitness',
    loadChildren: () => import('./fitness/fitness.module').then( m => m.FitnessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthHacksPageRoutingModule {}
