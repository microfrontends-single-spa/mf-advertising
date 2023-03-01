import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseAppModule } from '../../base/base-app.module';
import { CommonAppModule } from '../../common/common-app.module';
import { CommonDirAppModule } from '../../../directives/common/common-dir-app.module';
import { SegmentsRoutes } from './segments-routing.module';
import { SegmentsComponent } from './segments.component';
import { GridSegmentsComponent } from './grid-segments/grid-segments.component';
import { FiltersSegmentsComponent } from './filters-segments/filters-segments.component';
import { GeneralDataComponent } from './general-data/general-data.component';
import { PercentageClientsComponent } from './percentage-clients/percentage-clients.component';
import { FilterListComponent } from './filters-segments/filter-list/filter-list.component';

@NgModule({
  declarations: [
    SegmentsComponent,
    FiltersSegmentsComponent,
    GeneralDataComponent,
    PercentageClientsComponent,
    GridSegmentsComponent,
    FilterListComponent
  ],
  imports: [
    CommonModule,
    BaseAppModule,
    CommonAppModule,
    CommonDirAppModule,
    RouterModule.forChild(SegmentsRoutes),
  ],
  providers: [],
  bootstrap: [],
  exports: [
    SegmentsComponent
  ]
})
export class SegmentsModule { }