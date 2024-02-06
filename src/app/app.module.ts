import { AddNewTaskComponent } from './Component/add-new-task/add-new-task.component';
import { TaskFilterComponent } from './Component/task-filter/task-filter.component';
import { ListTODOsComponent } from './Component/list-todos/list-todos.component';
import { ListItemComponent } from './Component/list-item/list-item.component';
import { HeaderComponent } from './Component/header/header.component';
import { EventService } from 'src/Shared/Services/EventService';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTODOsComponent,
    AddNewTaskComponent,
    TaskFilterComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }