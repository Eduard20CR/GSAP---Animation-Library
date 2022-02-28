import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from "gsap";
import { AnimationsDataService } from 'src/app/shared/services/animations-data/animations-data.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, AfterViewInit {
  width = 300;
  height = 250;
  @ViewChild('box1', { static: true }) box1:ElementRef;
  @ViewChild('banner', { static: true }) banner:ElementRef;

  tt = gsap.timeline()
  
  constructor(private animationDataService: AnimationsDataService) {}

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.animationDataService.setBannerWidth(this.width);
    this.animationDataService.setBannerHeight(this.height);
    this.setAnimationRegister()
    this.setTimeline();
  }

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
    this.onsetBannerWidth();
    
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
    this.onsetBannerHeight();
    
  }


    // Methods
    setAnimationRegister(){
      this.animationDataService.setAnimations();
    }
    
    setTimeline(){
      const divAnimated = this.box1.nativeElement;
      this.tt.scale(divAnimated,{scale:2})
    }
    
    onResetAnimation(){
      this.tt.seek(0);
      this.tt.clear();
      this.setTimeline();
      this.tt.restart()
      
    }
  
    onsetBannerHeight(){
      this.animationDataService.setBannerHeight(this.height);
    }
    onsetBannerWidth(){
      this.animationDataService.setBannerWidth(this.width);
    }
}


