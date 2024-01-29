import {Component, Input} from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'app-anime-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
  export class ListComponent{
  @Input()
  public strawhatslist: Character[]=[{
    name: 'Cavendish',
    bounty: 3300000
  }]
}

