import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {TasksModule} from "./tasks/tasks.module";
import {RoutingModule} from "./routing.module";
import {AppComponent} from "./core/containers/app/app.component";
import {TaskComponent} from './tasks/components/task/task.component';
import {StoreModule} from "@ngrx/store";
import {fromApp} from "./reducers";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    TasksModule,
    RoutingModule,
    // Store & actions
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent],
  declarations: [
    TaskComponent
  ]
})
export class AppModule {
}
