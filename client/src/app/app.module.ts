import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    CompanyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
