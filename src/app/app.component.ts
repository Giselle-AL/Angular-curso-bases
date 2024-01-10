import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Counter 2.0';
  public counter: number= 10;

  increase(value:number){
    this.counter+=value;
  }
  reset(){
    this.counter=10;
  }
}
