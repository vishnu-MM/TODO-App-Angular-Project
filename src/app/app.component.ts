import { Component } from '@angular/core';
import { WishItem } from 'src/Shared/Models/WishItem';
import { EventService } from 'src/Shared/Services/EventService';

@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'] })
export class AppComponent {
	filter: any;
	items: WishItem[] = [
		new WishItem('Learn Angular'), new WishItem('Learn Typescript', true),
		new WishItem('Learn Microservice'), new WishItem('Learn Java', true), new WishItem('Get a Coffee')
	];
	constructor( private events : EventService ) {
		events.listen('removeTask', (task: any) => {
			let index : number = this.items.indexOf(task);
			this.items.splice(index, 1);
		});
	}

	get itemList(): WishItem[] {
		return this.items.filter(this.filter)
	}
	addNewToDoTask(event: any) {
		this.items.push(event);
	}
}