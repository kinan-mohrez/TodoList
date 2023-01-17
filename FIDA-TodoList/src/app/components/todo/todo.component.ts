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


  todo: Todo  ;
  chipColor : string
  completed = false;


  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    if (this.todoInput?.isCompleted){
      this.chipColor = 'gray'
      this.completed = true;
    }else{
      this.chipColor = '#86BC25'
    }
  }

  onChange(item:Todo) {

    this.todoService.completeTodo(item)

    this.chipColor = 'gray'
    this.completed = true;
  }




  deleteTodo(item:Todo) {
    this.todo = item;
    this.todoService.deleteTodo(item);
  }

}
