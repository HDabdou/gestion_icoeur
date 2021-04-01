import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationTherapeutiquePage } from './education-therapeutique.page';

const routes: Routes = [
  {
    path: '',
    component: EducationTherapeutiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationTherapeutiquePageRoutingModule {}
