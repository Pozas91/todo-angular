import {fromTasks} from '../tasks/reducers';
import {ActionReducerMap} from "@ngrx/store";

export interface AppState {
  tasks: fromTasks.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  tasks: fromTasks.tasksReducer
};
