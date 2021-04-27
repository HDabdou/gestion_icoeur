import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowToUserIcoeurPage } from './how-to-user-icoeur.page';

const routes: Routes = [
  {
    path: '',
    component: HowToUserIcoeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowToUserIcoeurPageRoutingModule {}
