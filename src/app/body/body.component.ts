import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/models/carouselList';
import { CarouselService } from 'src/app/services/carousel.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  carousel!: Carousel[];

  constructor(private carouselServices: CarouselService) { }
  ngOnInit() {
    this.carouselServices.getCarousel().then(carousel => {
      this.carousel = carousel;
    })
  }
  
}
