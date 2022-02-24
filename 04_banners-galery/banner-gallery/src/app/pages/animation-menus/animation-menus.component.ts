import { Component, OnInit } from '@angular/core';
import { SiblingCommunicationService } from 'src/app/shared/services/sibling-communication/sibling-communication.service';
import animationArray from './../../../assets/data/animations/animations.json'
@Component({
  selector: 'app-animation-menus',
  templateUrl: './animation-menus.component.html',
  styleUrls: ['./animation-menus.component.scss'],
})
export class AnimationMenusComponent implements OnInit {
  type = 'In';
  typeArray = ['', ''];
  open = false;
  animationMenuData;
  actualMenu=0;

  constructor(private siblingsComunication: SiblingCommunicationService) {}

  ngOnInit(): void {
    // this.type
    this.siblingsComunication.sendAnimationType.subscribe((e) => {
      this.type = e;
    });
    this.animationMenuData = animationArray[0].animations[this.actualMenu];
  }
}
