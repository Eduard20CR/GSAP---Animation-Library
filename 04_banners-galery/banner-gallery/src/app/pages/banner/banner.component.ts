import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  width = 300;
  height = 250;
  @ViewChild('widthValue', { static: true }) widthValue;
  constructor() {}

  ngOnInit(): void {}

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
}
