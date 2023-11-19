import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './login/register/register.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'body', component: BodyComponent },
  { path: '', redirectTo: '/body', pathMatch: 'full' }, // redirige a '/body' por defecto
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/body' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }