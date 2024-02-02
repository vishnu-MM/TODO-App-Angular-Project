import { Component, Input } from '@angular/core';
import { WishItem } from 'src/Shared/Models/WishItem';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTODOsComponent {
  //* @Input() is a decorator says data came from where we use this template.
  @Input() tasks : WishItem[] = []; 
}
