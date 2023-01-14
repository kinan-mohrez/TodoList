import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

   todoList: Todo[] = [
    {
      id: 1,
      title: 'Todo One',
      isCompleted: false,

      date: new Date('4-15-2022')
    },
    {
      id: 2,
      title: 'Todo Two',
      isCompleted: false,

      date: new Date('5-15-2022')
    },
    {
      id: 3,
      title: 'Todo Three',
      isCompleted: false,

      date: new Date('6-15-2022')
    }
  ];
  constructor() { }


   deleteTodo(item:Todo) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);


  }
   addTodo(title:string) {
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id,
      isCompleted: false,

      date: new Date(),
      title: title
    }
    this.todoList.unshift(item);
  }
}
