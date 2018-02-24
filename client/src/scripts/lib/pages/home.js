import Screen from '../util/Screen';

const scrollToElement = ($el) => {
    console.log($el);
    $('html, body').animate({
        scrollTop: $el.offset().top
    }, 2000);
};

const scrollOnClick = () => {
        // data-js-scroll="#take-the-challenge"
    $('[data-js-click-scroll]').click((e) => {
        e.preventDefault();
        const selector = $(e.currentTarget).data('js-click-scroll');
        const $el = $(selector);
        scrollToElement($el);
    });
};

export default () => {
    scrollOnClick();

    $('html, body').animate({
        scrollTop: $('[data-js-scroll-to]').offset().top
    }, 2000);
};
