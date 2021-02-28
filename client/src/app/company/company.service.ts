import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Company } from './company';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
   private companyUrl = `${environment.serverUrl}/companies`;

   constructor(
      private http: HttpClient
   ) { }

   getCompanies() : Observable<Company[]> {
      return this.http.get<Company[]>(this.companyUrl)
         .pipe(
            catchError(this.handleError<Company[]>('getCompanies',[]))
         )
   }

   getCompany(id : number) : Observable<Company> {
      const url = `${this.companyUrl}/${id}`
      return this.http.get<Company>(url)
         .pipe(
            catchError(this.handleError<Company>('getCompanies'))
         )
   }


   private handleError<T>(operation = 'operation',result?: T) {
      return (error: any): Observable<T> => {
         console.error(`${operation}: `,error.message)

         return of(result as T)
      }
   }

}
