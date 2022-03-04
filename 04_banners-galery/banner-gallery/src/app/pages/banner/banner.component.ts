import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from "gsap";
import { AnimationsDataService } from 'src/app/shared/services/animations-data/animations-data.service';
import { SiblingCommunicationService } from 'src/app/shared/services/sibling-communication/sibling-communication.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, AfterViewInit {
  width = 300;
  height = 250;
  @ViewChildren('box') boxes;
  @ViewChild('banner', { static: true }) banner: ElementRef;
  animatedDiv: any[] = [];

  //animation selected
  stagger = false;
  actualAnimation = ``;
  animationType;
  animationSection;
  animationName;
  //timeline
  tt = gsap.timeline()

  constructor(private animationDataService: AnimationsDataService, private siblingComunicationService: SiblingCommunicationService, private renderer: Renderer2) {

  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.animatedDiv.push('');
    // }, 0);
    //send baner size
    this.animationDataService.setBannerWidth(this.width);
    this.animationDataService.setBannerHeight(this.height);
    this.setAnimationRegister()
    //declare divs
    this.setDiv();
    //when you select an animation
    this.siblingComunicationService.sendSpecificAnimationSubject.subscribe(e => {
      this.actualAnimation = e.animation;
      this.animationType = e.animationType;
      this.animationSection = e.animationTypeSection;
      this.animationName = e.animationTypeSectionName;
      this.tt.seek(0);
      this.tt.clear();
      this.reset();
      this.setTimeline()
    })
  }

  onOpenModal() {
    this.animatedDiv.push('')
    // this.siblingComunicationService.onOpenModal();
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
    this.onsetBannerWidth();
    this.setStyles();
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
    this.onsetBannerHeight();
    this.setStyles();
  }


  // Methods
  setAnimationRegister() {
    this.animationDataService.setAnimations();
  }
  // inicialise timeline
  setTimeline() {
    eval(this.actualAnimation)
  }

  // reset timline and styles
  onResetAnimation() {
    this.tt.seek(0);
    this.tt.clear();
    this.setTimeline();
    this.tt.restart()
  }
  //send banner size
  onsetBannerHeight() {
    this.animationDataService.setBannerHeight(this.height);
  }
  onsetBannerWidth() {
    this.animationDataService.setBannerWidth(this.width);
  }

  //set animated divs
  setDiv() {
    this.animatedDiv = [];
    this.boxes.toArray().forEach(element => {
      this.animatedDiv.push(element.nativeElement)
    });

  }


  //---------------------------------Set Styles----------------------------------------
  setStyles() {
    switch (this.animationType) {
      //---------------------------------IN----------------------------------------
      case 'in':
        switch (this.animationSection) {
          case 'slide in':
            switch (this.animationName) {
              case 'left':
                this.left();
                break;
              case 'right':
                this.right();
                break;
              case 'top':
                this.top();
                break;
              case 'bottom':
                this.bottom();
                break;

              default:
                break;
            }
            break;
          case 'fade in':
            switch (this.animationName) {
              case 'center':
                this.opacity(0);
                break;
              case 'left':
                this.left(10);
                this.opacity(0);
                break;
              case 'right':
                this.right(10);
                this.opacity(0);
                break;
              case 'top':
                this.top(10);
                this.opacity(0);
                break;
              case 'bottom':
                this.bottom(10);
                this.opacity(0);
                break;

              default:
                break;
            }
            break;
          case 'scale in':
            switch (this.animationName) {
              case 'center':
                this.scale(0)
                break;
              default:
                break;
            }
            break;
          case 'flip in':
            switch (this.animationName) {
              case 'x':
                this.flipX(-90)
                break;
              case 'y':
                this.flipY(-90)
                break;
              default:
                break;
            }
            break;

        }
        break;

      //---------------------------------OUT----------------------------------------
      case 'out':


        break;
      //---------------------------------stagger----------------------------------------
      case 'stagger':

        break;
      //---------------------------------atention----------------------------------------
      case 'atention':

        break;

      default:
        break;
    }
  }


  left(amount?) {
    this.animatedDiv.forEach(e => {
      gsap.set(e, { left: amount == null ? -this.width : -amount, top: 0 })
    })
  }
  right(amount?) {
    this.animatedDiv.forEach(e => {
      gsap.set(e, { left: amount == null ? this.width : amount, top: 0 })
    })
  }
  top(amount?) {
    this.animatedDiv.forEach(e => {
      gsap.set(e, { left: 0, top: amount == null ? -this.height : -amount })
    })
  }
  bottom(amount?) {
    this.animatedDiv.forEach(e => {
      gsap.set(e, { left: 0, top: amount == null ? this.height : amount })
    })
  }
  reset() {
    this.animatedDiv.forEach(e => {
      gsap.set(e, { top: -1, left: -1, opacity: 1, scale: 1, rotateY: 0, rotateX: 0 })
    })
    this.setStyles();
  }
  opacity(amount?) {
    this.animatedDiv.forEach(e => {
      gsap.set(e, { opacity: amount })
    })
  }
  scale(amount?) {
    this.animatedDiv.forEach(e => {
      gsap.set(e, { scale: amount })
    })
  }
  flipY(amount?) {
    this.animatedDiv.forEach(e => {
      gsap.set(e, { rotateY: amount })
    })
  }
  flipX(amount?) {
    this.animatedDiv.forEach(e => {
      gsap.set(e, { rotateX: amount })
    })
  }
}




