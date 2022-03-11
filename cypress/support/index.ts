import './commands'
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {

      clickEdit(): Chainable<JQuery<HTMLElement>>

      clickFilter(): Chainable<JQuery<HTMLElement>>

      clickSave(): Chainable<JQuery<HTMLElement>>

      clickDiscard(): Chainable<JQuery<HTMLElement>>

      dragToElement<K extends keyof HTMLElementTagNameMap>(dragSelector: string, dropSelector: string): Chainable<JQuery<HTMLElementTagNameMap[K]>>

      dragTableHeader<K extends keyof HTMLElementTagNameMap>(headerName: string, destHeaderName: string): Chainable<JQuery<HTMLElementTagNameMap[K]>>

      getTableColumnByPosition<K extends keyof HTMLElementTagNameMap>(pos: number): Chainable<JQuery<HTMLElementTagNameMap[K]>>
    }
  }
}