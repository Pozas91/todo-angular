import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from "../../models";
import {TasksService} from "../../services/tasks.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task | any;
  @Output() update = new EventEmitter<string>();

  constructor(private service: TasksService) {
  }

  ngOnInit(): void {
  }

  onToggleTask() {
    this.service.toggle(this.task.id).subscribe({
      next: value => this.update.emit('completed'),
      error: err => this.update.emit(err.message),
    })
  }
}
