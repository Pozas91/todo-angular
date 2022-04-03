import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./core/containers/not-found/not-found.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule)},
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
