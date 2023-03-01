import { Component } from "@angular/core";

import { APP_PREFIX } from '../../../../constans/app.constant';

@Component({
    selector: 'filters-segments',
    templateUrl: './filters-segments.component.html',
    styleUrls: ['./filters-segments.component.scss']
})
export class FiltersSegmentsComponent {
    APP_PREFIX = APP_PREFIX;

    categories = [
        {
            "id": 1,
            "description": "Categoria 1"
        },
        {
            "id": 2,
            "description": "Categoria 2"
        },
        {
            "id": 3,
            "description": "Categoria 3"
        },
        {
            "id": 4,
            "description": "Categoria 4"
        },
        {
            "id": 5,
            "description": "Categoria 5"
        }
    ];

    stores = [
        {
            "id": 1,
            "description": "Tienda 1"
        },
        {
            "id": 2,
            "description": "Tienda 2"
        },
        {
            "id": 3,
            "description": "Tienda 3"
        },
        {
            "id": 4,
            "description": "Tienda 4"
        },
        {
            "id": 5,
            "description": "Tienda 5"
        }
    ];

    products = [
        {
            "id": 1,
            "description": "Producto 1"
        },
        {
            "id": 2,
            "description": "Producto 2"
        },
        {
            "id": 3,
            "description": "Producto 3"
        },
        {
            "id": 4,
            "description": "Producto 4"
        },
        {
            "id": 5,
            "description": "Producto 5"
        }
    ];

    plans = [
        {
            "id": 1,
            "description": "Completo"
        },
        {
            "id": 2,
            "description": "Normal"
        },
        {
            "id": 3,
            "description": "Básico"
        }
    ];
}