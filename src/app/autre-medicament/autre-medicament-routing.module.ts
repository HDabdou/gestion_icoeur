import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutreMedicamentPage } from './autre-medicament.page';

const routes: Routes = [
  {
    path: '',
    component: AutreMedicamentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutreMedicamentPageRoutingModule {}
