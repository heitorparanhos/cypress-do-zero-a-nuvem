describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://www.livromais.com.br/Login");
  });

  it("verifica o título", () => {
    cy.title().should("be.equal", "Livromais");
  });
  it("preenche os campos de texto e envia", () => {
    //const longText = Cypress._.repeat("1234556789", 100); exemplo para teste de delay

    cy.get("#input_email").type("silveriohs@hotmail.com");
    cy.get("#input_senha").type("123");
    cy.get("#input_codigo").type("TSSSTHARD");
    cy.get("#btn_auth").click();
    cy.get("#btn_modal_cookie").click();
  });

  it("exibir mensagem de erro ao submeter o cadastro com um email com formatação inválida", () => {
    cy.get("#input_email").type("silveriohs,hotmail.com");
    cy.get("#input_senha").type("123");
    cy.get("#input_codigo").type("TSSSTHARD");
    cy.get("#btn_auth").click();

    cy.get("p#error_msg").should("be.visible");
  });

  /*it("campo de email deve continuar vazio ao preencher somente com números", () => {
    cy.get("#input_email").type("123456789");
    cy.get("#btn_auth").click();
    cy.get("#input_email").should("have.value", "");
  });*/
  it("preenche e limpa os campos email, senha e cupom", () => {
    cy.get("#input_email")
      .type("silveriohs.hotmail.com")
      .should("have.value", "silveriohs.hotmail.com")
      .clear()
      .should("have.value", "");
    cy.get("#input_senha")
      .type("123")
      .should("have.value", "123")
      .clear()
      .should("have.value", "");
    cy.get("#input_codigo")
      .type("TSSSTHARD")
      .should("have.value", "TSSSTHARD")
      .clear()
      .should("have.value", "");
  });

  it("exibe mensagem de erro ao submeter o cadastro sem preencher os campos obrigatórios", () => {
    cy.get("#btn_auth").click();

    cy.get("p#error_msg").should("be.visible");
  });

  it.only("envia o formuário com sucesso usando um comando customizado", () => {
    cy.fillMandatoryFieldsAndSubmit();

    cy.get("p#error_msg").should("not.be.visible");
    cy.get("#btn_entendi").click();
    cy.get("#btn_modal_cookie").click();
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close > span"
    ).click();
    //cy.get("#dropdownMenu1-1").click();
  });
});
