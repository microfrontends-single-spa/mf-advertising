import { Component, EventEmitter, Output } from "@angular/core";

import { APP_PREFIX } from "../../../constans/app.constant";

@Component({
    selector: 'button-new',
    templateUrl: './button-new.component.html',
    styleUrls: ['./button-new.component.scss']
})
export class ButtonNewComponent {
    APP_PREFIX = APP_PREFIX;

    @Output() btnClick = new EventEmitter();

    onClick() {
		this.btnClick.emit();
	}
}