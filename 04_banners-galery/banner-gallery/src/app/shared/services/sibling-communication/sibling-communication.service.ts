import { animation } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import animationArray from '../../../../assets/data/animations/animations.json';

@Injectable({
  providedIn: 'root',
})
export class SiblingCommunicationService {
  constructor() { }

  actualAnimationType = 1;

  sendAnimationType = new Subject<any>();
  sendSpecificAnimationSubject = new Subject<any>();

  selectAnimationType(animationName: string, animationID: number) {
    this.actualAnimationType = animationID;
    const animationMenuData = { animationName: animationName, animationID: animationID }
    this.sendAnimationType.next(animationMenuData);
  }

  sendSpecificAnimation(section, id) {
    const animation = animationArray[0].animations[this.actualAnimationType - 1].animationTypeArray[section].animationsArray[id].animationGsap;
    const animationType = animationArray[0].animations[this.actualAnimationType - 1].type
    const animationTypeSection = animationArray[0].animations[this.actualAnimationType - 1].animationTypeArray[section].title
    const animationTypeSectionName = animationArray[0].animations[this.actualAnimationType - 1].animationTypeArray[section].animationsArray[id].animationName


    this.sendSpecificAnimationSubject.next({ animation, animationType, animationTypeSection, animationTypeSectionName })
  }
}
