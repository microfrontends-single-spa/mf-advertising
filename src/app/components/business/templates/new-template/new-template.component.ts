import { Component } from "@angular/core";

import { APP_PREFIX } from '../../../../constans/app.constant';

@Component({
    selector: 'new-template-app',
    templateUrl: './new-template.component.html',
    styleUrls: ['./new-template.component.scss']
})
export class NewTemplateComponent {
    APP_PREFIX: string = APP_PREFIX;
}