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
import { AuthGuardService } from './services/auth-guard.service';
import { ProductlistComponent } from './component/product/productlist/productlist.component';
import { ModelsComponent } from './component/product/models/models.component';
import { CreateproductComponent } from './component/product/createproduct/createproduct.component';
import { ServicesService } from './component/product/service/services.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpErrorHandler } from './component/product/service/http-error-handler.services';
import { MessageService } from './component/product/service/message.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProductlistComponent,
    ModelsComponent,
    CreateproductComponent,
   ],
  imports: [BrowserModule, AppRoutingModule, 
    FormsModule, ReactiveFormsModule, HttpClientModule,
    NgxPaginationModule,


],
  providers: [AuthGuardService, ServicesService,
  MessageService,HttpErrorHandler,

],
  bootstrap: [AppComponent]
})
export class AppModule { }
