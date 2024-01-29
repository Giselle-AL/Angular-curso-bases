import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { OPService } from '../services/anime.service';

@Component({
  selector: 'app-anime-main-page',
  templateUrl: 'main-page.component.html'
})
export class MainPageComponent {
  constructor( private opService:OPService){ }

  get Pirates(): Character[]{
    return [...this.opService.strawhats];
  }

  onDeleteCharacter(id:string):void{
    this.opService.deleteCharacterbyID( id );
  }

  onNewCharacter(character:Character):void{
    this.opService.addCharacter(character);
  }

}
