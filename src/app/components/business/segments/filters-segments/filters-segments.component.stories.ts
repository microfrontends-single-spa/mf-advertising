import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { FiltersSegmentsComponent } from './filters-segments.component';

import { PLANTILLA_HTML } from "../../../../constans/storybook.constant";
import { APP_PREFIX } from '../../../../constans/app.constant';
import { BaseAppModule } from 'src/app/components/base/base-app.module';
import { CommonAppModule } from 'src/app/components/common/common-app.module';
import { CommonDirAppModule } from 'src/app/directives/common/common-dir-app.module';
import { FilterListComponent } from './filter-list/filter-list.component';

const TITULO = `FILTERS-SEGMENTS`;

const SUMMARY = `
    El componente <strong>FILTERS-SEGMENTS</strong> presenta filtros para segmentar la cantidad de clientes, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
`;

const COMPONENT_NORMAL = `
<div style="width: 100%">
    <filters-segments></filters-segments>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-25][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Segments/FilterSegments',
    component: FiltersSegmentsComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                FilterListComponent
            ],
            imports: [
                CommonModule,
                BaseAppModule,
                CommonAppModule,
                CommonDirAppModule
            ]
        }),
        componentWrapperDecorator(story => {
            return PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_NORMAL}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`);
        }),
    ]
} as Meta;

const Template: Story = (args) => ({
    props: args
})

export const Base = Template.bind({});
Base.args = {
    APP_PREFIX,
    categories: [
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
    ],
    stores: [
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
    ],
    products: [
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
    ],
    plans: [
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
    ]
};