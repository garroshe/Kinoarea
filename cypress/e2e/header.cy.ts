/// <reference types="cypress" />

describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Navigation", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("redirect to posters", () => {
      cy.get("a[href='/posters']").first().click();
      cy.url().should("include", "/posters");
    });

    it("redirect to media", () => {
      cy.get("a[href='/media']").click();
      cy.url().should("include", "/media");
    });

    it("redirect to films", () => {
      cy.get("a[href='/films']").first().click();
      cy.url().should("include", "/films");
    });

    it("redirect to actors", () => {
      cy.get("a[href='/actors']").first().click();
      cy.url().should("include", "/actors");
    });

    it("redirect to news", () => {
      cy.get("a[href='/news']").first().click();
      cy.url().should("include", "/news");
    });

    it("redirect to collections", () => {
      cy.get("a[href='/collections']").click();
      cy.url().should("include", "/collections");
    });

    it("redirect to categories", () => {
      cy.get("a[href='/categories']").click();
      cy.url().should("include", "/categories");
    });

    it("redirect to home", () => {
      cy.get("a[href='/']").click();
      cy.url().should("include", "/");
    });
  });
});
