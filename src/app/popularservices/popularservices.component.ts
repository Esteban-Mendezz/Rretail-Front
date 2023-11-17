
import { Component, OnInit } from '@angular/core';
import { Services } from '../models/services';
import { popularService } from './../services/popularServices.service';




@Component({
  selector: 'app-popular-services',
  templateUrl: './popularservices.component.html',
  styleUrls: ['./popularservices.component.css']
})
export class PopularservicesComponent implements OnInit {
  services!: Services[];
  ratings: number[] = [];

  constructor(private popularServices: popularService) { }

  ngOnInit() {
    this.popularServices.getpopularServices().then(services => {
      this.services = services;

    })
  }
}
