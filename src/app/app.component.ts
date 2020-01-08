import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Shahar\'s Angular';
  title1:string = 'Mai\'s ToDoList app';

  //USE THIS TO IMPORT SERVICES
  constructor(){
    console.log('Shahar');
    this.title = this.title1;
    this.changeName('Yfat');
  }

  changeName(title:string):void{
    this.title = title;
  }
}
