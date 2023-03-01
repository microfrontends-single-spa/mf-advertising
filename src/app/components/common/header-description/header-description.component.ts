import { Component, Input } from "@angular/core";

import { APP_PREFIX } from '../../../constans/app.constant';

@Component({
    selector: 'header-description',
    templateUrl: './header-description.component.html',
    styleUrls: ['./header-description.component.scss']
})
export class HeaderDescriptionComponent {
    APP_PREFIX: string = APP_PREFIX;

    @Input()
    title: string = '';

    @Input()
    description: string = '';
}