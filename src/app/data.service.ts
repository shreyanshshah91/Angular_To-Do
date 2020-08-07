import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tasks = [];

  addTask(task) {
    this.tasks.push({task, strike:false});
    //console.log(this.tasks);
  }

  getTask() {
    // console.log(this.tasks);
    return this.tasks;
  }

  deleteTask(taskId) {
    this.tasks.splice(taskId, 1)
  }

  editTask(value, taskId) {
    this.tasks[taskId].task = value;
    // console.log(this.tasks[index]);
  }

  markAsComplete(taskId) {
    this.tasks[taskId].strike = true;
    //console.log(this.tasks);
  }

  constructor() { }
}
