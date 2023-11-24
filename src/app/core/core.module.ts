import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HedarComponent } from './hedar/hedar.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HedarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HedarComponent
  ]
})
export class CoreModule { }
