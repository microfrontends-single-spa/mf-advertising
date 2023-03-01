import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { NgProgressBarComponent } from './ng-progress-bar.component';

import { PLANTILLA_HTML } from "../../../constans/storybook.constant";
import { APP_PREFIX } from '../../../constans/app.constant';

const TITULO = `NG-PROGRESS-BAR`;

const SUMMARY = `
    El componente <strong>NG-PROGRESS-BAR</strong> representa una barra de progreso para la aplicación, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><strong>current</strong>: Valor actual del progress bar</li>
`;

const COMPONENT_NORMAL = `
<div style="width: 500px;">
    <ng-progress-bar [current]="current"></ng-progress-bar>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-25][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Base/NgProgressBar',
    component: NgProgressBarComponent,
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

export const Base = Template.bind({});
Base.args = {
    APP_PREFIX,
    current: 20
};