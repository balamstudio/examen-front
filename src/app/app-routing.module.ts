import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignComponent } from './sign/sign.component';
import { HospitalComponent } from './hospital/hospital.component';
import { InversoComponent } from './inverso/inverso.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: 'inicio', component: HomeComponent },
  { path: 'hospital', component: HospitalComponent, canActivate: [AuthGuard] },
  { path: 'inverso', component: InversoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SignComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
