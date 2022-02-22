import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-types',
  templateUrl: './animation-types.component.html',
  styleUrls: ['./animation-types.component.scss'],
})
export class AnimationTypesComponent implements OnInit {
  type = 'Slide In';
  typeArray = ['', ''];
  open = false;
  constructor() {}

  ngOnInit(): void {}
}
