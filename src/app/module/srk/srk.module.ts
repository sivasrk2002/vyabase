import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SrkRoutingModule } from './srk-routing.module';
import { SrkComponent } from './srk.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SrkComponent
  ],
  imports: [
    CommonModule,
    SrkRoutingModule,
    HttpClientModule
  ]
})
export class SrkModule { }
