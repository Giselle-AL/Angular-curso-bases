import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter desde component {{counter}} </h3>

    <button class="btn btn-success mx-1" (click)="increase(-1)">-1</button>
    <button class="btn btn-info mx-1" (click)="reset()">Reset</button>
    <button class="btn btn-success mx-1" (click)="increase(1)">+1</button>

  `
})

export class CounterComponent {
  constructor() { }
  public counter: number= 10;

  increase(value:number){
    this.counter+=value;
  }
  reset(){
    this.counter=10;
  }

}
