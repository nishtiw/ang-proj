import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Comp1Component } from './layout/register/comp1.component';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [];

@NgModule({
  imports: [
  //   RouterModule.forChild([
  //     {
  //       path: '',
  //       component: Comp1Component,
  //       children: [
  //         {
  //           path: 'layout',
  //           loadChildren: () => import('../app/layout/layout.module').then (jm => jm.LayoutModule), 
  //           data: { breadcrumb: 'MyModule' },
  //         },
  //       ]
  //     }
  // ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
