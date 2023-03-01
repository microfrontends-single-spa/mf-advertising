import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { FilterListComponent } from './filter-list.component';

import { PLANTILLA_HTML } from "../../../../../constans/storybook.constant";
import { APP_PREFIX } from '../../../../../constans/app.constant';
import { BaseAppModule } from 'src/app/components/base/base-app.module';
import { CommonAppModule } from 'src/app/components/common/common-app.module';
import { CommonDirAppModule } from 'src/app/directives/common/common-dir-app.module';

const TITULO = `FILTER-LIST`;

const SUMMARY = `
    El componente <strong>FILTER-LIST</strong> presenta un filtro en lista para segmentar la cantidad de clientes, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
`;

const COMPONENT_NORMAL = `
<div style="width: 300px">
    <ng-card title="Categoría">
        <filter-list [datasource]="datasource"></filter-list>
    </ng-card>    
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-25][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Segments/FilterSegments/FilterList',
    component: FilterListComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                BaseAppModule,
                CommonAppModule,
                CommonDirAppModule
            ]
        }),
        componentWrapperDecorator(story => {
            console.log(story);
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
    datasource: [
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
    ]
};