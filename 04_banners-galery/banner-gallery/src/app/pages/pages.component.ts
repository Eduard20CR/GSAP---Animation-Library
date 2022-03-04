import { Component, OnInit } from '@angular/core';
import { SiblingCommunicationService } from '../shared/services/sibling-communication/sibling-communication.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  newDivModal = false;

  constructor(private siblingsComunication: SiblingCommunicationService) { }

  ngOnInit(): void {
    this.siblingsComunication.closeModalNewDivImg.subscribe(e => {
      this.newDivModal = false;
    })
    this.siblingsComunication.openModalNewDivImg.subscribe(e => {
      this.newDivModal = true;
    })
  }

}
