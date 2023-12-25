/// <reference types="Cypress" />

describe("Saving elements", { testIsolation: false }, () => {
  Cypress.on("uncaught:exception", () => false);

  it("Avoid repetition", () => {
    cy.visit("/automation-practice-form");

    // debugger;
    cy.get('input[placeholder="First Name"]').then(console.log);
    cy.get('input[placeholder="First Name"]')
      .parents()
      .then((form) => {
        const inputs = form.find("input");
        const divs = form.find("div");
        const labels = form.find("label");

        expect(inputs.length).to.eq(15);
        expect(divs.length).to.eq(139);
        // cy.pause();
        expect(labels.length).to.eq(16);
      });
    cy.get('input[placeholder="First Name"]').debug();
  });
});
