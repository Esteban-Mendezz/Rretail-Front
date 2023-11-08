import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carousel } from 'src/app/models/carouselList';
@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient) { }

  getCarousel() {
    return this.http.get<any>('assets/program-config/carousel.json')
      .toPromise()
      .then(res => res as Carousel[]);
  }

}
