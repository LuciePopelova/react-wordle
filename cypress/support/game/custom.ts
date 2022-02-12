/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      clickKey: typeof clickKey;
      checkTileTextIsVisible: typeof checkTileTextIsVisible;
      checkTileTextIsNotVisible: typeof checkTileTextIsNotVisible;
    }
  }
}

export const clickKey = (letter: string) => {
  cy.contains('button', `${letter}`).click();
}

export const checkTileTextIsVisible = (tileId: string, letter: string) => {
  cy.get(`[data-cy='${tileId}']`).should("have.text", `${letter}`)
}

export const checkTileTextIsNotVisible = (tileId: string, letter: string) => {
  cy.get(`[data-cy='${tileId}']`).should("not.have.text", `${letter}`)
}


Cypress.Commands.add('clickKey', clickKey);
Cypress.Commands.add('checkTileTextIsVisible', checkTileTextIsVisible);
Cypress.Commands.add('checkTileTextIsNotVisible', checkTileTextIsNotVisible);

export {};