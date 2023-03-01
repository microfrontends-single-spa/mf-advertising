import { Component } from "@angular/core";

import { APP_PREFIX } from '../../../../../constans/app.constant';

@Component({
    selector: 'filters-advertising',
    templateUrl: './filters-advertising.component.html',
    styleUrls: ['./filters-advertising.component.scss']
})
export class FiltersAdvertisingComponent {
    APP_PREFIX = APP_PREFIX;
}