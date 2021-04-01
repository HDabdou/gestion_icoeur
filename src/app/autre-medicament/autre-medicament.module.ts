import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutreMedicamentPageRoutingModule } from './autre-medicament-routing.module';

import { AutreMedicamentPage } from './autre-medicament.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutreMedicamentPageRoutingModule
  ],
  declarations: [AutreMedicamentPage]
})
export class AutreMedicamentPageModule {}
