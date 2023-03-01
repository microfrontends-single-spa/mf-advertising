import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { NgCardComponent } from './ng-card.component';

import { PLANTILLA_HTML } from "../../../constans/storybook.constant";
import { APP_PREFIX } from '../../../constans/app.constant';

const TITULO = `NG-CARD`;

const SUMMARY = `
    El componente <strong>NG-CARD</strong> representa un card de la aplicación, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><strong>title</strong>: Título del card</li>
    <li><strong>showSwitch</strong>: Flag para mostrar u ocultar el componente chat</li>
`;

const COMPONENT_BASE = `
<div style="width: 75%;">
    <ng-card [title]="title" [showSwitch]="showSwitch">
    <p style="text-align: justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </ng-card>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-25][Luis Amat] Creación del componente</span>
`;

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Components-Base/NgCard',
    component: NgCardComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule]
        }),
        componentWrapperDecorator(story => {
            return PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_BASE}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`);
        }),
    ]
} as Meta;

const Template: Story = (args) => ({
    props: args
})

export const Base = Template.bind({});
Base.args = {
    APP_PREFIX,
    title: 'Porcentaje de clientes según estado'
};

export const WithSwitch = Template.bind({});
WithSwitch.args = {
    APP_PREFIX,
    title: 'Porcentaje de clientes según estado',
    showSwitch: true
};