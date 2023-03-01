import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { APP_PREFIX } from "../../../constans/app.constant";

@Component({
    selector: 'segments',
    templateUrl: './segments.component.html',
    styleUrls: ['./segments.component.scss']
})
export class SegmentsComponent {
    APP_PREFIX = APP_PREFIX;

    constructor(private router: Router) {

    }

    redirectTo() {
        this.router.navigate(['advertising/publicity/summary']);
    }
}