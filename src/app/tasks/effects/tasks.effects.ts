import {TasksActions} from "../actions";
import {catchError, map, of, switchMap} from "rxjs";
import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TasksService} from "../services/tasks.service";

@Injectable()
export class TasksEffects {

  constructor(private actions$: Actions, private service: TasksService) {
  }

  getTasks$ = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.getTasks),
    switchMap(() => this.service.get()
      .pipe(catchError(() => of(TasksActions.apiError({message: 'Oops! Something go wrong a'}))))
    ),
    map(tasks => {
      console.log(tasks);
      return [];
    }),
    map(tasks => TasksActions.setTasks({tasks: tasks}))
  ));
}
