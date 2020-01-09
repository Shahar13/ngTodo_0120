import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../modules/Todo' ;

@Component({
  selector: 'app-Todos',
  templateUrl: './Todos.component.html',
  styleUrls: ['./Todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  // USE THIS TO IMPORT SERVICES
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    // to a regular Return we ll write:
    // this.todos = this.todoService.getTodos(); 
    // but we are in a Promise/Observable so we need that instead:
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo){
    console.log('Deleting the following todo.id:');
    console.log(todo.id);
    // delete from UI
    this.todos = this.todos.filter( t => t.id !== todo.id);
    // delete from SERVER
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo){
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
      console.log(todo);
    })
  }
}
