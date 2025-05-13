/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Get the body of an iframe and wrap it as a jQuery object
         * @param iframeSelector - CSS selector of the iframe
         */
        getIframeBody(iframeSelector: string): Chainable<JQuery<HTMLElement>>;
    }
}
