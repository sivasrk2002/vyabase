import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SivaComponent } from './siva.component';
const routes: Routes = [
  {
       path: '',
       component: SivaComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SivaRoutingModule { }
