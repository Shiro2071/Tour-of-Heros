import { Component, OnInit } from '@angular/core';

import {Hero} from './hero'
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //hero :Hero = {
  //  id: 1,
  //  name: 'Superman' 
  //}
  
  selectedHero: Hero;
  
  onSelect(hero: Hero): void {
    if (this.selectedHero == hero) {this.selectedHero.id = 0; this.selectedHero.name = '' } 
    this.selectedHero = hero;
   }

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
