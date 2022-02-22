import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-menus',
  templateUrl: './animation-menus.component.html',
  styleUrls: ['./animation-menus.component.scss'],
})
export class AnimationMenusComponent implements OnInit {
  type = 'In';
  typeArray = ['', ''];
  open = false;
  constructor() { }

  ngOnInit(): void { }
}
