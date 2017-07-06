import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../task";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks:Array<Task>;
  constructor(private taskService: TaskService) {
    this.taskService.tasks.push(
        {name: 'testse', value: 50, date_launch: '2017-07-07'}
        );
    this.tasks = this.taskService.tasks;

  }


  ngOnInit() {
  }
  // @Input()
  // tasks = [];


}
