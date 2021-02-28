import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
   selector: 'app-employee',
   templateUrl: './employee.component.html',
   styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
   employees : Employee[];

   constructor(private employeeService: EmployeeService) { }

   ngOnInit(): void {
      this.getEmployees();
   }

   getEmployees() : void {
      this.employeeService.getEmployees()
         .subscribe(employees => {
            this.employees = employees
         })
   }

}
