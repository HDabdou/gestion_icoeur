import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TpInrPage } from './tp-inr.page';

const routes: Routes = [
  {
    path: '',
    component: TpInrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    
  ],
  exports: [RouterModule],
})
export class TpInrPageRoutingModule {}
