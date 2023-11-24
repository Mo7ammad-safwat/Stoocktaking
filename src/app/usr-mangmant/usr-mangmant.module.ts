import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepadgComponent } from './homepadg/homepadg.component';
import { CoreModule } from '../core/core.module';
import { MortgagorComponent } from './mortgagor/mortgagor.component';
import { CreditorComponent } from './creditor/creditor.component';
import { DataEnterComponent } from './data-enter/data-enter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [
    HomepadgComponent,
    MortgagorComponent,
    CreditorComponent,
    DataEnterComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    ButtonModule,
    InputNumberModule 
  ]
})
export class UsrMangmantModule { }
