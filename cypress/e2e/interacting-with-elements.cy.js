/// <reference types="Cypress" />

describe("Interacting with elements", { testIsolation: false }, () => {
  Cypress.on("uncaught:exception", () => false);

  it("Click", () => {
    cy.visit("/buttons");
    cy.get("button").eq(3).click();
    cy.get("#dynamicClickMessage")
      .should("be.visible")
      .and("contain.text", "You have done a dynamic click");
  });

  it("Double click", () => {
    cy.visit("/buttons");
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage")
      .should("be.visible")
      .and("contain.text", "You have done a double click");
  });

  it("Right click", () => {
    cy.visit("/buttons");
    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage")
      .should("be.visible")
      .and("contain.text", "You have done a right click");
  });

  it("Force click on disabled element", () => {
    cy.visit("/dynamic-properties");
    cy.get("#enableAfter").click({ timeout: 0, force: true });
  });

  it("Dealing with dynamic elements", () => {
    cy.visit("/buttons");
    cy.get("button").eq(3).parent().parent().click("topRight");
    cy.get("button").eq(3).parent().parent().click("bottomLeft");
    cy.get("button").eq(3).parent().parent().click("bottomRight");
  });

  it("Input type text", () => {
    cy.visit("/automation-practice-form");
    cy.get("#firstName").type("Nicolas");
    cy.get("#lastName").type("Cardona");

    cy.get("#firstName").type("{selectAll}{backspace}Juan Pablo");

    // {backspace} Borra el personaje a la izquierda del cursor.
    // {del} Borra el personaje a la derecha del cursor.
    // {downarrow} Mueve el cursor hacia abajo.
    // {end}	Mueve el cursor al final de la línea.
    // {enter} Teclea la tecla Intro.
    // {esc}	Teclea la tecla Escape.
    // {home} Mueve el cursor al principio de la línea.
    // {insert} Inserta un personaje a la derecha del cursor.
    // {leftarrow} Mueve el cursor a la izquierda.
    // {movetoend} Desplaza el cursor al final del elemento mecanizable.
    // {movetostart} Desplaza el cursor al inicio del elemento mecanizable.
    // {pagedown} Se desplaza hacia abajo.
    // {pageup}  Se desplaza hacia arriba.
    // {rightarrow} Mueve el cursor a la derecha.
    // {selectall} Selecciona todo el texto creando un selection range.
    // {uparrow}	Mueve el cursor hacia arriba.
  });

  it("Dealing with dynamic elements", () => {
    cy.visit("/buttons");
    cy.get("button").eq(3).parent().parent().click("topRight");
    cy.get("button").eq(3).parent().parent().click("bottomLeft");
    cy.get("button").eq(3).parent().parent().click("bottomRight");
  });

  it("Interacting with the dropdown elements", function () {
    cy.visit("https://react-select.com/home");
    cy.get("#react-select-6-input").type(" ");

    cy.get("#react-select-6-listbox")
      .children()
      .children()
      .contains("Red")
      .click();
  });

  it("Interacting with the dropdown elements", function () {
    cy.visit("https://www.w3schools.com/html/html_tables.asp");
    cy.get("#customers").find("th").first().should("contain.text", "Company");

    cy.get("#customers").find("th").eq(1).should("contain.text", "Contact");
  });

  it("Date picker", function () {
    cy.visit("https://material.angular.io/components/datepicker/overview");
    cy.get("datepicker-overview-example").find("svg").click({ force: true });
  });

  it("Pop ups and tooltips", function () {
    cy.visit("/modal-dialogs");
    cy.get("#showSmallModal").click();
    cy.get("#closeSmallModal").click();
  });

  it("Pop ups, alerts and tooltips", function () {
    cy.visit("/alerts");

    // Alerts with stubs
    // const stub = cy.stub();
    // cy.on("window:confirm", stub);
    //
    // cy.get("#confirmButton")
    //   .click()
    //   .then(() => {
    //     expect(stub.getCall(0)).to.be.calledWith("Do you confirm action?");
    //   });

    // Without stubs
    // cy.get("#confirmButton").click();
    // cy.on("window:confirm", (confirm) => {
    //   expect(confirm).to.equal("Do you confirm action?");
    // });

    // Canceling action
    cy.get("#confirmButton").click();
    cy.on("window:confirm", (confirm) => {
      expect(confirm).to.equal("Do you confirm action?");
      return false;
    });
    cy.contains("You selected Cancel").should("be.visible");
  });

  it("Pop ups and tooltips", function () {
    cy.visit("/tool-tips");
    cy.get("#toolTipButton").trigger("mouseover");
    cy.contains("You hovered over the Button").should("be.visible");
    cy.get("#toolTipButton").trigger("mouseout");
    cy.contains("You hovered over the Button").should("not.exist");
  });

  it.only("Dragabble elements", function () {
    cy.visit("/dragabble");

    cy.get("#dragBox")
      .trigger("mousedown", { which: 1, pageX: 500, pageY: 300 })
      .trigger("mousemove", { which: 1, pageX: 520, pageY: 332 })
      .trigger("mousemove", { which: 1, pageX: 500, pageY: 300 })
      .trigger("mousemove", { which: 1, pageX: 600, pageY: 400 })
      .trigger("mouseup");
  });
});
