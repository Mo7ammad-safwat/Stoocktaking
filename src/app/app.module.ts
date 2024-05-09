import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UsrMangmantModule } from './usr-mangmant/usr-mangmant.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ContextMenuModule } from 'primeng/contextmenu';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { TreeTableModule } from 'primeng/treetable';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollerModule } from 'primeng/scroller';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { PanelModule } from 'primeng/panel';
import { OrderByPipe } from './sherde/order-by.pipe';
import { TagModule } from 'primeng/tag';


@NgModule({
  declarations: [AppComponent, OrderByPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UsrMangmantModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    InputNumberModule,
    CardModule,
    InputTextModule,
    MenubarModule,
    MenuModule,
    ContextMenuModule,
    SelectButtonModule,
    ToolbarModule,
    TableModule,
    TriStateCheckboxModule,
    TreeTableModule,
    ScrollerModule,
    ScrollPanelModule,
    ConfirmPopupModule,
    PanelModule,
    TagModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
