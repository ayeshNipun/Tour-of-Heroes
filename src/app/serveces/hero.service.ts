import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../heros-list';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes():Hero[]{
	  return HEROES;
  }

  constructor() { }
}
