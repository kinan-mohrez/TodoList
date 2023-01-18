import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-add-form',
  templateUrl: './todo-add-form.component.html',
  styleUrls: ['./todo-add-form.component.css']
})
export class TodoAddFormComponent  {

  todo = '';

  constructor(public todoService: TodoService) { }



  onSubmit(){
    this.todoService.addTodo(this.todo);
    this.todo = '';

  }

}
