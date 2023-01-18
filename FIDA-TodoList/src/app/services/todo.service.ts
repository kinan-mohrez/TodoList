import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList : Todo[];
  localStorge_KEY: string = 'TodoListLocalStorage';

    // set localStorage
   setLocalStorage (TODOlist : Todo[] , key: string) {
    localStorage.setItem(key, JSON.stringify(TODOlist));
   }


    // get localStorage
    getLocalStorage (key : string) {
      return localStorage.getItem(key);
    }

  constructor(private Popup: ToastrService) {


    if (JSON.parse(this.getLocalStorage(this.localStorge_KEY)!) !== null) {
    this.todoList  =  JSON.parse(this.getLocalStorage(this.localStorge_KEY)!)
      }
      else
      {
        this.todoList =[
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
    this.Popup.error(`Todo ${item.title} Deleted!`);

    this.setLocalStorage(this.todoList ,this.localStorge_KEY);
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
    this.Popup.success(` ${item.title} Added!`);
    this.setLocalStorage(this.todoList ,this.localStorge_KEY);
  }

  // complited todo item
  completeTodo (item : Todo) {
    item.isCompleted = true;
    console.log(item.isCompleted)
    this.Popup.info(` ${item.title} Todo succesfully completed!`);

    this.setLocalStorage(this.todoList , this.localStorge_KEY);
  }
}
