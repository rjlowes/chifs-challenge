import Screen from '../util/Screen';


export default () => {
    $('html, body').animate({
        scrollTop: $('[data-js-scroll-to]').offset().top
    }, 2000);
};
