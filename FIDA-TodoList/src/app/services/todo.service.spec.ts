import { async, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { TodoService } from './todo.service';
import { Todo } from '../models/todo';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
    });
    service = TestBed.inject(TodoService);

    let store = {} as any;
    const mockLocalStorge = {
      getItems:(item:string):string => {
        return item in store ? store[item] : null;
      },
      setItems: (item: string, value: string) => {
      store[item] = `${value}`;
    }
    }
    spyOn(localStorage , 'getItem').and.callFake(mockLocalStorge.getItems);
    spyOn(localStorage , 'setItem').and.callFake(mockLocalStorge.setItems);
  });


  describe ('getItem', () => {
    it('should return stored item from localStorage',() => {
      localStorage.setItem('items', 'Todo');
      expect(service.getLocalStorage('items')).toEqual('Todo');
    });
  });


  describe('setItem',  () => {
    let todoExemple : Todo[] = [{
      id : 10 ,
      title : 'titleExample',
      isCompleted :false ,
      date : new Date
    }] ;
    it ('should store Todo in localStorage', () => {
      service.setLocalStorage(todoExemple,'keyExample')
      expect(localStorage.getItem('keyExample')).toContain('titleExample');
    });
  })

})



