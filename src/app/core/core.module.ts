import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {AppComponent} from "./containers/app/app.component";
import {NotFoundComponent} from "./containers/not-found/not-found.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {MatGridListModule} from "@angular/material/grid-list";

export const COMPONENTS = [
  AppComponent,
  NotFoundComponent,
  LayoutComponent
];


@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    MatGridListModule
  ]
})
export class CoreModule {
}
