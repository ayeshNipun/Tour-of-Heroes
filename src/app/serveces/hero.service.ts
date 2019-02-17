import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../heros-list';
import { Observable, of } from 'rxjs';
import { MessageService } from '../serveces/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes():Observable<Hero[]>{
	  return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
