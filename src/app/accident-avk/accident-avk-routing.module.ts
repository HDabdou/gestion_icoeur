import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentAvkPage } from './accident-avk.page';

const routes: Routes = [
  {
    path: '',
    component: AccidentAvkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccidentAvkPageRoutingModule {}
