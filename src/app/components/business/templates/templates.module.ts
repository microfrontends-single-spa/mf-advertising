import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesComponent } from './templates.component';
import { RouterModule } from '@angular/router';
import { TemplatesRoutes } from './templates-routing.module';
import { BaseAppModule } from '../../base/base-app.module';
import { CommonAppModule } from '../../common/common-app.module';
import { FiltersTemplatesComponent } from './filters-templates/filters-templates.component';
import { GridTemplatesComponent } from './grid-templates/grid-templates.component';
import { CommonDirAppModule } from 'src/app/directives/common/common-dir-app.module';

@NgModule({
  declarations: [
    TemplatesComponent,
    FiltersTemplatesComponent,
    GridTemplatesComponent
  ],
  imports: [
    CommonModule,
    BaseAppModule,
    CommonAppModule,
    CommonDirAppModule,
    RouterModule.forChild(TemplatesRoutes),
  ],
  providers: [],
  bootstrap: []
})
export class TemplatesModule { }