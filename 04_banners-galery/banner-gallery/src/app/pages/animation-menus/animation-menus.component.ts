import { Component, OnInit } from '@angular/core';
import { SiblingCommunicationService } from 'src/app/shared/services/sibling-communication/sibling-communication.service';

@Component({
  selector: 'app-animation-menus',
  templateUrl: './animation-menus.component.html',
  styleUrls: ['./animation-menus.component.scss'],
})
export class AnimationMenusComponent implements OnInit {
  type = 'In';
  typeArray = ['', ''];
  open = false;
  constructor(private siblingsComunication: SiblingCommunicationService) {}

  ngOnInit(): void {
    // this.type
    this.siblingsComunication.sendAnimationType.subscribe((e) => {
      this.type = e;
    });
  }
}
