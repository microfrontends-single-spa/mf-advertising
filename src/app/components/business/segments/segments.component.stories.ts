import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { SegmentsComponent } from './segments.component';

import { PLANTILLA_HTML } from "../../../constans/storybook.constant";
import { APP_PREFIX } from '../../../constans/app.constant';
import { BaseAppModule } from 'src/app/components/base/base-app.module';
import { CommonAppModule } from 'src/app/components/common/common-app.module';
import { CommonDirAppModule } from 'src/app/directives/common/common-dir-app.module';
import { FiltersSegmentsComponent } from './filters-segments/filters-segments.component';
import { GeneralDataComponent } from './general-data/general-data.component';
import { PercentageClientsComponent } from './percentage-clients/percentage-clients.component';
import { GridSegmentsComponent } from './grid-segments/grid-segments.component';
import { FilterListComponent } from './filters-segments/filter-list/filter-list.component';

const TITULO = `SEGMENTS`;

const SUMMARY = `
    El componente <strong>SEGMENTS</strong> presenta información y los filtros para segmentar los clientes para el envío de publicidad por whatsapp, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
`;

const COMPONENT_NORMAL = `
<div>
    <segments></segments>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-25][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Segments',
    component: SegmentsComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                FilterListComponent,
                FiltersSegmentsComponent,
                GeneralDataComponent,
                PercentageClientsComponent,
                GridSegmentsComponent
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
    APP_PREFIX
};