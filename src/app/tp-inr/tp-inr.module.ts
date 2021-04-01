import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TpInrPageRoutingModule } from './tp-inr-routing.module';

import { TpInrPage } from './tp-inr.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TpInrPageRoutingModule,
  ],
  declarations: [TpInrPage]
})
export class TpInrPageModule {}
