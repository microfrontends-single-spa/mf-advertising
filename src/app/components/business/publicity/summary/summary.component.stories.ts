import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { SummaryComponent } from './summary.component';

import { PLANTILLA_HTML } from "../../../../constans/storybook.constant";
import { APP_PREFIX } from '../../../../constans/app.constant';
import { BaseAppModule } from 'src/app/components/base/base-app.module';
import { CommonAppModule } from 'src/app/components/common/common-app.module';
import { CommonDirAppModule } from 'src/app/directives/common/common-dir-app.module';
import { SegmentsModule } from '../../segments/segments.module';
import { GeneralDataComponent } from './general-data/general-data.component';
import { CurrentStateComponent } from './current-state/current-state.component';
import { StatusSendComponent } from './status-send/status-send.component';
import { PercentageSendComponent } from './percentage-send/percentage-send.component';
import { QuantitySendComponent } from './quantity-send/quantity-send.component';
import { GridQuantitySendComponent } from './grid-quantity-send/grid-quantity-send.component';

const TITULO = `SUMMARY`;

const SUMMARY = `
    El componente <strong>SUMMARY</strong> presenta información a resumen y a detalle sobre el estado actual de todo el envio de publicidad por whatsapp, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
`;

const COMPONENT_NORMAL = `
<div>
    <summary></summary>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-25][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Publicity/Summary',
    component: SummaryComponent,
    decorators: [
        moduleMetadata({
            declarations: [
                GeneralDataComponent,
                CurrentStateComponent,
                StatusSendComponent,
                PercentageSendComponent,
                QuantitySendComponent,
                GridQuantitySendComponent
            ],
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
    APP_PREFIX
};