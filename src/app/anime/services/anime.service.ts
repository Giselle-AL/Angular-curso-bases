import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
//el decorador de injectable nos indica que se trata de un servicio
export class OPService {

  public strawhats: Character[]=[{
      id: uuid(),
      name: 'Bartolomeo',
      bounty: 200000000,
    }, {
      id: uuid(),
      name:'Shanks',
      bounty: 4048900000,
    }, {
      id: uuid(),
      name:'Buggy',
      bounty:3189000000,
    }];

    addCharacter(character:Character):void{

      const newCharacter:Character = { id: uuid(), ...character};

      this.strawhats.push(newCharacter);
    }

    /*onDeleteCharacter(i:number):void{
      this.strawhats.splice(i,1);
    } */
    deleteCharacterbyID(id:string){
      this.strawhats= this.strawhats.filter(strawhats=>strawhats.id !== id);
    }
}
