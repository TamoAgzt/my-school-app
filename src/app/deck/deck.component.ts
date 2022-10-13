import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { Heroes } from '../heroes/heroes';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
})
export class DeckComponent implements OnInit {
  heroes = Heroes;
  selectedHero?: Hero;

  constructor() {}

  ngOnInit(): void {}
}
