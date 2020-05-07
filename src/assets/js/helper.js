import anime from 'animejs/lib/anime.es.js';

export function creatCursor() {
    //console.log("--creatCursor--");
    const link = document.querySelectorAll('a');
    const cursor = document.querySelector('.cursor');
    const animateit = function (e) {
        //  const span = this.querySelector('span');
        // const { offsetX: x, offsetY: y } = e,
        //   { offsetWidth: width, offsetHeight: height } = this,
        // move = 25,
        // xMove = x / width * (move * 2) - move,
        // yMove = y / height * (move * 2) - move;
        cursor.classList.add('active');
        // span.style.transform = `translate(${xMove}px, ${yMove}px)`;
        if (e.type === 'mouseleave') {
            //  span.style.transform = '';
            cursor.classList.remove('active');
        }

    };
    const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);
}

export function SmoothScroll(target, speed, smooth) {
    console.log("--SmoothScroll--");
    if (target === document)
        target = (document.scrollingElement
            || document.documentElement
            || document.body.parentNode
            || document.body) // cross browser support for document scrolling

    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body
        && document.documentElement
        ? document.documentElement
        : target // safari is the new IE

    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

    function scrolled(e) {
        e.preventDefault(); // disable default scrolling

        var delta = normalizeWheelDelta(e)

        pos += -delta * speed
        pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

        if (!moving) update()
    }

    function normalizeWheelDelta(e) {
        if (e.detail) {
            if (e.wheelDelta)
                return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
            else
                return -e.detail / 3 // Firefox
        } else
            return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
        moving = true

        var delta = (pos - target.scrollTop) / smooth

        target.scrollTop += delta

        if (Math.abs(delta) > 0.5)
            requestFrame(update)
        else
            moving = false
    }

    var requestFrame = function () { // requestAnimationFrame cross browser
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (func) {
                window.setTimeout(func, 1000 / 50);
            }
        );
    }()
}

export function LiquidSvg(pos) {

    const DOM = {};
    DOM.svg = document.querySelector('.morph1');
    DOM.shapeEl = DOM.svg.querySelector('polygon');

    const shapes = [
        {
            points: '700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6',
            scaleX: .8,
            scaleY: .9,
            rotate: 0,
            tx: 0,
            ty: 0,
            fill: {
                color: 'none',
                duration: 500,
                easing: 'linear'
            },
            animation: {
                points: {
                    duration: 500,
                    easing: 'easeOutExpo'
                },
                svg: {
                    duration: 1500,
                    easing: 'easeOutElastic'
                }
            }
        },
        {
            points: '983.4,101.6 983.4,668.4 416.6,668.4 416.6,101.9 416.6,101.9 416.6,101.9',
            scaleX: .7,
            scaleY: .7,
            rotate: 80,
            tx: -100,
            ty: 100,
            fill: {
                color: 'none',
                duration: 500,
                easing: 'linear'
            },
            animation: {
                points: {
                    duration: 500,
                    easing: 'easeOutExpo'
                },
                svg: {
                    duration: 1500,
                    easing: 'easeOutElastic'
                }
            }
        },
        {
            points: '890.9,54.3 1081.8,385 890.9,715.7 509.1,715.7 318.2,385 509.1,54.3',
            scaleX: .6,
            scaleY: .6,
            rotate: -45,
            tx: 50,
            ty: -50,
            fill: {
                color: 'none',
                duration: 500,
                easing: 'linear'
            },
            animation: {
                points: {
                    duration: 500,
                    easing: 'easeOutExpo'
                },
                svg: {
                    duration: 1500,
                    easing: 'easeOutElastic'
                }
            }
        },
        {
            points: '983.4,101.6 779,385 983.4,668.4 416.6,668.4 611,388 416.6,101.9',
            scaleX: .5,
            scaleY: .5,
            rotate: 145,
            tx: 100,
            ty: -50,
            fill: {
                color: 'none',
                duration: 500,
                easing: 'linear'
            },
            animation: {
                points: {
                    duration: 500,
                    easing: 'easeOutExpo'
                },
                svg: {
                    duration: 1500,
                    easing: 'easeOutElastic'
                }
            }
        },
        {
            points: '983.4,101.6 1255,385 983.4,668.4 416.6,668.4 157,368 416.6,101.9',
            scaleX: .5,
            scaleY: .5,
            rotate: -70,
            tx: -50,
            ty: 50,
            fill: {
                color: 'none',
                duration: 500,
                easing: 'linear'
            },
            animation: {
                points: {
                    duration: 500,
                    easing: 'easeOutExpo'
                },
                svg: {
                    duration: 1500,
                    easing: 'easeOutElastic'
                }
            }
        },
        {
            points: '983.4,101.6 983.4,668.4 416.6,668.4 416.6,101.9 416.6,101.9 416.6,101.9',
            scaleX: .8,
            scaleY: .8,
            rotate: 20,
            tx: 0,
            ty: 0,
            fill: {
                color: 'none',
                duration: 500,
                easing: 'linear'
            },
            animation: {
                points: {
                    duration: 500,
                    easing: 'easeOutExpo'
                },
                svg: {
                    duration: 1500,
                    easing: 'easeOutElastic'
                }
            }
        }
    ];

    function changeShape(pos) {
        anime.remove(DOM.shapeEl);
        anime({
            targets: DOM.shapeEl,
            duration: shapes[pos].animation.points.duration,
            easing: shapes[pos].animation.points.easing,
            elasticity: shapes[pos].animation.points.elasticity || 0,
            points: shapes[pos].points,
            fill: {
                value: shapes[pos].fill.color,
                duration: shapes[pos].fill.duration,
                easing: shapes[pos].fill.easing
            }
        });

        anime.remove(DOM.svg);
        anime({
            targets: DOM.svg,
            duration: shapes[pos].animation.svg.duration,
            easing: shapes[pos].animation.svg.easing,
            elasticity: shapes[pos].animation.svg.elasticity || 0,
            scaleX: shapes[pos].scaleX,
            scaleY: shapes[pos].scaleY,
            translateX: shapes[pos].tx + 'px',
            translateY: shapes[pos].ty + 'px',
            rotate: shapes[pos].rotate + 'deg'
        });
    };

    changeShape(pos);
}

