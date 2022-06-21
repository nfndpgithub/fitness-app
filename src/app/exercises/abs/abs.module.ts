import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbsPageRoutingModule } from './abs-routing.module';

import { AbsPage } from './abs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbsPageRoutingModule
  ],
  declarations: [AbsPage]
})
export class AbsPageModule {}
