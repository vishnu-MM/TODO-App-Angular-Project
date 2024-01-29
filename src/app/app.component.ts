import { Component } from '@angular/core';
import { WishItem  } from 'src/Shared/Models/WishItem';

@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'] })
export class AppComponent {
  filter : any = () => {};
  items : WishItem[] = [ 
    new WishItem('Learn Angular'), new WishItem('Learn Typescript', true),
    new WishItem('Learn Microservice'), new WishItem('Learn Java', true), new WishItem('Get a Coffee') 
  ];
    
  get itemList() : WishItem[] {
    return this.items.filter(this.filter)
  }
  addNewToDoTask(event : any){
    this.items.push(event);
  }
}