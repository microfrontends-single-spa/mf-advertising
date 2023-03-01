import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { GridAdvertisingComponent } from './grid-advertising.component';

import { PLANTILLA_HTML } from "../../../../../constans/storybook.constant";
import { APP_PREFIX } from '../../../../../constans/app.constant';
import { BaseAppModule } from 'src/app/components/base/base-app.module';
import { CommonAppModule } from 'src/app/components/common/common-app.module';
import { CommonDirAppModule } from 'src/app/directives/common/common-dir-app.module';
import { SegmentsModule } from '../../../segments/segments.module';
import { Router } from '@angular/router';

const TITULO = `GRID-ADVERTISING`;

const SUMMARY = `El componente <strong>GRID-ADVERTISING</strong> presenta los registros encontrados de una o varias publicidades, en él se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
`;

const COMPONENT_NORMAL = `
<div style="width: 100%">
    <grid-advertising></grid-advertising>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-25][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Business/Publicity/Advertising/GridAdvertising',
    component: GridAdvertisingComponent,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [
                CommonModule,
                BaseAppModule,
                CommonAppModule,
                CommonDirAppModule,
                SegmentsModule,
            ]
        }),
        componentWrapperDecorator(story => {
            return PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$", `${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT_NORMAL}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`);
        }),
    ]
} as Meta;

const Template: Story = (args) => ({
    moduleMetadata: {
        providers: [
            { provide: Router }
        ]
    },
    props: args
})

export const Base = Template.bind({});
Base.args = {
    APP_PREFIX
};