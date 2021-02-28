import { Component, OnInit } from '@angular/core';
import { Company } from '../company/company';
import { CompanyService } from '../company/company.service';
import { EmployeeService } from '../employee/employee.service';
import { Employee } from '../employee/employee';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Observable, of, concat } from 'rxjs';
import { catchError, map, filter, concatMap, tap } from 'rxjs/operators';

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
      this.getEmployeesAndFilter()
   }

   getCompany() : void {
      const id = +this.route.snapshot.paramMap.get('id')
      this.companyService.getCompany(id)
         .subscribe(company => {
            this.company = company
         })
   }

   getEmployeesAndFilter() : void {
      this.employeeService.getEmployees()
         .subscribe(async employees => {
            const filters = await Promise.all(employees.filter(emp => {
               if(emp["company_id"] === this.company.id) {
                  return emp
               }
            }))

            this.employees = filters
         })
   }

   goBack() : void {
      this.location.back();
   }
}
