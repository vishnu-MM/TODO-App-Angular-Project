import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/Shared/Models/WishItem';

const   filters : any[] = [ ( item : WishItem ) => item, ( item : WishItem ) => item.isComplete, ( item : WishItem ) => !item.isComplete ];

@Component({ selector: 'task-filter', templateUrl: './task-filter.component.html', styleUrls: ['./task-filter.component.css']   })
export class TaskFilterComponent implements OnInit {
  taskFilter : string = '2';
  //* This filter propety is bound to the filter property in the app component.
  @Input() filter : any; //* for Two-way binging we need both Input & Output. The naming convetion is to name Output is intputname + Change.
  @Output() filterChange = new EventEmitter<any>();
  
  ngOnInit(): void {
    this.filterChange.emit(filters[2]);
  }  
  updateFilter(event : any) {
    this.filter = filters[event];
    this.filterChange.emit(this.filter);
  }
}