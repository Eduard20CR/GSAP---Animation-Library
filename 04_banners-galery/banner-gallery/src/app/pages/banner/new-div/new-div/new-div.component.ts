import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SiblingCommunicationService } from 'src/app/shared/services/sibling-communication/sibling-communication.service';


@Component({
  selector: 'app-new-div',
  templateUrl: './new-div.component.html',
  styleUrls: ['./new-div.component.scss']
})
export class NewDivComponent implements OnInit {

  width = 300;
  height = 250;
  widthItem = 300;
  heightItem = 250;
  urlImage: any;
  action = "New Image"
  @ViewChild("item") background: ElementRef;
  constructor(private siblingsComunication: SiblingCommunicationService) { }

  ngOnInit(): void {
  }


  //when banner width is changed
  onIputUpdateWidth(e) {
    let num = +e.value;

    if (num < 1000 || num > 0) {
      this.width = num;
    }
    if (num > 1000) {
      this.width = 1000;
    }
    if (num < 0) {
      this.width = 0;
    }
  }
  //when banner height is changed
  onIputUpdateHeight(e) {
    let num = +e.value;

    if (num < 1000 || num > 0) {
      this.height = num;
    }
    if (num > 1000) {
      this.height = 1000;
    }
    if (num < 0) {
      this.height = 0;
    }
  }
  //when banner width is changed
  onIputUpdateWidthItem(e) {
    let num = +e.value;

    if (num < 1000 || num > 0) {
      this.widthItem = num;
    }
    if (num > 1000) {
      this.widthItem = 1000;
    }
    if (num < 0) {
      this.widthItem = 0;
    }
  }
  //when banner height is changed
  onIputUpdateHeightItem(e) {
    let num = +e.value;

    if (num < 1000 || num > 0) {
      this.heightItem = num;
    }
    if (num > 1000) {
      this.heightItem = 1000;
    }
    if (num < 0) {
      this.heightItem = 0;
    }
  }
  newimg(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.urlImage = reader.result;
      reader.readAsDataURL(file);
    }
  }
  onCloseModal() {
    this.siblingsComunication.oncloseModal();
  }
}
