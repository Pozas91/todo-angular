import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {TasksModule} from "./tasks/tasks.module";
import {RoutingModule} from "./routing.module";
import {AppComponent} from "./core/containers/app/app.component";
import { TaskComponent } from './tasks/components/task/task.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    TasksModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    TaskComponent
  ]
})
export class AppModule {
}
