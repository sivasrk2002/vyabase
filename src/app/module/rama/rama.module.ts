import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RamaRoutingModule } from './rama-routing.module';
import { RamaComponent } from './rama.component';


@NgModule({
  declarations: [
    RamaComponent
  ],
  imports: [
    CommonModule,
    RamaRoutingModule
  ]
})
export class RamaModule { }
