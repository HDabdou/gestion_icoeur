import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccidentAvkPageRoutingModule } from './accident-avk-routing.module';

import { AccidentAvkPage } from './accident-avk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccidentAvkPageRoutingModule
  ],
  declarations: [AccidentAvkPage]
})
export class AccidentAvkPageModule {}
