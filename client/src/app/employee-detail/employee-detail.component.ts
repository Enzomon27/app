import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
   employee : Employee;

   constructor(
      private route: ActivatedRoute,
      private employeeService: EmployeeService,
      private location: Location
   ) { }

  ngOnInit(): void {
     this.getEmployee()
  }

  getEmployee() : void {
     const id = +this.route.snapshot.paramMap.get('id');
     this.employeeService.getEmployee(id)
      .subscribe(employee => this.employee = employee)
  }

  goBack() : void {
     this.location.back()
  }
}
