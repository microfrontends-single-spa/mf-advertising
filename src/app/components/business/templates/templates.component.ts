import { Component } from "@angular/core";

import { APP_PREFIX } from '../../../constans/app.constant';

@Component({
    selector: 'templates',
    templateUrl: './templates.component.html',
    styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent {
    APP_PREFIX: string = APP_PREFIX;
}