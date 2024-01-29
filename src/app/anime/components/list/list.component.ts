import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'app-anime-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
  export class ListComponent{
  @Input()
  public strawhatslist: Character[]=[{
  //  id: uuid(),
    name: '',
    bounty: 0,
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeletePirate(id?:string):void{
    //To Do: emitir el ID del personaje
    if (!id) return;
    console.log({id})
    this.onDelete.emit(id);
  }
}

