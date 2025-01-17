import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SrkComponent } from './srk.component';
import { AddbuttonComponent } from './addbutton/addbutton.component';
const routes: Routes = [
   {
         path: '',
         component: SrkComponent
      },
      {path:'add',
        component:AddbuttonComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SrkRoutingModule { }
