import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sharedcomp1Component } from './sharedcomp1/sharedcomp1.component';

const routes: Routes = [
  // {
  //   path:'result',
  //   component:Sharedcomp1Component
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
