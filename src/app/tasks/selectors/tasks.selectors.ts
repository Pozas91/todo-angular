import {createFeatureSelector} from "@ngrx/store";
import {Task} from "../models";

export const selectTasks = createFeatureSelector<ReadonlyArray<Task>>('tasks');
