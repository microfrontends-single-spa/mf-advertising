import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { HeaderDescriptionComponent } from './header-description.component';

import { PLANTILLA_HTML } from "../../../constans/storybook.constant";
import { APP_PREFIX } from '../../../constans/app.constant';
import { BaseAppModule } from '../../base/base-app.module';

const TITULO = `HEADER-DESCRIPTION`;

const SUMMARY = `
    El componente <strong>HEADER-DESCRIPTION</strong> presenta una descripcion general del módulo donde el usuario ingreso, en él se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><strong>title</strong>: Titulo del módulo</li>
    <li><strong>description</strong>: Descripción del módulo</li>
`;

const COMPONENT_NORMAL = `
<div style="width: 500px;">
    <header-description [title]="title" [description]="description"></header-description>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-25][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Common/HeaderDescription',
    component: HeaderDescriptionComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                BaseAppModule
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
    title: 'Segmentos',
    description: 'Segmentación de clientes para el envio de publicidad'
};