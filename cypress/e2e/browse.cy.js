describe("First test", { testIsolation: false }, () => {
  it("Visit Platzi landing page", () => {
    cy.visit("https://www.platzi.com");
  });

  it("Visit Platzi landing page", () => {
    cy.reload();
  });

  it("Reload page forcely", () => {
    cy.visit("https://www.google.com/");
    cy.reload();
  });

  it("Browse back", () => {
    cy.visit("https://www.google.com/");
    cy.visit(
      "https://www.google.com/search?q=playstation+5&rlz=1C5CHFA_enCO1003CO1003&sxsrf=AJOqlzXyJ9I3cL5GhkPNW6fwvk-TbfL3Qw%3A1673449814439&ei=VtG-Y9G1GsSMwbkPjPCw6Ao&oq=playstation&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgBMgQIIxAnMgQIIxAnMggIABCABBDLATIECAAQQzIICAAQgAQQywEyCAgAEIAEEMsBMgQIABBDMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBOg0IABBHENYEEMkDELADOgoIABBHENYEELADOggIABCSAxCwAzoSCC4QxwEQ0QMQyAMQsAMQQxgBSgQIQRgASgQIRhgAUIIGWIIGYNQQaAJwAXgAgAGIAYgBiAGSAQMwLjGYAQCgAQHIAQzAAQHaAQQIARgI&sclient=gws-wiz-serp"
    );
    cy.visit(
      "https://www.google.com/search?q=platzi&rlz=1C5CHFA_enCO1003CO1003&oq=platzi&aqs=chrome.0.0i355i512j46i199i465i512j0i512l8.2442j0j15&sourceid=chrome&ie=UTF-8"
    );
    // cy.go('back')
    cy.go(-2);
  });

  it.only("Browse forward", () => {
    cy.visit("https://www.google.com/");
    cy.visit(
      "https://www.google.com/search?q=playstation+5&rlz=1C5CHFA_enCO1003CO1003&sxsrf=AJOqlzXyJ9I3cL5GhkPNW6fwvk-TbfL3Qw%3A1673449814439&ei=VtG-Y9G1GsSMwbkPjPCw6Ao&oq=playstation&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgBMgQIIxAnMgQIIxAnMggIABCABBDLATIECAAQQzIICAAQgAQQywEyCAgAEIAEEMsBMgQIABBDMggIABCABBDLATIICAAQgAQQywEyCAgAEIAEEMsBOg0IABBHENYEEMkDELADOgoIABBHENYEELADOggIABCSAxCwAzoSCC4QxwEQ0QMQyAMQsAMQQxgBSgQIQRgASgQIRhgAUIIGWIIGYNQQaAJwAXgAgAGIAYgBiAGSAQMwLjGYAQCgAQHIAQzAAQHaAQQIARgI&sclient=gws-wiz-serp"
    );
    cy.visit(
      "https://www.google.com/search?q=platzi&rlz=1C5CHFA_enCO1003CO1003&oq=platzi&aqs=chrome.0.0i355i512j46i199i465i512j0i512l8.2442j0j15&sourceid=chrome&ie=UTF-8"
    );
    // cy.go(1);
    cy.go("back");
    cy.go("forward");
  });
});
