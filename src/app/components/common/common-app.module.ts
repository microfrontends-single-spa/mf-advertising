import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDescriptionComponent } from './header-description/header-description.component';
import { IconCircleComponent } from './icon-circle/icon-circle.component';
import { ProgressBarInfoComponent } from './progress-info/progress-bar-info.component';
import { BaseAppModule } from '../base/base-app.module';
import { ButtonNewComponent } from './button-new/button-new.component';

@NgModule({
  declarations: [
    ButtonNewComponent,
    HeaderDescriptionComponent,
    IconCircleComponent,
    ProgressBarInfoComponent
  ],
  imports: [
    CommonModule,
    BaseAppModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    ButtonNewComponent,
    HeaderDescriptionComponent,
    IconCircleComponent,
    ProgressBarInfoComponent
  ]
})
export class CommonAppModule { }