import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {fromApp} from "../../../reducers";
import {TasksActions} from "../../actions";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks-index-page.component.html',
  styleUrls: ['./tasks-index-page.component.css']
})
export class TasksIndexPageComponent implements OnInit {
  isLoading = false;
  tasks: Task[] = [];
  storeSub: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(TasksActions.getTasks());

    this.storeSub = this.store.select('tasks').subscribe(tasksState => {
      this.tasks = tasksState.tasks;
      this.isLoading = tasksState.loading;
    })
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
}
