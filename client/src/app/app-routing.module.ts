import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

const routes: Routes = [
   { path : '', redirectTo : '/dashboard', pathMatch : 'full' },
   { path : 'dashboard', component : DashboardComponent },
   { path : 'companies', component : CompanyComponent },
   { path : 'employees', component : EmployeeComponent },
   { path : 'companies/detail/:id', component : CompanyDetailComponent },
   { path : 'employees/detail/:id', component : EmployeeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
