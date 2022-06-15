import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sharedcomp1Component } from './sharedcomp1/sharedcomp1.component';
import { Sharedcomp2Component } from './sharedcomp2/sharedcomp2.component';
import { Sharedcomp3Component } from './sharedcomp3/sharedcomp3.component';
import { Sharedcomp4Component } from './sharedcomp4/sharedcomp4.component';
import { Sharedcomp5Component } from './sharedcomp5/sharedcomp5.component';
import { Sharedcomp6Component } from './sharedcomp6/sharedcomp6.component';



@NgModule({
  declarations: [
    // Sharedcomp1Component,
    Sharedcomp2Component,
    Sharedcomp3Component,
    Sharedcomp4Component,
    Sharedcomp5Component,
    Sharedcomp6Component
  ],
  imports: [
    CommonModule
  ],
  // exports: [Sharedcomp1Component]
})
export class SharedModule { }
