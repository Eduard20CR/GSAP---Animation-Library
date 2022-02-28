import { Injectable, OnInit } from '@angular/core';
import animationArray from '../../../../assets/data/animations/animations.json'
import { gsap } from "gsap";

@Injectable({
  providedIn: 'root'
})
export class AnimationsDataService implements OnInit{

  bannerWidth;
  bannerHeight;
  constructor() { }

ngOnInit(){}

setAnimations(){
  
 gsap.registerEffect({
    name: "slideIn",
    effect: (targets, config) => {
        switch (config.direction) {
            case 'left':
                return gsap.to(targets, {
                    duration: config.duration,
                    x: "+=" + this.bannerWidth,
                    ease: config.ease,
                    opacity: config.opacity
                });

            case 'right':
                return gsap.to(targets, {
                    duration: config.duration,
                    x: "+=" + -this.bannerWidth,
                    ease: config.ease,
                    opacity: config.opacity
                });

            case 'top':
                return gsap.to(targets, {
                    duration: config.duration,
                    y: "+=" + this.bannerHeight,
                    ease: config.ease,
                    opacity: config.opacity
                });

            case 'bottom':
                return gsap.to(targets, {
                    duration: config.duration,
                    y: "+=" + -this.bannerHeight,
                    ease: config.ease,
                    opacity: config.opacity
                });

            default:
                return console.error("You hace to put a direction: '{direction:''}'");

        }
    },
    defaults: { duration: 1, ease: 'power1.inOut', opacity: 1 },
    extendTimeline: true
});



    //SLIDE OUT
    gsap.registerEffect({
      name: "slideOut",
      effect: (targets, config) => {
          switch (config.direction) {
              case 'right':
                  return gsap.to(targets, {
                      duration: config.duration,
                      x: "+=" + this.bannerWidth,
                      ease: config.ease,
                      opacity: config.opacity
                  });

              case 'left':
                  return gsap.to(targets, {
                      duration: config.duration,
                      x: "+=" + -this.bannerWidth,
                      ease: config.ease,
                      opacity: config.opacity
                  });

              case 'bottom':
                  return gsap.to(targets, {
                      duration: config.duration,
                      y: "+=" + this.bannerHeight,
                      ease: config.ease,
                      opacity: config.opacity
                  });

              case 'top':
                  return gsap.to(targets, {
                      duration: config.duration,
                      y: "+=" + -this.bannerHeight,
                      ease: config.ease,
                      opacity: config.opacity
                  });

              default:
                  return console.error("You hace to put a direction: '{direction:'left/right/top/bottom'}'");

          }

      },
      defaults: { duration: 1, ease: 'power1.inOut', opacity: 1 },
      extendTimeline: true
  });
  // SLIDE IN
  gsap.registerEffect({
      name: "slideIn",
      effect: (targets, config) => {
          switch (config.direction) {
              case 'left':
                  return gsap.to(targets, {
                      duration: config.duration,
                      x: "+=" + this.bannerWidth,
                      ease: config.ease,
                      opacity: config.opacity
                  });

              case 'right':
                  return gsap.to(targets, {
                      duration: config.duration,
                      x: "+=" + -this.bannerWidth,
                      ease: config.ease,
                      opacity: config.opacity
                  });

              case 'top':
                  return gsap.to(targets, {
                      duration: config.duration,
                      y: "+=" + this.bannerHeight,
                      ease: config.ease,
                      opacity: config.opacity
                  });

              case 'bottom':
                  return gsap.to(targets, {
                      duration: config.duration,
                      y: "+=" + -this.bannerHeight,
                      ease: config.ease,
                      opacity: config.opacity
                  });

              default:
                  return console.error("You hace to put a direction: '{direction:''}'");

          }
      },
      defaults: { duration: 1, ease: 'power1.inOut', opacity: 1 },
      extendTimeline: true
  });
  //SCALE IN 
  gsap.registerEffect({
      name: "scaleIn",
      effect: (targets, config) => {
          return gsap.to(targets, {
              duration: config.duration,
              scale: config.scale,
              ease: config.ease,
              x: "+=" + config.x,
              y: "+=" + config.y,
          });
      },
      defaults: { duration: 1, ease: 'power1.inOut', scale: 1 },
      extendTimeline: true
  });
  //SCALE OUT
  gsap.registerEffect({
      name: "scaleOut",
      effect: (targets, config) => {
          return gsap.to(targets, {
              duration: config.duration,
              scale: config.scale,
              ease: config.ease,
              x: "+=" + config.x,
              y: "+=" + config.y,
          });
      },
      defaults: { duration: 1, ease: 'power1.inOut', scale: 0 },
      extendTimeline: true
  });
  //FADE IN
  gsap.registerEffect({
      name: "fadeIn",
      effect: (targets, config) => {
          return gsap.to(targets, {
              duration: config.duration,
              opacity: config.opacity,
              ease: config.ease
          });
      },
      defaults: { duration: 1, ease: 'power1.inOut', opacity: 1 },
      extendTimeline: true
  });
  //FADE OUT
  gsap.registerEffect({
      name: "fadeOut",
      effect: (targets, config) => {
          return gsap.to(targets, {
              duration: config.duration,
              opacity: config.opacity,
              ease: config.ease
          });
      },
      defaults: { duration: 1, ease: 'power1.inOut', opacity: 0 },
      extendTimeline: true
  });
  //FLIP IN (Y)
  gsap.registerEffect({
      name: "flipYIn",
      effect: (targets, config) => {
          return gsap.to(targets, {
              duration: config.duration,
              opacity: config.opacity,
              rotateY: "+=" + config.rotateY,
              ease: config.ease
          });
      },
      defaults: { duration: 1, ease: 'power1.inOut', opacity: 1, rotateY: 90 },
      extendTimeline: true
  });
  //FLIP OUT (Y)
  gsap.registerEffect({
      name: "flipYOut",
      effect: (targets, config) => {
          return gsap.to(targets, {
              duration: config.duration,
              opacity: config.opacity,
              rotateY: "+=" + config.rotateY,
              ease: config.ease
          });
      },
      defaults: { duration: 1, ease: 'power1.inOut', opacity: 0, rotateY: 90 },
      extendTimeline: true
  });
  //FLIP IN (X)
  gsap.registerEffect({
      name: "flipXIn",
      effect: (targets, config) => {
          return gsap.to(targets, {
              duration: config.duration,
              opacity: config.opacity,
              rotateX: "+=" + config.rotateX,
              ease: config.ease
          });
      },
      defaults: { duration: 1, ease: 'power1.inOut', opacity: 1, rotateX: 90 },
      extendTimeline: true
  });
  //FLIP OUT (X)
  gsap.registerEffect({
      name: "flipXOut",
      effect: (targets, config) => {
          return gsap.to(targets, {
              duration: config.duration,
              opacity: config.opacity,
              rotateX: "+=" + config.rotateX,
              ease: config.ease
          });
      },
      defaults: { duration: 1, ease: 'power1.inOut', opacity: 0, rotateX: 90 },
      extendTimeline: true
  });
  //FADE IN DIRECTION
  gsap.registerEffect({
      name: "fadeInDirection",
      effect: (targets, config) => {
          switch (config.direction) {
              case 'bottom':
                  return gsap.to(targets, {
                      duration: config.duration,
                      opacity: config.opacity,
                      y: "+=" + -config.y,
                      ease: config.ease
                  });

              case 'top':
                  return gsap.to(targets, {
                      duration: config.duration,
                      opacity: config.opacity,
                      y: "+=" + config.y,
                      ease: config.ease
                  });

              case 'right':
                  return gsap.to(targets, {
                      duration: config.duration,
                      opacity: config.opacity,
                      x: "+=" + -config.x,
                      ease: config.ease
                  });

              case 'left':
                  return gsap.to(targets, {
                      duration: config.duration,
                      opacity: config.opacity,
                      x: "+=" + config.x,
                      ease: config.ease
                  });

              default:
                  return console.error("You hace to put a direction: '{direction:''}'");

          }
      },
      defaults: { duration: .5, ease: 'power1.inOut', opacity: 1, x: 10, y: 10 },
      extendTimeline: true
  });
  //FADE OUT DIRECTION
  gsap.registerEffect({
      name: "fadeOutDirection",
      effect: (targets, config) => {
          switch (config.direction) {
              case 'top':
                  return gsap.to(targets, {
                      duration: config.duration,
                      opacity: config.opacity,
                      y: "+=" + -config.y,
                      ease: config.ease
                  });

              case 'bottom':
                  return gsap.to(targets, {
                      duration: config.duration,
                      opacity: config.opacity,
                      y: "+=" + config.y,
                      ease: config.ease
                  });

              case 'left':
                  return gsap.to(targets, {
                      duration: config.duration,
                      opacity: config.opacity,
                      x: "+=" + -config.x,
                      ease: config.ease
                  });

              case 'right':
                  return gsap.to(targets, {
                      duration: config.duration,
                      opacity: config.opacity,
                      x: "+=" + config.x,
                      ease: config.ease
                  });

              default:

                  return console.error("You hace to put a direction: '{direction:''}'");

          }
      },
      defaults: { duration: .5, ease: 'power1.inOut', opacity: 0, x: 10, y: 10 },
      extendTimeline: true
  });
  //SCALE
  gsap.registerEffect({
      name: "scale",
      effect: (targets, config) => {

          if (config.scale) {
              return gsap.to(targets, {
                  duration: config.duration,
                  scale: config.scale,
                  x: "+=" + config.x,
                  y: "+=" + config.y,
                  ease: config.ease
              });

          } else {
              return console.error("You hace to put a 'scale' property");
          }
      },
      defaults: { duration: 1, ease: 'power1.inOut', scale: 1 },
      extendTimeline: true
  });
  //MOVE
  gsap.registerEffect({
      name: "move",
      effect: (targets, config) => {
          if (config.x || config.y) {
              return gsap.to(targets, {
                  duration: config.duration,
                  x: "+=" + config.x,
                  y: "+=" + config.y,
                  ease: config.ease
              });
          } else {
              return console.error("You hace to put a 'x' or 'y' animation");
          }
      },
      defaults: { duration: 1, x: 0, y: 0, ease: 'power1.inOut' },
      extendTimeline: true
  });
  //OPACITY
  gsap.registerEffect({
      name: "opacity",
      effect: (targets, config) => {
          if (config.opacity) {
              return gsap.to(targets, {
                  duration: config.duration,
                  opacity: config.opacity,
                  ease: config.ease
              });
          } else {
              return console.error("You hace to put a 'opacity' value");
          }
      },
      defaults: { duration: 1, opacity: 1, ease: 'power1.inOut' },
      extendTimeline: true
  });
  //ROTATE
  gsap.registerEffect({
      name: "rotate",
      effect: (targets, config) => {
          if (config.rotate) {
              return gsap.to(targets, {
                  duration: config.duration,
                  rotate: "+=" + config.rotate,
                  ease: config.ease
              });
          } else {
              return console.error("You hace to put a 'opacity' value");
          }
      },
      defaults: { duration: 1, rotate: 0, ease: 'power1.inOut' },
      extendTimeline: true
  });


  // -------------ATENTION----------------
  //PULSE ATENTION
  gsap.registerEffect({
      name: "pulseAtention",
      effect: (targets, config) => {
          return gsap.timeline().to(targets, {
              duration: config.duration,
              scale: config.scale,
              ease: config.ease,
              x: "+=" + config.x,
              y: "+=" + config.y,
              repeat: config.repeat,
              yoyo: true
          })
      },
      defaults: { duration: .3, ease: 'power1.inOut', scale: 1.2, repeat: 1 },
      extendTimeline: true
  });
  //BOUNCE ATENTION
  gsap.registerEffect({
      name: "bounceAtention",
      effect: (targets, config) => {
          switch (config.direction) {
              case 'top':
                  return gsap.timeline().to(targets, {
                      duration: config.duration / 2,
                      y: config.y,
                      ease: "+=" + config.ease
                  }).to(targets, {
                      duration: config.duration,
                      y: "+=" + -config.y,
                      ease: "bounce.out"
                  });
              case 'bottom':
                  return gsap.timeline().to(targets, {
                      duration: config.duration / 2,
                      y: config.y,
                      ease: "+=" + -config.ease
                  }).to(targets, {
                      duration: config.duration,
                      y: "+=" + config.y,
                      ease: "bounce.out"
                  });
              case 'left':
                  return gsap.timeline().to(targets, {
                      duration: config.duration / 2,
                      x: config.x,
                      ease: "+=" + config.ease
                  }).to(targets, {
                      duration: config.duration,
                      x: "+=" + -config.x,
                      ease: "bounce.out"
                  });
              case 'right':
                  return gsap.timeline().to(targets, {
                      duration: config.duration / 2,
                      x: -config.x,
                      ease: "+=" + config.ease
                  }).to(targets, {
                      duration: config.duration,
                      x: "+=" + config.x,
                      ease: "bounce.out"
                  });

              default:
                  return gsap.timeline().to(targets, {
                      duration: config.duration / 2,
                      y: config.y,
                      ease: "+=" + config.ease
                  }).to(targets, {
                      duration: config.duration,
                      y: "+=" + -config.y,
                      ease: "bounce.out"
                  });
          }

      },
      defaults: { duration: .5, ease: 'power1.inOut', y: -20 },
      extendTimeline: true
  });

  // -------------STAGGGERS----------------
  // -----------------------EACH
  //STAGGER FADE IN (EACH)
  gsap.registerEffect({
      name: "fadeIn_SE",
      effect: (targets, config) => {
          return gsap.to(targets, {
              stagger: {
                  each: config.each,
                  from: config.from,
                  grid: config.grid,
                  axis: config.axis,
              },
              duration: config.duration,
              opacity: config.opacity,
              ease: config.ease
          });
      },
      defaults: {
          duration: 1,
          ease: 'power1.inOut',
          opacity: 1,
          each: .5,
          from: 'start',
      },
      extendTimeline: true
  });
  //STAGGER FADE OUT (EACH)
  gsap.registerEffect({
      name: "fadeOut_SE",
      effect: (targets, config) => {
          return gsap.to(targets, {
              stagger: {
                  each: config.each,
                  from: config.from,
                  grid: config.grid,
                  axis: config.axis,
              },
              duration: config.duration,
              opacity: config.opacity,
              ease: config.ease
          });
      },
      defaults: {
          duration: 1,
          ease: 'power1.inOut',
          opacity: 0,
          each: .5,
          from: 'start',
      },
      extendTimeline: true
  });
  //STAGGER FADE IN DIRECTION (EACH)
  gsap.registerEffect({
      name: "fadeInDirection_SE",
      effect: (targets, config) => {
          switch (config.direction) {
              case 'bottom':
                  return gsap.to(targets, {
                      stagger: {
                          each: config.each,
                          from: config.from,
                          grid: config.grid,
                          axis: config.axis,
                      },
                      duration: config.duration,
                      opacity: config.opacity,
                      ease: config.ease,
                      y: "+=" + -config.y
                  });
              case 'top':
                  return gsap.to(targets, {
                      stagger: {
                          each: config.each,
                          from: config.from,
                          grid: config.grid,
                          axis: config.axis,
                      },
                      duration: config.duration,
                      opacity: config.opacity,
                      ease: config.ease,
                      y: "+=" + config.y
                  });
              case 'left':
                  return gsap.to(targets, {
                      stagger: {
                          each: config.each,
                          from: config.from,
                          grid: config.grid,
                          axis: config.axis,
                      },
                      duration: config.duration,
                      opacity: config.opacity,
                      ease: config.ease,
                      x: "+=" + config.x
                  });
              case 'right':
                  return gsap.to(targets, {
                      stagger: {
                          each: config.each,
                          from: config.from,
                          grid: config.grid,
                          axis: config.axis,
                      },
                      duration: config.duration,
                      opacity: config.opacity,
                      ease: config.ease,
                      x: "+=" + -config.x
                  });

              default:

                  return console.error("You hace to put a direction: '{direction:''}'");

          }
      },
      defaults: {
          duration: 1,
          ease: 'power1.inOut',
          opacity: 1,
          x: 10,
          y: 10,
          each: .5,
          from: 'start',
      },
      extendTimeline: true
  });
  //STAGGER FADE OUT DIRECTION (EACH)
  gsap.registerEffect({
      name: "fadeOutDirection_SE",
      effect: (targets, config) => {
          switch (config.direction) {
              case 'bottom':
                  return gsap.to(targets, {
                      stagger: {
                          each: config.each,
                          from: config.from,
                          grid: config.grid,
                          axis: config.axis,
                      },
                      duration: config.duration,
                      opacity: config.opacity,
                      ease: config.ease,
                      y: "+=" + -config.y
                  });
              case 'top':
                  return gsap.to(targets, {
                      stagger: {
                          each: config.each,
                          from: config.from,
                          grid: config.grid,
                          axis: config.axis,
                      },
                      duration: config.duration,
                      opacity: config.opacity,
                      ease: config.ease,
                      y: "+=" + config.y
                  });
              case 'left':
                  return gsap.to(targets, {
                      stagger: {
                          each: config.each,
                          from: config.from,
                          grid: config.grid,
                          axis: config.axis,
                      },
                      duration: config.duration,
                      opacity: config.opacity,
                      ease: config.ease,
                      x: "+=" + config.x
                  });
              case 'right':
                  return gsap.to(targets, {
                      stagger: {
                          each: config.each,
                          from: config.from,
                          grid: config.grid,
                          axis: config.axis,
                      },
                      duration: config.duration,
                      opacity: config.opacity,
                      ease: config.ease,
                      x: "+=" + -config.x
                  });

              default:

                  return console.error("You hace to put a direction: '{direction:''}'");

          }
      },
      defaults: {
          duration: 1,
          ease: 'power1.inOut',
          opacity: 0,
          x: 10,
          y: 10,
          each: .5,
          from: 'start',
      },
      extendTimeline: true
  });


}
  returnAnimations(){
    return animationArray;
  }

setBannerWidth(bannerInfo){
  this.bannerWidth = bannerInfo;
  console.log(bannerInfo);
}
setBannerHeight(bannerInfo){
  this.bannerHeight = bannerInfo;
  console.log(bannerInfo);
}
  
}
