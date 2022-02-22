import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-types',
  templateUrl: './animation-types.component.html',
  styleUrls: ['./animation-types.component.scss']
})
export class AnimationTypesComponent implements OnInit {
  text = "asd"
  typesArray = [{ name: 'in' }, { name: 'out' }, { name: 'stagger' }, { name: 'atention' }]
  constructor() { }

  ngOnInit(): void {
  }

}
