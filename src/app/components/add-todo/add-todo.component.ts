import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.title == 'undefined' || this.title == undefined){
      alert('Please enter a valid text to the task\'s form');
      return;
    }

    const todo = {
      title: this.title,
      completed: false,
    }

    this.addTodo.emit(todo);
  }
}
