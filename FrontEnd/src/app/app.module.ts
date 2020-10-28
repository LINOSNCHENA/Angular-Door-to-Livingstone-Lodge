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
import { HttpErrorHandler } from './component/datasources/serviceApi/http-error-handler.services';
import { MessageService } from './component/datasources/serviceApi/message.service';
import { AuthGuardService } from './servicesUtilities/auth-guard.service';

import { BkgserviceService } from './component/datasources/serviceApi/bkgservice.service';
import { EmpserviceService } from './component/datasources/serviceApi/empservice.service';
import { WrkserviceService } from './component/datasources/serviceApi/wrkservice.service';

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
