import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { NgButtonComponent } from './ng-button.component';

import { PLANTILLA_HTML } from "../../../constans/storybook.constant";
import { APP_PREFIX } from '../../../constans/app.constant';

const TITULO = `NG-BUTTON`;

const SUMMARY = `
    El componente <strong>NG-BUTTON</strong> representa un botón de la aplicación, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><strong>type</strong>: Tipo de botón</li>
`;

const COMPONENT_NORMAL = `
<div style="width: 200px;">
    <ng-button [type]="type" (btnClick)="btnClick($event)">Button</ng-button>
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
    title: 'Components-Base/NgButton',
    component: NgButtonComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [CommonModule]
        }),
        componentWrapperDecorator(story => {
            return PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_NORMAL}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`);
        }),
    ]
} as Meta;

const Template: Story = (args) => ({
    props: args
})

export const Normal = Template.bind({});
Normal.args = {
    APP_PREFIX,
    type: 'normal'
};

export const Success = Template.bind({});
Success.args = {
    APP_PREFIX,
    type: 'success'
};

export const Error = Template.bind({});
Error.args = {
    APP_PREFIX,
    type: 'error'
};