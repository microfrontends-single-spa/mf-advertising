import { Component } from "@angular/core";

import { APP_PREFIX } from "../../../../constans/app.constant";

@Component({
    selector: 'grid-segments',
    templateUrl: './grid-segments.component.html',
    styleUrls: ['./grid-segments.component.scss']
})
export class GridSegmentsComponent {
    APP_PREFIX = APP_PREFIX
}