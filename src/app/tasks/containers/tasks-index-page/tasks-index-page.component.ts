import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TasksService} from "../../services/tasks.service";
import {Task} from "../../models";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks-index-page.component.html',
  styleUrls: ['./tasks-index-page.component.css'],
  providers: [TasksService]
})
export class TasksIndexPageComponent implements OnInit {
  isLoading = false;
  completedTasks: Array<Task>;
  pendingTasks: Array<Task>;
  message: string;
  task = {
    text: ''
  };

  constructor(private router: Router, private route: ActivatedRoute, private service: TasksService) {
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    // Loading information
    this.isLoading = true;

    this.service.get().subscribe({
      next: data => {
        if (data && data.length > 0) {

          this.completedTasks = [];
          this.pendingTasks = [];

          data.forEach(task => {
            if (task.isCompleted) {
              this.completedTasks.push(task);
            } else {
              this.pendingTasks.push(task);
            }
          });
        } else {
          this.message = 'Cannot load previous tasks';
        }

        // Load completed
        this.isLoading = false;
      },
      error: err => {
        this.message = err.message

        // Load completed
        this.isLoading = false;
      }
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.service.create(this.task.text).subscribe({
      next: value => this.loadTasks(),
      error: err => this.message = err.message
    })
  }

  update() {
    this.loadTasks();
  }
}
