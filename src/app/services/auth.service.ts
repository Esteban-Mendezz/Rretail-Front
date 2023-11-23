import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth/';

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string): Observable<any> {

    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,observe',
      'Access-Control-Allow-Credentials': 'true'
    };

    console.log(username);

    const body = {
      username,
      password
    };

    return this.http.post(`${this.apiUrl}login`, body, { headers: headers });
  }
}
