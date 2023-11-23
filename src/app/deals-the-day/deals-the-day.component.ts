import { Carousel } from './../models/carouselList';
  import { Component, OnInit } from '@angular/core';
  import { CountdownService } from '../services/count-down.service';
  import { Subscription } from 'rxjs';
  import { Services } from '../models/services';

  @Component({
    selector: 'app-deals-the-day',
    templateUrl: './deals-the-day.component.html',
    styleUrls: ['./deals-the-day.component.css']
  })
  export class DealsTheDayComponent implements OnInit {
    countdown: string = '';
    services!: Services[];
    private countdownSubscription: Subscription = new Subscription();

    constructor(private countdownService: CountdownService) { }

    ngOnInit(): void {
      const endDate = new Date('2023-11-24T00:00:00');
      // Cambia a esta fecha
      this.countdownSubscription = this.countdownService.getCountdown(endDate).subscribe(
        countdown => this.countdown = countdown
      );

    this.countdownService.getDeals().then(carousel => {
      this.services = carousel;
    });
    }

    ngOnDestroy(): void {
      if (this.countdownSubscription) {
        this.countdownSubscription.unsubscribe();
      }
    }
  }
