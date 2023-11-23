import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedServiceService {

  private selectedService: any;

  constructor() { }

 
  setSelectedService(service: any) {
    this.selectedService = service;
  }


  getSelectedService() {
    return this.selectedService;
  }
}
