import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todoInput: Todo ;

  completed: boolean = false;
  todo: Todo  ;

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  onChange() {
    console.log("changed");
    this.completed = !this.completed;

  }

  toggleClass() {
    if (this.completed) {
      console.log("todo is completed");

      // return { 'list-group-item-success': this.completed, 'border-primary': this.completed };

    }


  }
  deleteTodo(item:Todo) {
    this.todo = item;
    this.todoService.deleteTodo(item);
  }

}
