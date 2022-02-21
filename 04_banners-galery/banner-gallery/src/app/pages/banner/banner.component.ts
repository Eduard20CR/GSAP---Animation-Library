import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  width = 200;
  height = 200;
  @ViewChild('widthValue', { static: true }) widthValue;
  constructor() {}

  ngOnInit(): void {}

  onIputUpdate(e) {
    let num = +e.value;

    if (num > 1000) {
      console.log(num);
      this.width = 1000;
    }
  }
}
