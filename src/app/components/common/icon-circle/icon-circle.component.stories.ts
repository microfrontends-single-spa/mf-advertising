import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { IconCircleComponent } from './icon-circle.component';

import { PLANTILLA_HTML } from "../../../constans/storybook.constant";
import { APP_PREFIX } from '../../../constans/app.constant';
import { BaseAppModule } from '../../base/base-app.module';

const TITULO = `ICON-CIRCLE`;

const SUMMARY = `
    El componente <strong>ICON-CIRCLE</strong> presenta un componente grafico para representar estados de envío de mensajes, en él se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
`;

const COMPONENT_NORMAL = `
<div style="width: auto;">
    <icon-circle>
        <em class="fa-sharp fa-solid fa-envelope fa-2x"></em>
    </icon-circle>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-25][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Common/IconCircle',
    component: IconCircleComponent,
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
};