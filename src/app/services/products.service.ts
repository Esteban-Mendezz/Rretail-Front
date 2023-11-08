import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Services } from '../models/services';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getServices() {
    return this.http.get<any>('assets/program-config/services.json')
      .toPromise()
      .then(res => res as Services[]);
  }
}
