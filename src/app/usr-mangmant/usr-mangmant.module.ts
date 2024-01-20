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
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TreeTableModule } from 'primeng/treetable';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollerModule } from 'primeng/scroller';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { PanelModule } from 'primeng/panel';
import { OrderByPipe } from '../sherde/order-by.pipe';


@NgModule({
  declarations: [
    HomepadgComponent,
    MortgagorComponent,
    CreditorComponent,
    DataEnterComponent,
    BillsComponent,
   
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    ButtonModule,
    InputNumberModule,
    TableModule,
    ContextMenuModule,
    TreeTableModule,
    TriStateCheckboxModule,
    ScrollPanelModule,
    ScrollerModule,
    ConfirmPopupModule,
    PanelModule,
  ],
})
export class UsrMangmantModule {}
