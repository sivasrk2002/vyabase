import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SivaRoutingModule } from './siva-routing.module';
import { SivaComponent } from './siva.component';

@NgModule({
  declarations: [
    SivaComponent
  ],
  imports: [
    CommonModule,
    SivaRoutingModule
  ]
})
export class SivaModule { }
