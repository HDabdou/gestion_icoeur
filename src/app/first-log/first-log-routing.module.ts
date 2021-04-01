import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstLogPage } from './first-log.page';

const routes: Routes = [
  {
    path: '',
    component: FirstLogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstLogPageRoutingModule {}
