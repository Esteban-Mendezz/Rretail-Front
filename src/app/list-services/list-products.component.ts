import { Component } from '@angular/core';
import  { ProductsService } from '../services/products.service';
import { Services } from '../models/services';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent {
  services!: Services[];
  responsiveOptions: any[] | undefined;
  ratings: number[] = [];
  countries: any[] | undefined;

  selectedCity: any;

  formGroup: FormGroup | undefined;

  constructor(private productsServices: ProductsService) { }

  ngOnInit() {
    this.productsServices.getServices().then(services => {
      this.services = services;

  
    })


    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
    ];

    this.formGroup = new FormGroup({
      selectedCity: new FormControl<object | null>(null)
  });

  this.countries = [
      {
          name: 'Australia',
          code: 'AU',
          states: [
              {
                  name: 'New South Wales',
                  cities: [
                      { cname: 'Sydney', code: 'A-SY' },
                      { cname: 'Newcastle', code: 'A-NE' },
                      { cname: 'Wollongong', code: 'A-WO' }
                  ]
              },
              {
                  name: 'Queensland',
                  cities: [
                      { cname: 'Brisbane', code: 'A-BR' },
                      { cname: 'Townsville', code: 'A-TO' }
                  ]
              }
          ]
      },
      {
          name: 'Canada',
          code: 'CA',
          states: [
              {
                  name: 'Quebec',
                  cities: [
                      { cname: 'Montreal', code: 'C-MO' },
                      { cname: 'Quebec City', code: 'C-QU' }
                  ]
              },
              {
                  name: 'Ontario',
                  cities: [
                      { cname: 'Ottawa', code: 'C-OT' },
                      { cname: 'Toronto', code: 'C-TO' }
                  ]
              }
          ]
      },
      {
          name: 'United States',
          code: 'US',
          states: [
              {
                  name: 'California',
                  cities: [
                      { cname: 'Los Angeles', code: 'US-LA' },
                      { cname: 'San Diego', code: 'US-SD' },
                      { cname: 'San Francisco', code: 'US-SF' }
                  ]
              },
              {
                  name: 'Florida',
                  cities: [
                      { cname: 'Jacksonville', code: 'US-JA' },
                      { cname: 'Miami', code: 'US-MI' },
                      { cname: 'Tampa', code: 'US-TA' },
                      { cname: 'Orlando', code: 'US-OR' }
                  ]
              },
              {
                  name: 'Texas',
                  cities: [
                      { cname: 'Austin', code: 'US-AU' },
                      { cname: 'Dallas', code: 'US-DA' },
                      { cname: 'Houston', code: 'US-HO' }
                  ]
              }
          ]
      }
  ];

  }
}
