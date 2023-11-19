import { UsersService } from './../../services/users.service';
    import { Component, inject } from '@angular/core';
    import { FormControl, FormGroup } from '@angular/forms';

    @Component({
      selector: 'app-register',
      templateUrl: './register.component.html',
      styleUrls: ['./register.component.css']
    })
    export class RegisterComponent {
      formulario: FormGroup;
      userService = inject(UsersService);
      userTypes = [ 'Provider', 'Customer'];
      selectedType = 'Customer';

      constructor() {
        this.formulario = this.getUserForm();
      }

      getUserForm() {
        return new FormGroup({
          userType: new FormControl(this.userTypes[1]),
          userName: new FormControl(''),
          password: new FormControl(''),
          email: new FormControl(''),
          cellphone: new FormControl(''),
          address: new FormControl(''),
          // Provider fields
          social_reason: new FormControl(''),
          person_type: new FormControl(''),
          nit: new FormControl(''),
          // Customer fields
          name: new FormControl(''),
          lastname: new FormControl(''),
          document_type: new FormControl(''),
          document_number: new FormControl(''),
          
        });
      }

      onTypeChange(event: any) {
        this.selectedType = (event.target as HTMLSelectElement).value;
        this.formulario.controls['userType'].setValue(this.selectedType);
      }
      
      
      
      

      async onSubmit() {
     const response =  await  this.userService.register(this.formulario.value);
     console.log(response);
     }
    }
