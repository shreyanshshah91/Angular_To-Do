import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() task;
  @Input() taskId;

  deleteTask(id){
    this.data.deleteTask(id);
  }

  editTask(value, id){
    if (value == "") {
      alert("Please enter the new Task!")
    } else{
      this.data.editTask(value, id);
    }
  }

  markAsComplete(id){
    this.data.markAsComplete(id);
  }

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

}
