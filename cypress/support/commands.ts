import 'cypress-xpath';
Cypress.Commands.add(
    'getIframeBody',
    (iframeSelector: string): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy
            .get(iframeSelector)
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then((body) => cy.wrap(body as JQuery<HTMLElement>));
    }
);


