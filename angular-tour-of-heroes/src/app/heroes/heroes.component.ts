import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from './../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  
  heroes = HEROES;

  //  hero: Hero = {
  //   id: 1,
  //   name: 'windstorm',
  // };

  // hero가 클릭됐을때 발생되는 함수, 어플리케이션을 처음 작동했을 때는 hero가 선택되지 않았기 때문에
  // selectedHero에 값을 할당하지 않는다.
  selectedHero? : Hero;
  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

  constructor() {}

  ngOnInit(): void {}
}
