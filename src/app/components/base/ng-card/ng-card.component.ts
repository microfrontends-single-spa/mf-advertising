import { Component, Input } from "@angular/core";

import { APP_PREFIX } from '../../../constans/app.constant';

@Component({
    selector: 'ng-card',
    templateUrl: './ng-card.component.html',
    styleUrls: ['./ng-card.component.scss']
})
export class NgCardComponent {
    APP_PREFIX: string = APP_PREFIX;

    @Input()
    title: string = '';

    @Input()
    showSwitch: boolean = false;

    on: boolean = false;

    ngOnInit() {
        this.openCloseWhatsapp();
    }

    openCloseWhatsapp() {
        this.on = !this.on;
        window.dispatchEvent(
            new CustomEvent('evt-open-microfront-whatsapp', {
                detail: {
                    isOpenWhatsapp: !this.on,
                },
            })
        );
    }
}