export function hoverMove() {
    // Helper vars and functions.
    const extend = function (a, b) {
        for (let key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    };

    // from http://www.quirksmode.org/js/events_properties.html#position
    const getMousePos = function (ev) {
        let posx = 0;
        let posy = 0;
        if (!ev) ev = window.event;
        if (ev.pageX || ev.pageY) {
            posx = ev.pageX;
            posy = ev.pageY;
        }
        else if (ev.clientX || ev.clientY) {
            posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        return { x: posx, y: posy };
    };

    const TiltObj = function (el, options) {
        this.el = el;
        this.options = extend({}, this.options);
        extend(this.options, options);
        this.DOM = {};
        this.DOM.img = this.el.querySelector('.image-wrap');
        this.DOM.title = this.el.querySelector('.project-title');
        this._initEvents();
    }

    TiltObj.prototype.options = {
        movement: {
            img: { translation: { x: -40, y: -40 } },
            title: { translation: { x: 20, y: 20 } },
        }
    };

    TiltObj.prototype._initEvents = function () {
        this.mouseenterFn = (ev) => {
            anime.remove(this.DOM.img);
            anime.remove(this.DOM.title);
        };

        this.mousemoveFn = (ev) => {
            requestAnimationFrame(() => this._layout(ev));
        };

        this.mouseleaveFn = (ev) => {
            requestAnimationFrame(() => {
                anime({
                    targets: [this.DOM.img, this.DOM.title],
                    duration: 1500,
                    easing: 'easeOutElastic',
                    elasticity: 400,
                    translateX: 0,
                    translateY: 0
                });
            });
        };

        this.el.addEventListener('mousemove', this.mousemoveFn);
        this.el.addEventListener('mouseleave', this.mouseleaveFn);
        this.el.addEventListener('mouseenter', this.mouseenterFn);
    };

    TiltObj.prototype._layout = function (ev) {
        // Mouse position relative to the document.
        const mousepos = getMousePos(ev);
        // Document scrolls.
        const docScrolls = { left: document.body.scrollLeft + document.documentElement.scrollLeft, top: document.body.scrollTop + document.documentElement.scrollTop };
        const bounds = this.el.getBoundingClientRect();
        // Mouse position relative to the main element (this.DOM.el).
        const relmousepos = { x: mousepos.x - bounds.left - docScrolls.left, y: mousepos.y - bounds.top - docScrolls.top };

        // Movement settings for the animatable elements.
        const t = {
            img: this.options.movement.img.translation,
            title: this.options.movement.title.translation,
        };

        const transforms = {
            img: {
                x: (-1 * t.img.x - t.img.x) / bounds.width * relmousepos.x + t.img.x,
                y: (-1 * t.img.y - t.img.y) / bounds.height * relmousepos.y + t.img.y
            },
            title: {
                x: (-1 * t.title.x - t.title.x) / bounds.width * relmousepos.x + t.title.x,
                y: (-1 * t.title.y - t.title.y) / bounds.height * relmousepos.y + t.title.y
            }
        };
        this.DOM.img.style.WebkitTransform = this.DOM.img.style.transform = 'translateX(' + transforms.img.x + 'px) translateY(' + transforms.img.y + 'px)';
        this.DOM.title.style.WebkitTransform = this.DOM.title.style.transform = 'translateX(' + transforms.title.x + 'px) translateY(' + transforms.title.y + 'px)';
    };

    const init = function () {
        Array.from(document.querySelectorAll('.component-wrap')).forEach(el => new TiltObj(el));
    }

    init();
}
