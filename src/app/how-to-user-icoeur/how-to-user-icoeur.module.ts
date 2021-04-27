import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowToUserIcoeurPageRoutingModule } from './how-to-user-icoeur-routing.module';

import { HowToUserIcoeurPage } from './how-to-user-icoeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowToUserIcoeurPageRoutingModule
  ],
  declarations: [HowToUserIcoeurPage]
})
export class HowToUserIcoeurPageModule {}
