import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { StatusSendComponent } from './status-send.component';

import { PLANTILLA_HTML } from "../../../../../constans/storybook.constant";
import { APP_PREFIX } from '../../../../../constans/app.constant';
import { BaseAppModule } from 'src/app/components/base/base-app.module';
import { CommonAppModule } from 'src/app/components/common/common-app.module';
import { CommonDirAppModule } from 'src/app/directives/common/common-dir-app.module';
import { SegmentsModule } from '../../../segments/segments.module';

const TITULO = `STATUS-SEND`;

const SUMMARY = `
    El componente <strong>STATUS-SEND</strong> presenta el estado actual de todo el envio de publicidad por whatsapp, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><strong>current</strong>: Valor actual del envio de publicidad por whatsapp</li>
`;

const COMPONENT_NORMAL = `
<div style="min-width: 400px;">
    <status-send [current]="current"></status-send>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-25][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Publicity/Summary/StatusSend',
    component: StatusSendComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                BaseAppModule,
                CommonAppModule,
                CommonDirAppModule,
                SegmentsModule
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
    current: 45
};