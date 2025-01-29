Cypress.Commands.add("fillMandatoryFieldsAndSubmit", () => {
  cy.get("#input_email").type("silveriohs@hotmail.com");
  cy.get("#input_senha").type("123");
  cy.get("#input_codigo").type("TSSSTHARDBH");
  //cy.get("#btn_auth").click();
  cy.contains("button", "Entrar").click();
});
