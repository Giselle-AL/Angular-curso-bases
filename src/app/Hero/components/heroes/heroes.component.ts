import { Component } from '@angular/core';

@Component({
  selector: 'app-Hero-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  public name:string = 'Ironman';
  public age:number=45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name='Epaieman';
  }

  changeAge():void{
    this.age=23;
  }

  resetF():void{
    this.name = 'Ironman';
    this.age=45;
  }
}
