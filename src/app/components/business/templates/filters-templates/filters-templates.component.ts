import { Component } from "@angular/core";

import { APP_PREFIX } from '../../../../constans/app.constant';

@Component({
    selector: 'filters-templates',
    templateUrl: './filters-templates.component.html',
    styleUrls: ['./filters-templates.component.scss']
})
export class FiltersTemplatesComponent {
    APP_PREFIX = APP_PREFIX;
}