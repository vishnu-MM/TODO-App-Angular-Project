import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/Shared/Models/WishItem';

const   filters : any[] = [ ( item : WishItem ) => item, ( item : WishItem ) => item.isComplete, ( item : WishItem ) => !item.isComplete ];

@Component({ selector: 'task-filter', templateUrl: './task-filter.component.html', styleUrls: ['./task-filter.component.css']   })
export class TaskFilterComponent implements OnInit {
  taskFilter : string = '2';
  @Output() filter = new EventEmitter<any>();
  
  ngOnInit(): void {
    this.changeFilter(this.taskFilter);
  }
  changeFilter(event : any) {
    this.filter.emit(filters[event]);
  }
}