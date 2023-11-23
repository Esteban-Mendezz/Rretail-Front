import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private authService: AuthService) {}

  onSubmit(){
    this.authService.login(this.loginFormulario.value.username, this.loginFormulario.value.password).subscribe(
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
