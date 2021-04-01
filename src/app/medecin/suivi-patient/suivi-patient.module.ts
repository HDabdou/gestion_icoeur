import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuiviPatientPageRoutingModule } from './suivi-patient-routing.module';

import { SuiviPatientPage } from './suivi-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuiviPatientPageRoutingModule
  ],
  declarations: [SuiviPatientPage]
})
export class SuiviPatientPageModule {}
