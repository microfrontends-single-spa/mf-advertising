import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Meta, Story } from '@storybook/angular';

import { ButtonNewComponent } from './button-new.component';

import { PLANTILLA_HTML } from "../../../constans/storybook.constant";
import { APP_PREFIX } from '../../../constans/app.constant';
import { BaseAppModule } from '../../base/base-app.module';

const TITULO = `BUTTON-NEW`;

const SUMMARY = `
    El componente <strong>BUTTON-NEW</strong> representa una personalizado para crear un nuevo objeto dentro de la aplicación, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
`;

const COMPONENT_NORMAL = `
<div style="width: auto">
    <button-new></button-new>
</div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span>[2023-01-25][Luis Amat] Creación del componente</span>
`;

export default {
    title: 'Components-Common/ButtonNew',
    component: ButtonNewComponent,
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
    APP_PREFIX
};