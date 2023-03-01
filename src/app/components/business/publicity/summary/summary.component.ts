import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { APP_PREFIX } from '../../../../constans/app.constant';

@Component({
    selector: 'summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
    APP_PREFIX: string = APP_PREFIX;

    constructor(private router: Router) {

    }

    redirectTo() {
        this.router.navigate(['/advertising/publicity']);
    }
}