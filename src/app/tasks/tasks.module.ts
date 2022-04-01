import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {EffectsModule} from "@ngrx/effects";
import {TasksEffects} from "./effects/tasks.effects";
import {TasksPageComponent} from "./containers/tasks-page/tasks-page.component";

export const COMPONENTS = [
  TasksPageComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    RouterModule,
    EffectsModule.forFeature([TasksEffects])
  ]
})

export class TasksModule {
}
