import { Component } from "@angular/core";
import { delay } from "rxjs";

import { APP_PREFIX } from '../../../../../constans/app.constant';

@Component({
    selector: 'status-send',
    templateUrl: './status-send.component.html',
    styleUrls: ['./status-send.component.scss']
})
export class StatusSendComponent {
    APP_PREFIX: string = APP_PREFIX;
    current: number = 0;

    ngOnInit() {
        setInterval(() => {
            this.current = this.current < 100 ? this.current+1 : this.current;
        }, 200)
    }
}