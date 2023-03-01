import { Component, EventEmitter, Input, Output } from "@angular/core";

import { APP_PREFIX } from '../../../constans/app.constant';

@Component({
    selector: 'ng-button',
    templateUrl: './ng-button.component.html',
    styleUrls: ['./ng-button.component.scss']
})
export class NgButtonComponent {
    APP_PREFIX: string = APP_PREFIX;

    @Output() btnClick = new EventEmitter();
    @Input() type = 'success';

    onClick() {
		this.btnClick.emit();
	}
}