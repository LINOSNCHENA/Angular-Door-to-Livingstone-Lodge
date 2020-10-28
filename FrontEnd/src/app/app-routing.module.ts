import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookingsComponent } from './component/data/bookings/bookings.component';
import { EmployeesComponent } from './component/data/employees/employees.component';
import { WorkersComponent } from './component/data/workers/workers.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AuthGuardService as AuthGuard } from "./servicesUtilities/auth-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "bookings", component: BookingsComponent},
  { path: "employees", component: EmployeesComponent},
  { path: "workers", component: WorkersComponent},
  { path: "dashboard",  component: DashboardComponent,    canActivate: [AuthGuard],  },
  { path: "**", redirectTo: "/login", pathMatch: "full" },];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
