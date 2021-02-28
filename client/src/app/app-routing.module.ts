import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from './company/company.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

const routes: Routes = [
   { path : '', redirectTo : '/companies', pathMatch : 'full' },
   { path : 'companies/detail/:id', component : CompanyDetailComponent },
   { path : 'companies', component : CompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
