import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
// import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  heroes: Hero[]
  selectedHero: Hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
  getHeroes(): void {
    this.heroServive.getHeroes().subscribe(heroes => (this.heroes = heroes))
  }
  constructor(private heroServive: HeroService) {}
  ngOnInit() {
    this.getHeroes()
  }
}
