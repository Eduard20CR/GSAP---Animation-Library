import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SiblingCommunicationService {
  constructor() {}

  actualAnimationType = '';

  sendAnimationType = new Subject<any>();

  selectAnimationType(animationName: string,animationID:number) {
    const animationMenuData = {animationName:animationName,animationID:animationID}
    this.sendAnimationType.next(animationMenuData);
  }
}
