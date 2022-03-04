import { animation } from '@angular/animations';
import { AfterViewInit, Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import animationArray from '../../../../assets/data/animations/animations.json';

@Injectable({
  providedIn: 'root',
})
export class SiblingCommunicationService {
  constructor() { }

  actualAnimationType = 1;
  animatedItems = ['', ''];

  animatedItemsArray = new Subject<any>();
  sendAnimationType = new Subject<any>();
  sendSpecificAnimationSubject = new Subject<any>();
  closeModalNewDivImg = new Subject<any>();
  openModalNewDivImg = new Subject<any>();

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

  oncloseModal() {
    this.closeModalNewDivImg.next();
  }
  onOpenModal() {
    this.openModalNewDivImg.next();
  }

  getAnimatedDivs() {
    return this.animatedItems;
  }

  addANewImg() {

  }
}
