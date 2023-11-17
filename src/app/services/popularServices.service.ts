import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Services } from '../models/services';


@Injectable({
  providedIn: 'root'
})
export class popularService {

  constructor(private http: HttpClient) { }

  getpopularServices() {
    return this.http.get<any>('assets/program-config/popularServices.json')
      .toPromise()
      .then(res => res as Services[]);
  }
}
