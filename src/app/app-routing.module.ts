import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  {
    //path: "mf-advertising",
    path: "advertising",
    loadChildren: () =>
      import("../app/components/business/templates/templates.module").then((m) => m.TemplatesModule),
  },
  {
    path: "advertising",
    loadChildren: () =>
      import("./components/business/publicity/publicity.module").then((m) => m.AdvertisingModule),
  },
  {
    path: "advertising",
    loadChildren: () =>
      import("./components/business/segments/segments.module").then((m) => m.SegmentsModule),
  },
  {
    path: "**",
    component: EmptyRouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: "/"}]
})
export class AppRoutingModule { }