import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EducationTherapeutiquePageRoutingModule } from './education-therapeutique-routing.module';

import { EducationTherapeutiquePage } from './education-therapeutique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EducationTherapeutiquePageRoutingModule
  ],
  declarations: [EducationTherapeutiquePage]
})
export class EducationTherapeutiquePageModule {}
