import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',

})
export class FormularioComponent {
  /*
  Nombre de la propiedad: onNewCharacter |   Tipo de objeto: EventEmitter<>
  Interfaz: Character   **la interfaz es el tipo de dato** |   Instancia= new EventEmitter()
  Decorador: @Output()
  */
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character={
    name:'',
    bounty:0
  };

  emitCharacter():void{

    console.log('inicio')
    console.log(this.character);

    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);

    this.character={ name:" ", bounty:0};
  }

}
