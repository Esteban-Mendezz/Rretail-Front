import { register } from 'swiper/element/bundle';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 private httpClient = inject(HttpClient);
 private baseUrl:string;

  constructor() { 
this.baseUrl='http//localhost:3000/api/customer';
  }
  register(formValue:any){
    return firstValueFrom(
      this.httpClient.post<any>('${this.baseUrl}/save',formValue)
    )
  }
}
