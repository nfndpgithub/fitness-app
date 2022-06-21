import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShouldersPageRoutingModule } from './shoulders-routing.module';

import { ShouldersPage } from './shoulders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShouldersPageRoutingModule
  ],
  declarations: [ShouldersPage]
})
export class ShouldersPageModule {}
