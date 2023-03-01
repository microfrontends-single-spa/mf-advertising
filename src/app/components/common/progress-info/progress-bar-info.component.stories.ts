import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { ProgressBarInfoComponent } from './progress-bar-info.component';

import { PLANTILLA_HTML } from "../../../constans/storybook.constant";
import { APP_PREFIX } from '../../../constans/app.constant';
import { BaseAppModule } from '../../base/base-app.module';

const TITULO = `PROGRESS-BAR-INFO`;

const SUMMARY = `
    El componente <strong>PROGRESS-BAR-INFO</strong> presenta un componente gráfico de barra de progreso con ciertos parametros estadísticos, en él se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><strong>current</strong>: Valor actual de la barra de progreso</li>
    <li><strong>leyend</strong>: Legenda o descripción</li>
`;

const COMPONENT_NORMAL = `
<div style="width: 50%;">
    <progress-bar-info [current]="current" [leyend]="leyend"></progress-bar-info>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-25][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Common/ProgressBarInfo',
    component: ProgressBarInfoComponent,
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
    current: 50,
    leyend: '500/1000'
};