import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/Shared/Models/WishItem';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.css']
})
export class AddNewTaskComponent {
  newToDoTask : string = '';
  @Output() AddTask = new EventEmitter<WishItem>();

  addNewToDoTask(){
    this.AddTask.emit(new WishItem(this.newToDoTask))
    this.newToDoTask = '';
  }
}
