import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {TasksPageComponent} from "./containers/tasks-page/tasks-page.component";
import {TasksIndexPageComponent} from "./containers/tasks-index-page/tasks-index-page.component";

const routes: Routes = [
  {
    path: '', component: TasksPageComponent, children: [
      {path: '', component: TasksIndexPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TasksRoutingModule {
}
