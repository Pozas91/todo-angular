import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {fromApp} from "../../../reducers";
import {TasksActions} from "../../actions";
import {selectTasks} from "../../selectors/tasks.selectors";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks-index-page.component.html',
  styleUrls: ['./tasks-index-page.component.css']
})
export class TasksIndexPageComponent implements OnInit {
  isLoading = false;
  tasks$ = this.store.select(selectTasks);

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(TasksActions.getTasks());

    this.tasks$.subscribe(state => {
      this.tasks = state.tasks;
      this.isLoading = state.loading;
    })
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
}
