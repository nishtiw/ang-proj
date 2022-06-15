import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Maincomp1Component } from './maincomp1/maincomp1.component';
import { Maincomp2Component } from './maincomp2/maincomp2.component';
import { Maincomp3Component } from './maincomp3/maincomp3.component';
import { Maincomp4Component } from './maincomp4/maincomp4.component';
import { Maincomp5Component } from './maincomp5/maincomp5.component';
import { Maincomp6Component } from './maincomp6/maincomp6.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Maincomp1Component,
    Maincomp2Component,
    Maincomp3Component,
    Maincomp4Component,
    Maincomp5Component,
    Maincomp6Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [Maincomp1Component]
})
export class MainModule { }
