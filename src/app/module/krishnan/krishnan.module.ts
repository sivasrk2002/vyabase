import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KrishnanRoutingModule } from './krishnan-routing.module';
import { KrishnanComponent } from './krishnan.component';


@NgModule({
  declarations: [
    KrishnanComponent
  ],
  imports: [
    CommonModule,
    KrishnanRoutingModule
  ]
})
export class KrishnanModule { }
