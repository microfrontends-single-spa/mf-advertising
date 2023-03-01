import { Component } from "@angular/core";

import { APP_PREFIX } from '../../../../../constans/app.constant';

@Component({
    selector: 'quantity-send',
    templateUrl: './quantity-send.component.html',
    styleUrls: ['./quantity-send.component.scss']
})
export class QuantitySendComponent {
    APP_PREFIX: string = APP_PREFIX;
}