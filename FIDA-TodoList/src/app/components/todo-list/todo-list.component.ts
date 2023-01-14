import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public todoService: TodoService, public route: ActivatedRoute) { }


  viewList: boolean = true;

   ngOnInit(): void {
    this.route.url.subscribe(data => {

      if (data[0].path == 'list') {
        this.viewList = true;
      }
      else {
        this.viewList = false;

      }
    })
  }

}
