import {fromTasks} from '../tasks/reducers';
import {ActionReducerMap} from "@ngrx/store";

// Extract all states and reducers from tasks module into global module
export interface AppState {
  tasks: fromTasks.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  tasks: fromTasks.tasksReducer
};
