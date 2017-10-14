import {TweenMax} from "gsap";

import {init as initAos} from 'aos';

const initMenuButton = () => {
    const speed = .4;

    let button = $('#main-menu-open');
    let point1 = button.find('#menu-point1');
    let point3 = button.find('#menu-point3');
    let point7 = button.find('#menu-point7');
    let point9 = button.find('#menu-point9');
    
    button.hover(() => {
        TweenMax.to(point1, speed, {attr:{x: 6, y: 2, height: 4}});
        TweenMax.to(point3, speed, {attr:{x: 8, y: 6, width: 4}});
        TweenMax.to(point7, speed, {attr:{x: 2, y: 6, width: 4}});
        TweenMax.to(point9, speed, {attr:{x: 6, y: 8, height: 4}});
    }, () => {
        TweenMax.to(point1, speed, {attr: {x: 0, y: 0, height: 2}});
        TweenMax.to(point3, speed, {attr: {x: 12, y: 0, width: 2}});
        TweenMax.to(point7, speed, {attr:{x: 0, y: 12, width: 2}});
        TweenMax.to(point9, speed, {attr:{x: 12, y: 12, height: 2}});
    });
};

const initClickToScroll = () => {
    let buttons = $('[data-clicktoscroll]');
    buttons.each((index, button) => {
        let id = $(button).data('clicktoscroll');
        let target = $('#' + id);

        $(button).click(() => {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1500);

            // Fade and remove it for now
            $(button).animate({opacity: 0}, 400, function() {
                console.log('lck');
                $(button).remove();
            });
        });

    });
};


const init = () => {
    // HeaderComponent
    $('#main-menu-open').bind('click', function () {
        $(document.body).toggleClass('show-nav');
    });

    $('#close-menu').bind('click', function () {
        $(document.body).toggleClass('show-nav');
    });

    initMenuButton();
    initAos();
    initClickToScroll();
};

const finalise = () => {
    
};

export {init, finalise};