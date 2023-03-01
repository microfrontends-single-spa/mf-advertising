import { Component } from "@angular/core";

import { APP_PREFIX } from '../../../../../constans/app.constant';

@Component({
    selector: 'percentage-send',
    templateUrl: './percentage-send.component.html',
    styleUrls: ['./percentage-send.component.scss']
})
export class PercentageSendComponent {
    APP_PREFIX: string = APP_PREFIX;
}