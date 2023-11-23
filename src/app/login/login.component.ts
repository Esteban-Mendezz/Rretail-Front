import { HttpResponse } from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  datosFormulario = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  submitForm(formulario: NgForm){

    const datosFormulario = formulario.form.value;

    this.authService.login(datosFormulario.userName, datosFormulario.password).subscribe(
      (response: HttpResponse<any>) => {
        this.router.navigate(['/body']);
      }
    );
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
