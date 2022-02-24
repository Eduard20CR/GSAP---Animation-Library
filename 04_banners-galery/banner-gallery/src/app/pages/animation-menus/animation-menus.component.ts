import {  Component, OnInit } from '@angular/core';
import { AnimationsDataService } from 'src/app/shared/services/animations-data/animations-data.service';
import { SiblingCommunicationService } from 'src/app/shared/services/sibling-communication/sibling-communication.service';

@Component({
  selector: 'app-animation-menus',
  templateUrl: './animation-menus.component.html',
  styleUrls: ['./animation-menus.component.scss'],
})
export class AnimationMenusComponent implements OnInit{
  type = 'In';
  typeArray = ['', ''];
  open = false;
  animationMenuData;
  
  actualMenu=0;
  animationsData;

  constructor(private siblingsComunication: SiblingCommunicationService, private animationsDataService: AnimationsDataService) {}

  ngOnInit(): void {
    
    this.animationsData = this.animationsDataService.returnAnimations();
    console.log(this.animationsData)
    this.siblingsComunication.sendAnimationType.subscribe((e) => {
      this.type = e.animationName;
      this.animationMenuData = this.animationsData[0].animations[e.animationID-1].animationTypeArray;
    });
    this.animationMenuData = this.animationsData[0].animations[this.actualMenu].animationTypeArray;
console.log(this.animationMenuData);


  }


  
}