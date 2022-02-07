var _btnExit = document.getElementById('btn-exit'),
    _loadedImages = 0,
    tt,
    _imageArray = [
        'card.png',
        'copy01.png',
        'copy02.png',
        'copy03.png',
        'copy04.png'
    ],
    banner = document.getElementById('banner');

this.addEventListener('DOMContentLoaded', function() {
    for (var i = 0; i < _imageArray.length; i++) {
        var _tempImage = new Image();
        _tempImage.addEventListener('load', function() {
            _loadedImages++;
            if (_loadedImages == _imageArray.length) loadCss();
        });
        _tempImage.src = 'img/' + _imageArray[i];
    }
});


function loadCss() {
    var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('type', 'text/css');
    css.setAttribute('href', "css/style.css");
    document.getElementsByTagName('head')[0].appendChild(css);
    css.onload = loadGsap;
}

function loadGsap() {
    var js = document.createElement('script');
    js.setAttribute('type', 'text/javascript');
    js.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js");
    document.getElementsByTagName('head')[0].appendChild(js);
    js.onload = init;
}


function init() {
    initAnimations();

    _btnExit.addEventListener('click', function() { window.open(window.clickTag) })
}

function initAnimations() {
    defaultGsapAnimations();
    tt = gsap.timeline({
        defaults: {
            duration: 1,
            ease: 'power3.out'
        }
    })

    tt
        .set('.banner', { display: 'block' })
        .slideIn('#copy1', { direction: 'left' })
        .scaleAtention('#copy1')
        .slideOut('#copy1', { direction: 'left', duration: 5 })
        .slideIn('#copy2', { direction: 'right' })
        .fadeOut('#copy2')
        .scaleIn('#copy3')
        // .to('#copy3', { rotate: 25 })
}

function defaultGsapAnimations() {
    //SLIDE OUT
    gsap.registerEffect({
        name: "slideOut",
        effect: (targets, config) => {
            switch (config.direction) {
                case 'right':
                    return gsap.to(targets, {
                        duration: config.duration,
                        x: "+=" + banner.offsetWidth,
                        ease: config.ease,
                        opacity: config.opacity
                    });
                    break;
                case 'left':
                    return gsap.to(targets, {
                        duration: config.duration,
                        x: "+=" + -banner.offsetWidth,
                        ease: config.ease,
                        opacity: config.opacity
                    });
                    break;
                case 'bottom':
                    return gsap.to(targets, {
                        duration: config.duration,
                        y: "+=" + banner.offsetHeight,
                        ease: config.ease,
                        opacity: config.opacity
                    });
                    break;
                case 'top':
                    return gsap.to(targets, {
                        duration: config.duration,
                        y: "+=" + -banner.offsetHeight,
                        ease: config.ease,
                        opacity: config.opacity
                    });
                    break;
                default:
                    return console.error("You hace to put a direction: '{direction:'left/right/top/bottom'}'");
                    break;
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
                        x: "+=" + banner.offsetWidth,
                        ease: config.ease,
                        opacity: config.opacity
                    });
                    break;
                case 'right':
                    return gsap.to(targets, {
                        duration: config.duration,
                        x: "+=" + -banner.offsetWidth,
                        ease: config.ease,
                        opacity: config.opacity
                    });
                    break;
                case 'top':
                    return gsap.to(targets, {
                        duration: config.duration,
                        y: "+=" + banner.offsetHeight,
                        ease: config.ease,
                        opacity: config.opacity
                    });
                    break;
                case 'bottom':
                    return gsap.to(targets, {
                        duration: config.duration,
                        y: "+=" + -banner.offsetHeight,
                        ease: config.ease,
                        opacity: config.opacity
                    });
                    break;
                default:
                    return console.error("You hace to put a direction: '{direction:''}'");
                    break;
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
                ease: config.ease
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
                ease: config.ease
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
    //FADE OUT DIRECTION
    gsap.registerEffect({
        name: "fadeOutDirection",
        effect: (targets, config) => {
            switch (config.direction) {
                case 'bottom':
                    return gsap.to(targets, {
                        duration: config.duration,
                        opacity: config.opacity,
                        y: "+=" + -10,
                        ease: config.ease
                    });
                    break;
                case 'top':
                    return gsap.to(targets, {
                        duration: config.duration,
                        opacity: config.opacity,
                        y: "+=" + 10,
                        ease: config.ease
                    });
                    break;
                case 'right':
                    return gsap.to(targets, {
                        duration: config.duration,
                        opacity: config.opacity,
                        x: "+=" + -10,
                        ease: config.ease
                    });
                    break;
                case 'left':
                    return gsap.to(targets, {
                        duration: config.duration,
                        opacity: config.opacity,
                        x: "+=" + 10,
                        ease: config.ease
                    });
                    break;
                default:
                    return console.error("You hace to put a direction: '{direction:''}'");
                    break;
            }
        },
        defaults: { duration: .5, ease: 'power1.inOut', opacity: 1 },
        extendTimeline: true
    });
    //FADE IN DIRECTION
    gsap.registerEffect({
        name: "fadeOutDirection",
        effect: (targets, config) => {
            switch (config.direction) {
                case 'top':
                    return gsap.to(targets, {
                        duration: config.duration,
                        opacity: config.opacity,
                        y: "+=" + -10,
                        ease: config.ease
                    });
                    break;
                case 'bottom':
                    return gsap.to(targets, {
                        duration: config.duration,
                        opacity: config.opacity,
                        y: "+=" + 10,
                        ease: config.ease
                    });
                    break;
                case 'left':
                    return gsap.to(targets, {
                        duration: config.duration,
                        opacity: config.opacity,
                        x: "+=" + -10,
                        ease: config.ease
                    });
                    break;
                case 'right':
                    return gsap.to(targets, {
                        duration: config.duration,
                        opacity: config.opacity,
                        x: "+=" + 10,
                        ease: config.ease
                    });
                    break;
                default:

                    return console.error("You hace to put a direction: '{direction:''}'");
                    break;
            }
        },
        defaults: { duration: .5, ease: 'power1.inOut', opacity: 0 },
        extendTimeline: true
    });
    //SCALE ATENTION
    gsap.registerEffect({
        name: "scaleAtention",
        effect: (targets, config) => {
            return gsap.timeline().to(targets, {
                duration: config.duration,
                scale: config.scale,
                ease: config.ease
            }).to(targets, {
                duration: config.duration,
                scale: 1,
                ease: config.ease
            });
        },
        defaults: { duration: .3, ease: 'power1.inOut', scale: 1.2 },
        extendTimeline: true
    });
    //SCALE TO
    gsap.registerEffect({
        name: "scaleTo",
        effect: (targets, config) => {
            return gsap.to(targets, {
                duration: config.duration,
                scale: config.scale,
                x: "+=" + config.x,
                y: "+=" + config.y,
                ease: config.ease
            });
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
        defaults: { duration: 1, ease: 'power1.inOut' },
        extendTimeline: true
    });
    // -------------STAGGGERS----------------
    //STAGGER FADE IN
    gsap.registerEffect({
        name: "staggerFadeIn",
        effect: (targets, config) => {
            console.log(config.amount)
            return gsap.to(targets, {
                stagger: {
                    each: config.each,
                    amount: config.amount,
                    from: config.from,
                    grid: config.grid,
                    axis: config.axis,
                    ease: "power1.out"
                },
                duration: config.duration,
                opacity: config.opacity,
                ease: config.ease
            });
        },
        defaults: { duration: 1, ease: 'power1.inOut', opacity: 1, stagger: { from: 'start' } },
        extendTimeline: true
    });

}