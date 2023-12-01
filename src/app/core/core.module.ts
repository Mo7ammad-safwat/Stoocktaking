import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HedarComponent } from './hedar/hedar.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
  declarations: [
    HedarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    InputNumberModule,
    CardModule,
    MenubarModule,
    MenuModule,
    ContextMenuModule,
    SelectButtonModule,
    ToolbarModule 
  ],
  exports: [
    HedarComponent
  ]
})
export class CoreModule { }
