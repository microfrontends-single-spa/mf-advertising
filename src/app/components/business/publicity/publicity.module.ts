import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseAppModule } from '../../base/base-app.module';
import { CommonAppModule } from '../../common/common-app.module';
import { CommonDirAppModule } from '../../../directives/common/common-dir-app.module';
import { SummaryComponent } from './summary/summary.component';
import { AdvertisingRoutes } from './publicity-routing.module';
import { GeneralDataComponent } from './summary/general-data/general-data.component';
import { CurrentStateComponent } from './summary/current-state/current-state.component';
import { StatusSendComponent } from './summary/status-send/status-send.component';
import { QuantitySendComponent } from './summary/quantity-send/quantity-send.component';
import { PercentageSendComponent } from './summary/percentage-send/percentage-send.component';
import { GridQuantitySendComponent } from './summary/grid-quantity-send/grid-quantity-send.component';
import { AdvertisingComponent } from './advertising/advertising.component';
import { GridAdvertisingComponent } from './advertising/grid-advertising/grid-advertising.component';
import { FiltersAdvertisingComponent } from './advertising/filters-advertising/filters-advertising.component';
import { SegmentsModule } from '../segments/segments.module';

@NgModule({
  declarations: [
    CurrentStateComponent,
    GeneralDataComponent,
    GridQuantitySendComponent,
    PercentageSendComponent,
    QuantitySendComponent,
    StatusSendComponent,
    SummaryComponent,
    AdvertisingComponent,
    GridAdvertisingComponent,
    FiltersAdvertisingComponent
  ],
  imports: [
    CommonModule,
    BaseAppModule,
    CommonAppModule,
    CommonDirAppModule,
    SegmentsModule,
    RouterModule.forChild(AdvertisingRoutes),
  ],
  providers: [],
  bootstrap: []
})
export class AdvertisingModule { }