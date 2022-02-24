import { Component, OnInit } from '@angular/core';
import { SiblingCommunicationService } from 'src/app/shared/services/sibling-communication/sibling-communication.service';
import animationArray from './../../../assets/data/animations/animations.json'

@Component({
  selector: 'app-animation-types',
  templateUrl: './animation-types.component.html',
  styleUrls: ['./animation-types.component.scss'],
})
export class AnimationTypesComponent implements OnInit {
  text = 'asd';
  typesArray = animationArray[0].animations;
  constructor(private siblingsComunication: SiblingCommunicationService) {}

  ngOnInit(): void {}

  onSelectAnimationType(animationName, animationID) {
    this.siblingsComunication.selectAnimationType(animationName,animationID);
  }
}
