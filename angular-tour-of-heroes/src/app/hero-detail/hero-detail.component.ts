import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {

  // heroes컴포넌트의 자식컴포넌트이고 heroes에서 detail로 히어로객체를 전달받기 때문에 input으로 표기해준다.
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
