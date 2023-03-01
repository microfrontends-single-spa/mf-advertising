import { Component } from "@angular/core";

import { APP_PREFIX } from '../../../constans/app.constant';

@Component({
    selector: 'icon-circle',
    templateUrl: './icon-circle.component.html',
    styleUrls: ['./icon-circle.component.scss']
})
export class IconCircleComponent {
    APP_PREFIX: string = APP_PREFIX;
}