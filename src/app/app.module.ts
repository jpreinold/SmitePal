import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiHttpService } from './api-http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
