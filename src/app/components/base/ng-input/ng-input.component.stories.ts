import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { NgInputComponent } from './ng-input.component';

import { PLANTILLA_HTML } from "../../../constans/storybook.constant";
import { APP_PREFIX } from '../../../constans/app.constant';

const TITULO = `NG-INPUT`;

const SUMMARY = `
    El componente <strong>NG-INPUT</strong> representa un input de la aplicación, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><strong>label</strong>: Etiqueta superior del input</li>
    <li><strong>placeholder</strong>: Placeholder del input</li>
    <li><strong>invalid</strong>: Validador del input</li>
    <li><strong>disabled</strong>: Desabilita el input</li>
`;

const COMPONENT_NORMAL = `
<div style="width: 300px;">
    <ng-input [label]="label" [placeholder]="placeholder" [invalid]="invalid" [disabled]="disabled"></ng-input>
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
    title: 'Components-Base/NgInput',
    component: NgInputComponent,
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
    label: "NOMBRE",
    placeholder: 'Escriba un texto'
};

export const Invalid = Template.bind({});
Invalid.args = {
    APP_PREFIX,
    label: "NOMBRE",
    placeholder: 'Escriba un texto',
    invalid: true
};

export const Disabled = Template.bind({});
Disabled.args = {
    APP_PREFIX,
    label: "NOMBRE",
    placeholder: 'Escriba un texto',
    disabled: true
};