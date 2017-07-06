import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../task";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  task:Task = {
    name: '',
    value: 0,
    date_launch: '2017-07-07'
  };
  // @Input()
  tasks;
  add() {
    let task = Object.assign({}, this.task);
    this.tasks.push(task);

  }
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.tasks;
  }

  ngOnInit() {
  }

}
