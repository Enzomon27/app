import { Component, OnInit } from '@angular/core';
import { Company } from '../company/company';
import { CompanyService } from '../company/company.service';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
   
   company : Company;

   constructor(
      private route : ActivatedRoute,
      private companyService : CompanyService,
      private location : Location
   ) { }

   ngOnInit(): void {
      this.getCompany()
   }

   getCompany() : void {
      const id = +this.route.snapshot.paramMap.get('id')
      this.companyService.getCompany(id)
         .subscribe(company => {
            this.company = company
         })
   }

   goBack() : void {
      this.location.back();
   }
}
