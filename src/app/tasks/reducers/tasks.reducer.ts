import {TasksActions} from "../actions";
import {createReducer, on} from "@ngrx/store";

export interface State {
  tasks: Task[];
  loading: boolean;
  apiFeedback: string;
}

export const initialState: State = {
  tasks: [],
  loading: false,
  apiFeedback: '',
};

export const tasksReducer = createReducer(
  initialState,
  on(TasksActions.getTasks, state => ({...state, loading: true})),
  on(TasksActions.setTasks, (state, {tasks}) => ({...state, tasks: [...tasks], loading: false})),
  on(TasksActions.apiError, (state, {message}) => ({...state, loading: false, apiFeedback: message})),
  on(TasksActions.apiSuccess, (state, {message}) => ({...state, loading: false, apiFeedback: message})),
)
