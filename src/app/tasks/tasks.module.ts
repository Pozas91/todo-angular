import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {TasksEffects} from "./effects/tasks.effects";
import {TasksPageComponent} from "./containers/tasks-page/tasks-page.component";
import {CommonModule} from "@angular/common";

export const COMPONENTS = [
  TasksPageComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    // This module import basic Angular directives
    CommonModule,
    // This module import routing functionalities
    RouterModule,
    // This module adds effects
    EffectsModule.forFeature([TasksEffects])
  ]
})

export class TasksModule {
}
