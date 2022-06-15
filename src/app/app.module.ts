import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { Comp1Component } from './layout/register/comp1.component';
import { Comp2Component } from './layout/comp2/comp2.component';
import { LayoutModule } from './layout/layout.module';
import { MainModule } from './main/main.module';
import { Maincomp1Component } from './main/maincomp1/maincomp1.component';
import { SharedModule } from './shared/shared.module';
import { Sharedcomp1Component } from './shared/sharedcomp1/sharedcomp1.component';
import { Sharedcomp2Component } from './shared/sharedcomp2/sharedcomp2.component';
import { Sharedcomp3Component } from './shared/sharedcomp3/sharedcomp3.component';

const appRoutes: Routes = [
  { path: '', component: Comp1Component },
  { path: 'register', component: Comp1Component },
  { path: 'login', component: Maincomp1Component },
  {
    path: 'profile', component: Sharedcomp1Component,
    children: [
      { path: 'tt', component: Sharedcomp2Component },
      { path: 'home', component: Sharedcomp3Component }
    ],
    // loadChildren:() => import('../app/shared/shared.module').then(jm => jm.SharedModule),
    canActivate: [AuthGuard]
  },
  { path: 'comp2', component: Comp2Component },
];

@NgModule({
  declarations: [
    AppComponent,
    Sharedcomp1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MainModule,
    SharedModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

}
