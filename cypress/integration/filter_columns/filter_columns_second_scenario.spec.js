/// <reference types="cypress" />

import { When } from "cypress-cucumber-preprocessor/steps";

When('User deselects options labeled "Address" and "Phone"', () => {
  cy.get("div.ant-modal-body").findByText("Address").click();
  cy.get("div.ant-modal-body").findByText("Phone").click();

  cy.get("div.ant-modal-body")
    .findByText("Address")
    .parent()
    .invoke("attr", "ng-reflect-model")
    .should("eq", "false");

  cy.get("div.ant-modal-body")
    .findByText("Phone")
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
      name: /address/i,
    })
    .should("not.exist");

  cy.get("div.example-list")
    .children()
    .findByRole("nz-list-header", {
      name: /phone/i,
    })
    .should("not.exist");
});

When("User discards changes", () => {
  cy.clickDiscard();
});

Then("Table columns configuration is reverted", () => {
  cy.get("thead")
    .findByRole("columnheader", {
      name: /address/i,
    })
    .should("be.visible");

  cy.get("thead")
    .findByRole("columnheader", {
      name: /phone/i,
    })
    .should("be.visible");
});

Then("Edit mode is disabled", () => {
  cy.get("i.anticon-edit").should("be.visible");

  cy.get("i.anticon-filter").should("not.exist");
  cy.get("i.anticon-save").should("not.exist");
  cy.get("i.anticon-delete").should("not.exist");

  cy.get("nz-list").should("not.exist");
});
