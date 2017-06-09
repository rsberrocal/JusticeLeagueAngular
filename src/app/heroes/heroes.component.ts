import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  	selector: 'heroes',
  	templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {
	title = 'Justice League';
	selectedHero: Hero = null;
	heroes: Hero[];
	i:number;
	constructor(private heroService: HeroService){}

	getHeroes(): void{
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit(): void{
		this.getHeroes();
	}

	addHero(): void{
		
		if(this.heroes.length<10){
			this.heroes.push(new Hero(this.heroes.length,'New hero'));		
			let Hero1=this.heroes[this.heroes.length-1];
			this.selectedHero=Hero1;
		}
		
	}
	deleteHero():void{	
		if(this.selectedHero === null){
			this.heroes.pop();			
		}else{
			this.i=this.heroes.indexOf(this.selectedHero);
			this.heroes.splice(this.i,1);
		}
		this.selectedHero=this.heroes[this.heroes.length-1];
		
	}
	onSelect(hero: Hero): void{
		this.selectedHero = hero;
	}
}
