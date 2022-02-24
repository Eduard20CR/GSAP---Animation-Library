import { Injectable } from '@angular/core';
import animationArray from '../../../../assets/data/animations/animations.json'
@Injectable({
  providedIn: 'root'
})
export class AnimationsDataService {

  constructor() { }

  returnAnimations(){
    return animationArray;
  }
}
