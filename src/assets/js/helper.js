import anime from 'animejs/lib/anime.es.js';

export function LiquidSvg(pos, svgElement) {
    svgElement = '.' + svgElement;
    const DOM = {};
    DOM.svg = document.querySelector(svgElement);
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
            rotate: 60,
            tx: 100,
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
            points: '700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6',
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
