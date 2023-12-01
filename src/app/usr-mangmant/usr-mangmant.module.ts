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
import { BillsComponent } from './bills/bills.component';
import { TableModule } from 'primeng/table';
import { ContextMenuModule } from 'primeng/contextmenu';



@NgModule({
  declarations: [
    HomepadgComponent,
    MortgagorComponent,
    CreditorComponent,
    DataEnterComponent,
    BillsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    ButtonModule,
    InputNumberModule ,
    TableModule,
    ContextMenuModule
  ]
})
export class UsrMangmantModule { }
