import { Component } from '@angular/core';

@Component({
  selector: 'app-Hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public deletedH?:string;
  public hashiras: string[]= ['Shinobu Kocho','Mitsuri Kanroji',
  'Kyojuro Rengoku','Tengen Uzui','Giyu Tomioka','Obanai Iguro',
  'Muichiro Tokito','Sanemi Shinazugawa','Gyomei Himejima'];

  removeHashira():void {
    this.deletedH= this.hashiras.pop();

  }
}
