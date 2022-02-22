import { Component, OnInit } from '@angular/core';
import { SiblingCommunicationService } from 'src/app/shared/services/sibling-communication/sibling-communication.service';

@Component({
  selector: 'app-animation-types',
  templateUrl: './animation-types.component.html',
  styleUrls: ['./animation-types.component.scss'],
})
export class AnimationTypesComponent implements OnInit {
  text = 'asd';
  typesArray = [
    { name: 'in' },
    { name: 'out' },
    { name: 'stagger' },
    { name: 'atention' },
  ];
  constructor(private siblingsComunication: SiblingCommunicationService) {}

  ngOnInit(): void {}

  onSelectAnimationType(e) {
    this.siblingsComunication.selectAnimationType(e);
  }
}
