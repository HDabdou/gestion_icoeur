import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuiviPatientPage } from './suivi-patient.page';

const routes: Routes = [
  {
    path: '',
    component: SuiviPatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuiviPatientPageRoutingModule {}
