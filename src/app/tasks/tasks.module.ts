import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TasksPageComponent} from "./containers/tasks-page/tasks-page.component";
import {CommonModule} from "@angular/common";
import {TasksIndexPageComponent} from "./containers/tasks-index-page/tasks-index-page.component";
import {TaskComponent} from "./components/task/task.component";
import {FormsModule} from "@angular/forms";
import {TasksRoutingModule} from "./tasks-routing";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";

export const COMPONENTS = [
  TaskComponent,
  TasksPageComponent,
  TasksIndexPageComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    // My module for routing
    TasksRoutingModule,
    // Some styles
    MatGridListModule,
    MatListModule
  ]
})

export class TasksModule {
}
