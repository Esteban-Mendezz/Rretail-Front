import { Component, OnInit } from '@angular/core';
import { Services } from '../models/services';
import { FormControl, FormGroup } from '@angular/forms';
import { listService } from './../services/listServices.service'; // Importa el servicio que obtiene los servicios del json
import { SelectedServiceService } from '../services/selected-service.service'; // Importa el servicio que guarda y obtiene el servicio seleccionado
import { Router } from '@angular/router'; // Importa el router para navegar al otro componente

@Component({
    selector: 'app-list-services',
    templateUrl: './list-services.component.html',
    styleUrls: ['./list-services.component.css']
})

export class ListServicesComponent implements OnInit{
    services!: Services[];
    ratings: number[] = [];
    categories: any[] | undefined;
    selectedCategory: any;
    formGroup: FormGroup;

    constructor(private productsServices: listService, private selectedServiceService: SelectedServiceService, private router: Router) {
        this.formGroup = new FormGroup({
            selectedCategory: new FormControl<object | null>(null)
        });
     }

    ngOnInit() {
        this.productsServices.getlistServices().then(services => {
            this.services = services;
        })

        this.categories = [
            {
                name: 'Electrónicos',
                code: 'ELE',
                subCategories: [
                    { name: 'Computadoras' },
                    { name: 'Teléfonos móviles' },
                    { name: 'Televisores' },
                    { name: 'Cámaras' },
                    { name: 'Audio' }
                ]
            },
            {
                name: 'Ropa',
                code: 'ROP',
                subCategories: [
                    { name: 'Camisetas' },
                    { name: 'Pantalones' },
                    { name: 'Zapatos' },
                    { name: 'Vestidos' },
                    { name: 'Accesorios' }
                ]
            },
            {
                name: 'Alimentos',
                code: 'ALI',
                subCategories: [
                    { name: 'Frutas' },
                    { name: 'Verduras' },
                    { name: 'Carnes' },
                    { name: 'Pescados' },
                    { name: 'Lácteos' }
                ]
            }
        ];

    }

    // Este método se ejecuta cuando se hace click en un servicio del carousel
    selectService(service: any) {
      // Llama al método del servicio para guardar el servicio seleccionado
      this.selectedServiceService.setSelectedService(service);
      // Navega al otro componente
      this.router.navigate(['/detalleService']);
    }
}
