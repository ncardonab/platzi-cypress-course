/// <reference types="Cypress" />

describe("Waiting for elements", { testIsolation: false }, () => {
  before(() => cy.visit("https://www.platzi.com"));

  it("Waiting for an element and asserting", () => {
    cy.get(".ButtonLogin-cta", { timeout: 6000 }).should("be.visible");
    cy.get(".ButtonLogin-cta").should("be.visible", { timeout: 6000 });
  });
});
