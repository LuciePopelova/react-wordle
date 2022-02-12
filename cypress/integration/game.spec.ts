/// <reference types="cypress" />

describe("Game setup", () => {
  beforeEach(() => {
      cy.visit("/")
  })

  it("Should open and close an info modal after clicking the info icon", () => {
      cy.get("[data-cy='info-icon']").click()
      cy.contains("h1", "About this game").should("be.visible")

      cy.get("[data-cy='close-modal-button']").click()
      cy.contains("h1", "About this game").should("not.exist")
  })

  it("Should open Hint modal multiple times, until the icon disappears", () => {
    for(let i = 0 ; i < 3; i++) {
    cy.get("[data-cy='hint-icon']").click()
    cy.get("[data-cy='close-modal-button']").click()
    }

    cy.get("[data-cy='hint-icon']").should("not.exist")
})

   it("Should display a text in the row when a keyboard is clicked", () => {
     cy.clickKey("B");
     cy.checkTileTextIsVisible("tile-0-0","B");
     cy.clickKey("R");
     cy.checkTileTextIsVisible("tile-1-0","R");
     cy.clickKey("A");
     cy.checkTileTextIsVisible("tile-2-0","A");
     cy.clickKey("V");
     cy.checkTileTextIsVisible("tile-3-0","V");
     cy.clickKey("E");
     cy.checkTileTextIsVisible("tile-4-0","E");
     cy.clickKey("ENTER");
     cy.clickKey("A");
     cy.checkTileTextIsVisible("tile-0-1","A");
  })

  it("Should delete a letter in the row when a key delete is clicked", () => {
    cy.clickKey("B");
    cy.checkTileTextIsVisible("tile-0-0", "B")
    cy.clickKey("<<");
    cy.checkTileTextIsVisible("tile-0-0", "")
  })
})

export {}
