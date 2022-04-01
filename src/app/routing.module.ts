import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./core/containers/not-found/not-found.component";
import {NgModule} from "@angular/core";
import {TasksPageComponent} from "./tasks/containers/tasks-page/tasks-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'tasks', component: TasksPageComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled'})
  ],
  exports: [RouterModule]
})

export class RoutingModule {
}
