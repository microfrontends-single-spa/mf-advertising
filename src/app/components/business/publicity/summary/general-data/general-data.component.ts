import { Component } from "@angular/core";

import { APP_PREFIX } from '../../../../../constans/app.constant';

@Component({
    selector: 'general-data',
    templateUrl: './general-data.component.html',
    styleUrls: ['./general-data.component.scss']
})
export class GeneralDataComponent {
    APP_PREFIX: string = APP_PREFIX;
}