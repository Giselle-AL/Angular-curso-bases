import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-anime-main-page',
  templateUrl: 'main-page.component.html'
})
export class MainPageComponent {
  constructor(public opService:OPService){ }

}
