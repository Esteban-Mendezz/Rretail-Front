import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/';

  // Observable para notificar cambios en el estado de autenticación
  private isLoggedInSubject = new Subject<boolean>();
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };

    return this.http.post<any>(`${this.apiUrl}login`, body, { observe: 'response' })
      .pipe(
        tap(response => {

          localStorage.setItem('token', response.body.token);
          localStorage.setItem('user', JSON.stringify(response.body.user));

          this.isLoggedInSubject.next(true);
        })
      );
  }

  logout(): void {

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    this.isLoggedInSubject.next(false);
  }
}

