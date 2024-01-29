import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FormsModule } from '@angular/forms';
import { ListTODOsComponent } from './Component/list-todos/list-todos.component';
import { AddNewTaskComponent } from './Component/add-new-task/add-new-task.component';
import { TaskFilterComponent } from './Component/task-filter/task-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTODOsComponent,
    AddNewTaskComponent,
    TaskFilterComponent
    ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }