import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Employee } from './employee';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   private employeeUrl = `${environment.serverUrl}/employees`;

   constructor(
      private http : HttpClient,
   ) { }

   getEmployees() : Observable<Employee[]> {
      return this.http.get<Employee[]>(this.employeeUrl)
         .pipe(
            catchError(this.handleError<Employee[]>('getEmployees',[]))
         )
   }

   getEmployee(id : number) : Observable<Employee> {
      const url = `${this.employeeUrl}/${id}`
      return this.http.get<Employee>(url)
         .pipe(
            catchError(this.handleError<Employee>('getEmployee'))
         )
   }

   private handleError<T>(operation = 'operation',result?: T) {
      return (error: any): Observable<T> => {
         console.error(`${operation}: `,error.message)

         return of(result as T)
      }
   }
}
