import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Services } from '../models/services';


@Injectable({
  providedIn: 'root'
})
export class listService {

  constructor(private http: HttpClient) { }

  getlistServices() {
    return this.http.get<any>('assets/program-config/services.json')
      .toPromise()
      .then(res => res as Services[]);
  }
}
