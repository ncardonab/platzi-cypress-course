/// <reference types="Cypress" />

describe("Assertions", { testIsolation: false }, () => {
  Cypress.on("uncaught:exception", () => false);
  before(() => {
    cy.visit("/automation-practice-form");
  });

  after(() => {
    cy.visit("/");
  });

  it("Assertion", () => {
    cy.url().should("include", "demoqa.com");
    cy.get("#firstName")
      .should("be.visible")
      .and("have.attr", "placeholder", "First Name");
  });

  it("Second assertion", () => {
    cy.url().should("include", "demoqa.com");
    cy.get("#firstName").then((element) => {
      expect(element).to.be.visible;
      expect(element).to.have.attr("placeholder", "First Name");
    });
  });

  it("Third assertion", () => {
    cy.url().should("include", "demoqa.com");
    cy.get("#firstName").then((element) => {
      assert.equal(element.attr("placeholder"), "First Name");
    });
  });
});
