import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList : Todo[]

  constructor(private deletePopup: ToastrService, private AddItemPopup: ToastrService, private compliteItemPopup: ToastrService) {
    if (JSON.parse(localStorage.getItem('TodoListLocalStorage')!) !== null) {
    this.todoList  =  JSON.parse(localStorage.getItem('TodoListLocalStorage')!)
      }
      else
      { this.todoList =[
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
   }}

// delete todo
   deleteTodo(item:Todo) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.deletePopup.error(`Todo ${item.id} Deleted!`);
    localStorage.setItem('TodoListLocalStorage', JSON.stringify(this.todoList));
  }
  // Add todo
   addTodo(title:string) {
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id,
      isCompleted: false,
      date: new Date(),
      title: title
    }
    this.todoList.unshift(item);
    this.AddItemPopup.success(` ${item.title} Added!`);
    localStorage.setItem('TodoListLocalStorage', JSON.stringify(this.todoList));
  }

  // complited todo item
  completeTodo (item : Todo) {
    item.isCompleted = true;
    console.log(item.isCompleted)
    this.compliteItemPopup.info(` ${item.title} Todo succesfully completed!`);
    localStorage.setItem('TodoListLocalStorage', JSON.stringify(this.todoList));
  }
}
