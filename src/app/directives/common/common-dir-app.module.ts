import { NgModule } from "@angular/core";
import { NgGridDirective } from "./ng-grid/ng-grid.directive";

@NgModule({
    declarations: [NgGridDirective],
    exports: [NgGridDirective]
  })
  export class CommonDirAppModule {}