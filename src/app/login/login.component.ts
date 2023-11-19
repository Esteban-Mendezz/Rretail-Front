import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  formulario: FormGroup;
 
  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit(){
    
  }
  ngOnInit(): void {
    initFlowbite();
  }
}
