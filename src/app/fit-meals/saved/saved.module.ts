import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedPageRoutingModule } from './saved-routing.module';

import { SavedPage } from './saved.page';
import {ExplorePageModule} from "../explore/explore.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SavedPageRoutingModule,
        ExplorePageModule
    ],
  declarations: [SavedPage]
})
export class SavedPageModule {}
