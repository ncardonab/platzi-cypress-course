/// <reference types="Cypress" />

describe("First test", { testIsolation: false }, () => {
  Cypress.on("uncaught:exception", () => false);
  it.only("Get element via tag", () => {
    cy.visit("/automation-practice-form");
    cy.get("input");
  });

  it("Get element via attribute, tag and attr, id and class", () => {
    cy.get('[placeholder="First Name"]');
    cy.get('input[placeholder="First Name"]');
    cy.get("#firstName");
    cy.get(".mr-sm2.form-control"); // too general, might be changed by frontend frameworks or css preprocessors
  });

  // Cypress doesn't have xpath natively supported
  it.only("Contains", () => {
    cy.contains("Reading");
    cy.contains(".header-wrapper", "Widgets");
    // Getting parent element
    cy.get('[placeholder="First Name"]').parent();
    // Multiple ones
    cy.get('[placeholder="First Name"]').parents();
    cy.get('[placeholder="First Name"]').parents().find("label");
    cy.get("form").find("label");
  });
});
