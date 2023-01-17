import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { TodoAddFormComponent } from './todo-add-form.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from '../todo/todo.component';
import {MatChipsModule} from '@angular/material/chips';

describe('TodoAddFormComponent', () => {
  let component: TodoAddFormComponent;
  let fixture: ComponentFixture<TodoAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TodoAddFormComponent,
        TodoComponent
      ],
      imports: [ToastrModule.forRoot(),
      FormsModule,
      MatChipsModule
      ],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('add button should be not disable (is not in required state)', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {

      let inputText : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#todo');
      inputText.value = 'todo 10';
      inputText.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        let button :  HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#AddButton');
        expect(button.disabled).toBeFalsy();
        expect(component.todo).toEqual('todo 10');
      });
    });
  }));


  it('add button should be disable (is in required state)', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {

      const inputText : HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#todo');
      inputText.value = '';
      inputText.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const button :  HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#AddButton');
        expect(button.disabled).toBeTruthy();
        expect(component.todo).toEqual('');
      });
    });
  }));
});
