
export default class Screen {

    debug() {
        console.log('debug Screen ----');
        console.log(rect);
        console.log('ScrollTop: ', scrollTop);
        console.log('ScrollBottom: ', scrollBottom);
        console.log('InnerHeight: ', window.innerHeight);
        console.log('end ----');
    }

    static isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        let scrollBottom = scrollTop + window.innerHeight;
        
        return (
            (rect.top >= 0 && rect.top <=  (window.innerHeight || html.clientHeight))
            || (rect.bottom >= 0 && rect.bottom <= (window.innerHeight || html.clientHeight))
        );
    }
}


var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;