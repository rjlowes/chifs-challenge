import DomRouter from './lib/router/DomRouter.js';
import $ from "jquery";
window.$ = $;
// import slick from 'slick-carousel';



function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  // console.log(element);
  // console.log(rect);
  // console.log('innerheight ', window.innerHeight);
  // console.log('innerWidth ', window.innerWidth);
  var html = document.documentElement;
  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <= (window.innerHeight || html.clientHeight) &&
  //   rect.right <= (window.innerWidth || html.clientWidth)
  // );

  return (rect.top >= 0 || rect.bottom <= (window.innerHeight || html.clientHeight));
}


$(function () {
    let domRouter = new DomRouter();
    domRouter.loadEvents();
});
