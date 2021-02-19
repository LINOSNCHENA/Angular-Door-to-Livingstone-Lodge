import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { WorkersComponent } from './component/data/workers/workers.component';
import { EmployeesComponent } from './component/data/employees/employees.component';
import { BookingsComponent } from './component/data/bookings/bookings.component';
import { HttpErrorHandler } from './servicesUnprotected/serviceApi/http-error-handler.services';
import { MessageService } from './servicesUnprotected/serviceApi/message.service';
import { AuthGuardService } from './servicesProtected/auth-guard.service';

import { BkgserviceService } from './servicesUnprotected/serviceApi/bkgservice.service';
import { EmpserviceService } from './servicesUnprotected/serviceApi/empservice.service';
import { WrkserviceService } from './servicesUnprotected/serviceApi/wrkservice.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    BookingsComponent,
    WorkersComponent,
    EmployeesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [AuthGuardService,
    MessageService, HttpErrorHandler, 
    BkgserviceService,EmpserviceService, WrkserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
