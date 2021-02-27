import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Company } from './company';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
   private companyUrl = `${environment.serverUrl}/companies`;

   constructor(private http: HttpClient) { }

   getCompanies() : Observable<any> {
      return this.http.get<any>(this.companyUrl)
         .pipe(
         )
   }

}
