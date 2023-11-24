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
@NgModule({
  declarations: [
    AppComponent
  ],
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
    InputTextModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
