import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth/';

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string): Observable<any> {

    const body = {
      username,
      password
    };

    return this.http.post<any>(`${this.apiUrl}login`, body, { observe: 'response' })
    .pipe(
      tap((response: HttpResponse<any>) => {
        const headers = response.headers;
        headers.keys().forEach(key => {
          const value = headers.get(key);
          console.log(`Header: ${key}, Value: ${value}`);
        });
      })
    );
  }
}
