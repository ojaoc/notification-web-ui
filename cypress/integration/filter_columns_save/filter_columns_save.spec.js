/// <reference types="cypress" />

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("User visits base route of app", () => {
  cy.visit(Cypress.env("appUrl"));
});

Then("Wait for page load", () => {
  cy.wait(1000);
});

When("User enables edit mode", () => {
  cy.clickEdit();
});

When("User opens filter edit modal", () => {
  cy.clickFilter();
});

Then("Modal opens", () => {
  cy.get("div.ant-modal-content")
    .should("have.css", "background-color")
    .and("eq", "rgb(255, 255, 255)");

  cy.get("i.anticon-close").should("be.visible");

  cy.contains("OK");
  cy.contains("Cancelar");
});

Then("Modal shows correct number of columns", () => {
  cy.get("div.example-list")
    .children()
    .then((listing) => {
      cy.get("div.ant-modal-body")
        .children()
        .should("have.length", Cypress.$(listing).length);
    });
});

Then("All checkboxes are selected", () => {
  cy.get("span.ant-checkbox-wrapper").each(($el) => {
    cy.wrap($el).invoke("attr", "ng-reflect-model").should("eq", "true");
  });
});

When('User deselects option labeled "Age"', () => {
  cy.get("div.ant-modal-body").findByText("Age").click();

  cy.get("div.ant-modal-body")
    .findByText("Age")
    .parent()
    .invoke("attr", "ng-reflect-model")
    .should("eq", "false");
});
