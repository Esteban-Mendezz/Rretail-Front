import { listService } from './../services/listServices.service';
import { Component,OnInit } from '@angular/core';
import { Services } from '../models/services';
import { FormControl, FormGroup } from '@angular/forms';

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

    constructor(private productsServices: listService) {
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
}
