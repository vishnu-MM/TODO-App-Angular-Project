import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { WishItem } from 'src/Shared/Models/WishItem';
import { EventService } from 'src/Shared/Services/EventService';

@Component({ selector: 'list-item', templateUrl: './list-item.component.html', styleUrls: ['./list-item.component.css'], })
export class ListItemComponent {
	@Input() task!: WishItem;
	// @Input() wishStatus!: boolean;
	// @Output() wishStatusChange: any = new EventEmitter<boolean>();
	constructor( private events : EventService ) {
		this.events = events;
	}

	toggleItemStatus() {
		this.task.isComplete = !this.task.isComplete;
		// this.wishStatusChange.emit(this.wishStatus);
	}	
	removeTask() {
		this.events.emit('removeTask', this.task);
	}
	get getCssClassForCompletedTask() {
		//* We can return class names as a string.
		//? return this.task.isComplete ? 'completed-task text-muted' : '';
		//* Or we can return array of class names (String).
		//? return this.task.isComplete ? ['completed-task', 'text-muted'] : [];
		//* Or we can return an object where key is class name and value is boolean valu or expression for desicion making.
		//? return { 'completed-task' : this.task.isComplete, 'text-muted' : this.task.isComplete };
		return { 'completed-task text-muted': this.task.isComplete };
	}
}
