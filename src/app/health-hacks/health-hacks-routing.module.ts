import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthHacksPage } from './health-hacks.page';

const routes: Routes = [
  {
    path: '',
    component: HealthHacksPage
  },
  {
    path: 'Vitamins',
    loadChildren: () => import('./vitamins/vitamins.module').then( m => m.VitaminsPageModule)
  },
  {
    path: 'Healthy',
    loadChildren: () => import('./healthy-eating/healthy-eating.module').then( m => m.HealthyEatingPageModule)
  },
  {
    path: 'Mental',
    loadChildren: () => import('./mental-health/mental-health.module').then( m => m.MentalHealthPageModule)
  },
  {
    path: 'Sleep',
    loadChildren: () => import('./sleep/sleep.module').then( m => m.SleepPageModule)
  },
  {
    path: 'Tips',
    loadChildren: () => import('./tips-and-tricks/tips-and-tricks.module').then( m => m.TipsAndTricksPageModule)
  },
  {
    path: 'Fitness',
    loadChildren: () => import('./fitness/fitness.module').then( m => m.FitnessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthHacksPageRoutingModule {}

