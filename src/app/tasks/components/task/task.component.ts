import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {fromApp} from "../../../reducers";
import {TasksActions} from "../../actions";
import {Task} from "../../models";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
  }

  onToggleTask() {
    this.store.dispatch(TasksActions.toggleTask({task: this.task}));
  }
}
