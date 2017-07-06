import { Injectable } from '@angular/core';
import {Task} from "./task";

@Injectable()
export class TaskService {

  public tasks: Array<Task> = [];
  constructor() { }

}
