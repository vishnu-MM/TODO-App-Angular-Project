import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() wishText! : string;
  @Input() wishStatus! : boolean;
  @Output() wishStatusChange : any = new EventEmitter<boolean>();

  toggleItemStatus() {   
    this.wishStatus = !this.wishStatus;
    this.wishStatusChange.emit(this.wishStatus);
  }
  get getCssClassForCompletedTask() {
    //* We can return class names as a string. 
    //? return this.wishStatus ? 'completed-task text-muted' : '';
    //* Or we can return array of class names (String).
    //? return this.wishStatus ? ['completed-task', 'text-muted'] : [];
    //* Or we can return an object where key is class name and value is boolean valu or expression for desicion making.
    //? return { 'completed-task' : this.wishStatus, 'text-muted' : this.wishStatus };
    return { 'completed-task text-muted' : this.wishStatus };
  }
}