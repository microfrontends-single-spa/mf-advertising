import { Component } from "@angular/core";

import { APP_PREFIX } from '../../../../../constans/app.constant';

@Component({
    selector: 'current-state',
    templateUrl: './current-state.component.html',
    styleUrls: ['./current-state.component.scss']
})
export class CurrentStateComponent {
    APP_PREFIX: string = APP_PREFIX;
}