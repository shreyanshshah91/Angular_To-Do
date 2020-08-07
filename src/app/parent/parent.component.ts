import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  tasks;

  addTask(task) {
    if (task == "") {
      alert("Please enter a Task!")
    } else {
      this.data.addTask(task);
      // alert("Added");
    }
  }

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.tasks = this.data.getTask();
  }

}
