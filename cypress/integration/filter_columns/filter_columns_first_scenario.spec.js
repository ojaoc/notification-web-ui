/// <reference types="cypress" />

import { Then, When } from "cypress-cucumber-preprocessor/steps";

When('User deselects option labeled "Age"', () => {
  cy.get("div.ant-modal-body").findByText("Age").click();

  cy.get("div.ant-modal-body")
    .findByText("Age")
    .parent()
    .invoke("attr", "ng-reflect-model")
    .should("eq", "false");
});

When("User confirms changes", () => {
  cy.findByRole("button", {
    name: /ok/i,
  }).click();
});

Then("Modal closes", () => {
  cy.get("div.ant-modal-content").should("not.exist");
});

Then("Columns in edit mode already show changes", () => {
  cy.get("div.example-list")
    .children()
    .findByRole("nz-list-header", {
      name: /age/i,
    })
    .should("not.exist");
});

When("User saves changes", () => {
  cy.clickSave();
});

Then("Table columns configuration is persisted", () => {
  cy.get("thead")
    .findByRole("columnheader", {
      name: /age/i,
    })
    .should("not.exist");
});

Then("Edit mode is disabled", () => {
  cy.get("i.anticon-edit").should("be.visible");

  cy.get("i.anticon-filter").should("not.exist");
  cy.get("i.anticon-save").should("not.exist");
  cy.get("i.anticon-delete").should("not.exist");

  cy.get("nz-list").should("not.exist");
});
