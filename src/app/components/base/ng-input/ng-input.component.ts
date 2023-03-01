import { Component, Input } from "@angular/core";

import { APP_PREFIX } from "../../../constans/app.constant";

@Component({
    selector: 'ng-input',
    templateUrl: './ng-input.component.html',
    styleUrls: ['./ng-input.component.scss']
})
export class NgInputComponent {
    APP_PREFIX = APP_PREFIX;

    @Input() label: string = '';
    @Input() placeholder: string = '';
}