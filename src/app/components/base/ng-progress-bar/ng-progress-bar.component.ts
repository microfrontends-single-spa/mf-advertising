import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

import { APP_PREFIX } from '../../../constans/app.constant';

@Component({
    selector: 'ng-progress-bar',
    templateUrl: './ng-progress-bar.component.html',
    styleUrls: ['./ng-progress-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgProgressBarComponent {
    APP_PREFIX: string = APP_PREFIX;

    @Input()
    current: number = 0;
}