import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/models/carouselList';
import { CarouselService } from 'src/app/services/carousel.service';



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  carousel!: Carousel[];


  constructor(private carouselServices: CarouselService) { }

  ngOnInit() {
    this.carouselServices.getCarousel().then(carousel => {
      this.carousel = carousel;
    })
  }
}
