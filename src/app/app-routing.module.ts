
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './login/register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PanelServicesComponent } from './panel-services/panel-services.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'body', component: BodyComponent },
  { path: '', redirectTo: '/body', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: UserProfileComponent },
  { path: 'services', component: PanelServicesComponent },

  { path: '**', redirectTo: '/body' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
