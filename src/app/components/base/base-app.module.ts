import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgButtonComponent } from "./ng-button/ng-button.component";
import { NgCardComponent } from "./ng-card/ng-card.component";
import { NgInputComponent } from "./ng-input/ng-input.component";
import { NgProgressBarComponent } from "./ng-progress-bar/ng-progress-bar.component";

@NgModule({
    declarations: [
        NgButtonComponent,
        NgCardComponent,
        NgInputComponent,
        NgProgressBarComponent,
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    bootstrap: [],
    exports: [
        NgButtonComponent,
        NgCardComponent,
        NgInputComponent,
        NgProgressBarComponent
    ]
})
export class BaseAppModule { }