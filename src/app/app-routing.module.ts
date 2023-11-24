import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepadgComponent } from './usr-mangmant/homepadg/homepadg.component';
import { CreditorComponent } from './usr-mangmant/creditor/creditor.component';
import { MortgagorComponent } from './usr-mangmant/mortgagor/mortgagor.component';
import { DataEnterComponent } from './usr-mangmant/data-enter/data-enter.component';

const routes: Routes = [
  { path: 'Home', component: HomepadgComponent},
  { path: 'credit', component: CreditorComponent},
  { path: 'Debit', component: MortgagorComponent},
  { path: 'dataentr', component: DataEnterComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
