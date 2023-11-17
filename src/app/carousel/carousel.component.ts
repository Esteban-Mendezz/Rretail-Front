import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Carousel } from 'src/app/models/carouselList';
import { CarouselService } from 'src/app/services/carousel.service';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  carousel!: Carousel[];
  selectedIndex = 1;
  @ViewChild('carousel', { static: false }) carouselElement: ElementRef | undefined;

  constructor(private carouselServices: CarouselService) { }

  ngOnInit() {
    this.carouselServices.getCarousel().then(carousel => {
      this.carousel = carousel;
    });
  }

  ngAfterViewInit() {
    if (this.carouselElement) {
      let hammertime = new Hammer(this.carouselElement.nativeElement);

      hammertime.on('swipeleft', () => {
        this.showNext(this.selectedIndex);
      });

      hammertime.on('swiperight', () => {
        this.showPrev(this.selectedIndex);
      });
    }
  }

  showNext(i: number) {
    if (i < this.carousel.length - 1) {
      this.selectedIndex = i + 1;
    } else {
      this.selectedIndex = 0;
    }
  }
  
  showPrev(i: number) {
    if (i > 0) {
      this.selectedIndex = i - 1;
    } else {
      this.selectedIndex = this.carousel.length - 1; 
    }
  }
}
