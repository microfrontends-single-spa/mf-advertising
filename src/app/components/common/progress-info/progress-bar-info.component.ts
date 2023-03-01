import { Component, Input } from "@angular/core";

import { APP_PREFIX } from '../../../constans/app.constant';

@Component({
    selector: 'progress-bar-info',
    templateUrl: './progress-bar-info.component.html',
    styleUrls: ['./progress-bar-info.component.scss']
})
export class ProgressBarInfoComponent {
    APP_PREFIX: string = APP_PREFIX;

    @Input()
    current: number = 0;

    @Input()
    leyend: string = '';
}