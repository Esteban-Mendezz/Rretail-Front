import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  datosFormulario = {
    userName: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  submitForm(formulario: NgForm){

    this.authService.login(this.datosFormulario.userName, this.datosFormulario.password).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
