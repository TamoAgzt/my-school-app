import { DeclareVarStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  //hero = Hero;
  heroes = Heroes;
  selectedHero?: Hero;
  deckedHero?: Hero;

  constructor() {}

  ngOnInit() {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  addSelected(selectedHero: Hero): void {
    this.deckedHero = selectedHero;
    this.deckedHero.inDeck = true;
  }

  trackHero(hero: Hero) {
    return hero ? hero.inDeck : true;
  }
}
