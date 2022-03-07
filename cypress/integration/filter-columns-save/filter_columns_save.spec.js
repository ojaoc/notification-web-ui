/// <reference types="cypress" />

context("Filter columns, save", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
  });

  it("Clicking edit button makes filter, save and discard buttons appear", () => {
    cy.clickEdit();

    cy.get("i.anticon-filter").should("be.visible");
    cy.get("i.anticon-save").should("be.visible");
    cy.get("i.anticon-delete").should("be.visible");
  });
});
