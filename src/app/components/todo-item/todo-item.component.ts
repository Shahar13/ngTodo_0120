import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import {Todo} from 'src/app/modules/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  //set dynamic classes
  setClasses(){
    let classes = {
      todo: true,
      'is_completed': this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    // toggle on UI
    todo.completed = !todo.completed;
    // console.log(todo.completed);

    //toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }

  onDelete(todo){
    // console.log('Delete');
    this.deleteTodo.emit(todo);
  }
}
