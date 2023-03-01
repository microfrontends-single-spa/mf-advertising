import { Component } from "@angular/core";

import { APP_PREFIX } from '../../../../constans/app.constant';

@Component({
    selector: 'advertising',
    templateUrl: './advertising.component.html',
    styleUrls: ['./advertising.component.scss']
})
export class AdvertisingComponent {
    APP_PREFIX = APP_PREFIX
}