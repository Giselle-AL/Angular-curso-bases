import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [
    ListComponent,
    HeroesComponent
  ],
  exports: [
    ListComponent,
    HeroesComponent
  ],
  imports:[
    CommonModule
  ]
})
export class HeroModule { }
