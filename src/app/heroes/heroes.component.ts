import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../serveces/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[];
  selectedHero : Hero;

  getHeroes(){
	  this.heroService.getHeroes().subscribe(heroes => {
		  this.heroes = heroes
	  });
  }

  onSelect(hero){
	this.selectedHero = hero;
  }

  ngOnInit() {
	  this.getHeroes()
  }

}
