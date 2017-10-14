/**
 * Routing module - DOM Scripting Entry Point
 * @module dom/routing
 * @see http://www.paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/
 * @description
 *  # A DOM router that is the entry point for all JavaScript. It invokes JavaScript for every
 *  # page, page sections and specific pages in a DOM Ready fashion.
 *  # Add data-section and data-page to the body tag when you want either to fire
 *  # These values should match the keys in the config (below)
 *  # e.g. <body data-page="productList">
 */
import {init, finalise} from '../pages/common';
import home from '../pages/home';
import article from '../pages/article-detail';

export default class DomRouter {

    loadEvents() {
        let page = $(document.body).data('page');
            
        // Invoke for all pages
        init();

        // Invoke page specific
        this.fire(page);

        // Invoke for all pages if you want it to run after the page specific
        finalise();
    }

    fire(key) {

        switch(key) {
            case 'home':
                home();
            case 'article-detail':
                article();
            default:
                break;
        }
    }
}
