import { Component, OnInit } from '@angular/core';
import { Company } from '../company/company';
import { CompanyService } from '../company/company.service';
import { EmployeeService } from '../employee/employee.service';
import { Employee } from '../employee/employee';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { catchError, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
   company : Company;
   employees : Employee[];

   constructor(
      private route : ActivatedRoute,
      private companyService : CompanyService,
      private location : Location,
      private employeeService : EmployeeService
   ) { }

   ngOnInit(): void {
      this.getCompany()
      this.getEmployees()
   }

   getCompany() : void {
      const id = +this.route.snapshot.paramMap.get('id')
      this.companyService.getCompany(id)
         .subscribe(
            company => {
               this.company = company
               console.log(company)
            },
            err => { console.error(err.message) },
            () =>  { console.log('ok') }
         )
   }

   getEmployees() : void {
      const id = +this.route.snapshot.paramMap.get('id')
      const obs = this.employeeService.getEmployees()
         .pipe(
            map(employees => employees.filter(employee => employee["company_id"] === id ))
         )

      obs.subscribe(employees => this.employees = employees)
   }

   goBack() : void {
      this.location.back();
   }

}
