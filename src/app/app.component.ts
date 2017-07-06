import { Component } from '@angular/core';
// import {Task} from "./task";
// import {TaskService} from "./task.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarefas';
  //depreciado após aula de service
  // tasks:Array<Task> = [];
  //
  //
  //   constructor() {
  //       // this.tasks = tasks;
  //       let taskService = new TaskService;
  //       this.tasks = taskService.tasks;
  //       this.tasks.push(
  //           {name: 'Cozinhar', value: 50, date_launch: '2017-07-07'}
  //       );
  //   }
}
