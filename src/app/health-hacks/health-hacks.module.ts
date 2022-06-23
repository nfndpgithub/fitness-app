import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthHacksPageRoutingModule } from './health-hacks-routing.module';

import { HealthHacksPage } from './health-hacks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthHacksPageRoutingModule
  ],
  declarations: [HealthHacksPage]
})
export class HealthHacksPageModule {}
