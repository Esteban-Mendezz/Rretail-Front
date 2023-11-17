import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Services } from '../models/services';
@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  constructor(private http: HttpClient) { }

  getCountdown(endDate: Date): Observable<string> {
    return interval(1000).pipe(
      map(() => {
        const now = new Date();
        const distance = endDate.getTime() - now.getTime();

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return ` ${hours}: ${minutes}:${seconds}`;
      })
    );
  }

  getDeals() {
    return this.http.get<any>('assets/program-config/deals.json')
      .toPromise()
      .then(res => res as Services[]);
  }
}
