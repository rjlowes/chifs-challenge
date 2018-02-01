import DomRouter from './lib/router/DomRouter.js';
import $ from "jquery";
window.$ = $;



$(function () {
    let domRouter = new DomRouter();
    domRouter.loadEvents();
});
