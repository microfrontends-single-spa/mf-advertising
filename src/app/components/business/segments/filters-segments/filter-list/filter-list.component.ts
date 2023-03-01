import { Component, Input } from "@angular/core";

import { APP_PREFIX } from '../../../../../constans/app.constant';

@Component({
    selector: 'filter-list',
    templateUrl: './filter-list.component.html',
    styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent {
    APP_PREFIX = APP_PREFIX;
    itemSelected: any = {};

    @Input() datasource: any = [];

    select(item: any) {
        this.itemSelected = item;
    }
}