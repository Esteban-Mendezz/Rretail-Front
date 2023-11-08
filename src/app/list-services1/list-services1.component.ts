import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Services } from '../models/services';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-list-services1',
    templateUrl: './list-services1.component.html',
    styleUrls: ['./list-services1.component.css']
})
export class ListServices1Component implements OnInit {
    services!: Services[];
    responsiveOptions: any[] | undefined;
    categories: any[] | undefined;

    selectedCategory: any;

    formGroup: FormGroup;

    constructor(private productsServices: ProductsService) {
        this.formGroup = new FormGroup({
            selectedCategory: new FormControl<object | null>(null)
        });
    }

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
