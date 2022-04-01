import {createAction, props} from "@ngrx/store";

export const SET_TASKS = '[Tasks] Set tasks';
export const GET_TASKS = '[Tasks] Get tasks';
export const ADD_TASK = '[Tasks] Add task';
export const TOGGLE_TASK = '[Tasks] Toggle task';

export const API_ERROR = '[Tasks] Api Error';
export const API_SUCCESS = '[Tasks] Api Success';

export const setTasks = createAction(SET_TASKS, props<{ tasks: Task[] }>());
export const getTasks = createAction(GET_TASKS);
export const addTask = createAction(ADD_TASK, props<{ task: Task }>());
export const toggleTask = createAction(TOGGLE_TASK, props<{ task: Task }>());
export const apiSuccess = createAction(API_SUCCESS, props<{ message: string }>());
export const apiError = createAction(API_ERROR, props<{ message: string }>());
