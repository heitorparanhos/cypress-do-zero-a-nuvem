describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://escolas.classicadistribuidora.com.br");
  });

  /*it("verifica o título", () => {
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

  it("campo de email deve continuar vazio ao preencher somente com números", () => {
    cy.get("#input_email").type("123456789");
    cy.get("#btn_auth").click();
    cy.get("#input_email").should("have.value", "");
  });
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

  it("envia o formuário com sucesso usando um comando customizado", () => {
    cy.get("p#error_msg").should("not.be.visible");
    cy.get("#btn_entendi").click();
    cy.get("#btn_modal_cookie").click();
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close > span"
    ).click();
    cy.get("#btn_modal_cookie").click();
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://www.livromais.com.br/home/class_selector/21"]'
    ).click({ force: true });
    cy.get("a.dropdown-item.text-decoration-none.mdb-dropdownLink-1").click({
    force: true,
    });

    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="11"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
  });

  it.only("envia o formuário com sucesso usando um comando customizado", () => {
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#input_email")
      .click({ force: true })
      .type("silveriohs@hotmail.com");
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });

    cy.get("#input_senha").click({ force: true }).type("123");
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });

    cy.get("#label_cupom_login").click({ force: true }).type("TSSSTHARDBH");
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });

    //cy.fillMandatoryFieldsAndSubmit();
  });it.only("envia o formuário com sucesso usando um comando customizado", () => {
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#input_email")
      .click({ force: true })
      .type("silveriohs@hotmail.com");
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });

    cy.get("#input_senha").click({ force: true }).type("123");
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });

    cy.get("#label_cupom_login").click({ force: true }).type("TSSSTHARDBH");
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });

    //cy.fillMandatoryFieldsAndSubmit();
  
    });

  it.only("passes", () => {
    cy.visit("https://escolas.classicadistribuidora.com.br/Login");
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="2073"]').click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });

    cy.get(".card-body > .row > :nth-child(2)").click({ force: true });
    //cy.get("#btn_pedido").click({ force: true });
    //cy.get("#btn_pedido").click({ force: true });
    cy.get("#btn_modal_cookie").click({ force: true });
    //cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="2073"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    //cy.get(":nth-child(4) > .form-check-label").click({ force: true });
    //cy.get(":nth-child(4) > .form-check-label").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
  });

  it("teste CLASSICA, 1 ANO CARINHA FELIZ, PAGAMENTO PIX", () => {
    cy.visit("https://escolas.classicadistribuidora.com.br/Login");
    cy.clearLocalStorage();

    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get("#btnPixCopiaCola").click({ force: true });
  });

  it("teste CLASSICA, 1 ANO CARINHA FELIZ, PAGAMENTO PIX", () => {
    cy.visit("https://escolas.classicadistribuidora.com.br/Login");
    cy.clearLocalStorage();

    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(".border > :nth-child(1) > .dropdown").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
    ).click({ force: true });
    cy.get(".form-group > .dropdown").click({ force: true });
    //cy.get('[codigoaluno="2073"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_modal_cookie").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get("btn.btn-teal.btn-block.m-3.waves-effect.waves-light").click({
      force: true,
    });
  });

  it("teste CLASSICA, 1 ANO CARINHA FELIZ, PAGAMENTO PIX", () => {
    //cy.visit("https://escolas.classicadistribuidora.com.br/Login");
    //cy.clearLocalStorage();

    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });

    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#cc-number").type("5448280000000007", { force: true });
    cy.get("#cc-cpf").type("04809155129", { force: true });
    cy.get("#cc-nome").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration").type("12/2026", { force: true });
    cy.get("#cc-cvv").type("235", { force: true });
    cy.get("#parcelasSelect").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
  });
*/

  describe("template spec", () => {
    beforeEach(() => {
      cy.visit("https://escolas.classicadistribuidora.com.br");
    });

    /*it("verifica o título", () => {
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

  it("campo de email deve continuar vazio ao preencher somente com números", () => {
    cy.get("#input_email").type("123456789");
    cy.get("#btn_auth").click();
    cy.get("#input_email").should("have.value", "");
  });
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

  it("envia o formuário com sucesso usando um comando customizado", () => {
    cy.get("p#error_msg").should("not.be.visible");
    cy.get("#btn_entendi").click();
    cy.get("#btn_modal_cookie").click();
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close > span"
    ).click();
    cy.get("#btn_modal_cookie").click();
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://www.livromais.com.br/home/class_selector/21"]'
    ).click({ force: true });
    cy.get("a.dropdown-item.text-decoration-none.mdb-dropdownLink-1").click({
    force: true,
    });

    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="11"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
  });

  it.only("envia o formuário com sucesso usando um comando customizado", () => {
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#input_email")
      .click({ force: true })
      .type("silveriohs@hotmail.com");
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });

    cy.get("#input_senha").click({ force: true }).type("123");
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });

    cy.get("#label_cupom_login").click({ force: true }).type("TSSSTHARDBH");
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });

    //cy.fillMandatoryFieldsAndSubmit();
  });it.only("envia o formuário com sucesso usando um comando customizado", () => {
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#input_email")
      .click({ force: true })
      .type("silveriohs@hotmail.com");
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });

    cy.get("#input_senha").click({ force: true }).type("123");
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });

    cy.get("#label_cupom_login").click({ force: true }).type("TSSSTHARDBH");
    cy.get(
      "#modalLoginObservacao > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });

    //cy.fillMandatoryFieldsAndSubmit();
  
    });

  it.only("passes", () => {
    cy.visit("https://escolas.classicadistribuidora.com.br/Login");
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="2073"]').click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });

    cy.get(".card-body > .row > :nth-child(2)").click({ force: true });
    //cy.get("#btn_pedido").click({ force: true });
    //cy.get("#btn_pedido").click({ force: true });
    cy.get("#btn_modal_cookie").click({ force: true });
    //cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="2073"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    //cy.get(":nth-child(4) > .form-check-label").click({ force: true });
    //cy.get(":nth-child(4) > .form-check-label").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
  });

  it("teste CLASSICA, 1 ANO CARINHA FELIZ, PAGAMENTO PIX", () => {
    cy.visit("https://escolas.classicadistribuidora.com.br/Login");
    cy.clearLocalStorage();

    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get("#btnPixCopiaCola").click({ force: true });
  });

  it("teste CLASSICA, 1 ANO CARINHA FELIZ, PAGAMENTO PIX", () => {
    cy.visit("https://escolas.classicadistribuidora.com.br/Login");
    cy.clearLocalStorage();

    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(".border > :nth-child(1) > .dropdown").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
    ).click({ force: true });
    cy.get(".form-group > .dropdown").click({ force: true });
    //cy.get('[codigoaluno="2073"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_modal_cookie").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get("btn.btn-teal.btn-block.m-3.waves-effect.waves-light").click({
      force: true,
    });
  });

  it("teste CLASSICA, 1 ANO CARINHA FELIZ, PAGAMENTO PIX", () => {
    //cy.visit("https://escolas.classicadistribuidora.com.br/Login");
    //cy.clearLocalStorage();

    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });

    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#cc-number").type("5448280000000007", { force: true });
    cy.get("#cc-cpf").type("04809155129", { force: true });
    cy.get("#cc-nome").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration").type("12/2026", { force: true });
    cy.get("#cc-cvv").type("235", { force: true });
    cy.get("#parcelasSelect").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
  });
*/

    //teste que passou 1:
    it("TESTE 1 CLASSICA, 1 ANO CARINHA FELIZ, RETIRAR NA ESCOLA, PAGAMENTO CARTAO", () => {
      cy.get("#btn_modal_cookieX").click({ force: true });
      cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
        force: true,
      });
      cy.get('input[name="form_password"]').type("123", { force: true });
      cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
      cy.contains("Entrar").click({ force: true });
      cy.get("#dropdownMenu1-1").click({ force: true });
      cy.get(
        '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
      ).click({ force: true });
      cy.get("#dropdownAlunos").click({ force: true });
      cy.get('[codigoaluno="6"]').click({ force: true });
      cy.get("#btn_salvar_nome_aluno").click({ force: true });
      cy.get("#btn_comprar_lista").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get(
        "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
      ).click({ force: true });

      cy.get("#btn_pedido").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
      cy.get("#cc-number").type("5448280000000007", { force: true });
      cy.get("#cc-cpf").type("04809155129", { force: true });
      cy.get("#cc-nome").type("Igor Teste Cypress", { force: true });
      cy.get("#cc-expiration").type("12/2026", { force: true });
      cy.get("#cc-cvv").type("235", { force: true });
      cy.get("#parcelasSelect").select("1", { force: true });
      cy.get("#btn_modal_confirmacao").click({ force: true });
      cy.get("#btn_comprar").click({ force: true });
      cy.wait(7000);
      cy.get(".fa-check-circle").should("be.visible");
    });

    //teste que passou 2:
    it("TESTE 2 CLASSICA, 1 ANO CARINHA FELIZ, RETIRAR NA ESCOLA, PAGAMENTO PIX", () => {
      cy.get("#btn_modal_cookieX").click({ force: true });
      cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
        force: true,
      });
      cy.get('input[name="form_password"]').type("123", { force: true });
      cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
      cy.contains("Entrar").click({ force: true });
      cy.get("#dropdownMenu1-1").click({ force: true });
      cy.get(
        '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
      ).click({ force: true });
      cy.get("#dropdownAlunos").click({ force: true });
      cy.get('[codigoaluno="6"]').click({ force: true });
      cy.get("#btn_salvar_nome_aluno").click({ force: true });
      cy.get("#btn_comprar_lista").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get(
        "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
      ).click({ force: true });

      cy.get("#btn_pedido").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
      cy.get("#radioWithGap11").click({ force: true });
      cy.get("#radioWithGap11").click({ force: true });
      cy.get("#btn_modal_confirmacao").click({ force: true });
      cy.get("#btn_comprar").click({ force: true });
      cy.get("#btnPixCopiaCola").click({ force: true });
      cy.wait(3000);
      cy.get(".fa-check-circle").should("be.visible");
    });

    //teste que passou 3:
    it("TESTE 3 CLASSICA, 1 ANO CARINHA FELIZ, RETIRAR NA ESCOLA, PAGAMENTO BOLETO", () => {
      cy.get("#btn_modal_cookieX").click({ force: true });
      cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
        force: true,
      });
      cy.get('input[name="form_password"]').type("123", { force: true });
      cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
      cy.contains("Entrar").click({ force: true });
      cy.get("#dropdownMenu1-1").click({ force: true });
      cy.get(
        '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
      ).click({ force: true });
      cy.get("#dropdownAlunos").click({ force: true });
      cy.get('[codigoaluno="6"]').click({ force: true });
      cy.get("#btn_salvar_nome_aluno").click({ force: true });
      cy.get("#btn_comprar_lista").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get(
        "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
      ).click({ force: true });

      cy.get("#btn_pedido").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
      cy.get("#radioWithGap6").click({ force: true });
      cy.get("#radioWithGap6").click({ force: true });
      cy.get("#btn_modal_confirmacao").click({ force: true });
      cy.get("#btn_comprar").click({ force: true });
      cy.get(".swal2-confirm").click({ force: true });
      cy.wait(3000);
      cy.get(".fa-check-circle").should("be.visible");
    });

    //teste que passou 4:
    it("TESTE 4 CLASSICA, 1 ANO CARINHA FELIZ, RETIRAR NA ESCOLA, PAGAMENTO 2 CARTOES", () => {
      cy.get("#btn_modal_cookieX").click({ force: true });
      cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
        force: true,
      });
      cy.get('input[name="form_password"]').type("123", { force: true });
      cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
      cy.contains("Entrar").click({ force: true });
      cy.get("#dropdownMenu1-1").click({ force: true });
      cy.get(
        '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
      ).click({ force: true });
      cy.get("#dropdownAlunos").click({ force: true });
      cy.get('[codigoaluno="6"]').click({ force: true });
      cy.get("#btn_salvar_nome_aluno").click({ force: true });
      cy.get("#btn_comprar_lista").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get(
        "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
      ).click({ force: true });

      cy.get("#btn_pedido").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
      cy.get("#radioWithGap5").click({ force: true });
      cy.get("#radioWithGap5").click({ force: true });
      //primeiro cartão:
      cy.get("#cc-number-multiple").type("5448280000000007", { force: true });
      cy.get("#cc-cpf-multiple").type("04809155129", { force: true });
      cy.get("#cc-nome-multiple").type("Igor Teste Cypress", { force: true });
      cy.get("#cc-expiration-multiple").type("12/2026", { force: true });
      cy.get("#cc-cvv-multiple").type("235", { force: true });
      cy.get("#valor_multiple").type("1,00", { force: true });
      cy.get("#parcelasSelectMultiple1").select("1", { force: true });
      //segundo cartão:
      cy.get("#cc-number-multiple2").type("5448280000000007", { force: true });
      cy.get("#cc-cpf-multiple-2").type("04809155129", { force: true });
      cy.get("#cc-nome-multiple2").type("Igor Teste Cypress", { force: true });
      cy.get("#cc-expiration-multiple2").type("12/2026", { force: true });
      cy.get("#cc-cvv-multiple2").type("235", { force: true });
      cy.get("#parcelasSelectMultiple2").select("1", { force: true });
      cy.get("#btn_modal_confirmacao").click({ force: true });
      cy.get("#btn_comprar").click({ force: true });
      cy.wait(7000);
      cy.get(".fa-check-circle").should("be.visible");
    });

    //teste que passou 5:
    it("TESTE 5 CLASSICA, 1 ANO BOLINHA, RETIRAR NA ESCOLA, PAGAMENTO CARTAO", () => {
      cy.get("#btn_modal_cookieX").click({ force: true });
      cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
        force: true,
      });
      cy.get('input[name="form_password"]').type("123", { force: true });
      cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
      cy.contains("Entrar").click({ force: true });
      cy.get("#dropdownMenu1-1").click({ force: true });
      cy.get(
        '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
      ).click({ force: true });
      cy.get("#dropdownAlunos").click({ force: true });
      cy.get('[codigoaluno="6"]').click({ force: true });
      cy.get("#btn_salvar_nome_aluno").click({ force: true });
      cy.get("#btn_comprar_lista").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get(
        "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
      ).click({ force: true });

      cy.get("#btn_pedido").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
      cy.get("#cc-number").type("5448280000000007", { force: true });
      cy.get("#cc-cpf").type("04809155129", { force: true });
      cy.get("#cc-nome").type("Igor Teste Cypress", { force: true });
      cy.get("#cc-expiration").type("12/2026", { force: true });
      cy.get("#cc-cvv").type("235", { force: true });
      cy.get("#parcelasSelect").select("1", { force: true });
      cy.get("#btn_modal_confirmacao").click({ force: true });
      cy.get("#btn_comprar").click({ force: true });
      cy.wait(7000);
      cy.get(".fa-check-circle").should("be.visible");
    });

    //teste que passou 6:
    it("TESTE 6 CLASSICA, 1 ANO BOLINHA, RETIRAR NA ESCOLA, PAGAMENTO PIX", () => {
      cy.get("#btn_modal_cookieX").click({ force: true });
      cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
        force: true,
      });
      cy.get('input[name="form_password"]').type("123", { force: true });
      cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
      cy.contains("Entrar").click({ force: true });
      cy.get("#dropdownMenu1-1").click({ force: true });
      cy.get(
        '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
      ).click({ force: true });
      cy.get("#dropdownAlunos").click({ force: true });
      cy.get('[codigoaluno="6"]').click({ force: true });
      cy.get("#btn_salvar_nome_aluno").click({ force: true });
      cy.get("#btn_comprar_lista").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get(
        "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
      ).click({ force: true });

      cy.get("#btn_pedido").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
      cy.get("#radioWithGap11").click({ force: true });
      cy.get("#radioWithGap11").click({ force: true });
      cy.get("#btn_modal_confirmacao").click({ force: true });
      cy.get("#btn_comprar").click({ force: true });
      cy.get("#btnPixCopiaCola").click({ force: true });
      cy.wait(3000);
      cy.get(".fa-check-circle").should("be.visible");
    });

    //teste que passou 7:
    it("TESTE 7 CLASSICA, 1 ANO BOLINHA, RETIRAR NA ESCOLA, PAGAMENTO BOLETO", () => {
      cy.get("#btn_modal_cookieX").click({ force: true });
      cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
        force: true,
      });
      cy.get('input[name="form_password"]').type("123", { force: true });
      cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
      cy.contains("Entrar").click({ force: true });
      cy.get("#dropdownMenu1-1").click({ force: true });
      cy.get(
        '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
      ).click({ force: true });
      cy.get("#dropdownAlunos").click({ force: true });
      cy.get('[codigoaluno="6"]').click({ force: true });
      cy.get("#btn_salvar_nome_aluno").click({ force: true });
      cy.get("#btn_comprar_lista").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get(
        "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
      ).click({ force: true });

      cy.get("#btn_pedido").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
      cy.get("#radioWithGap6").click({ force: true });
      cy.get("#radioWithGap6").click({ force: true });
      cy.get("#btn_modal_confirmacao").click({ force: true });
      cy.get("#btn_comprar").click({ force: true });
      cy.get(".swal2-confirm").click({ force: true });
      cy.wait(3000);
      cy.get(".fa-check-circle").should("be.visible");
    });

    //teste que passou 8:
    it("TESTE 8 CLASSICA, 1 ANO BOLINHA, RETIRAR NA ESCOLA, PAGAMENTO 2 CARTOES", () => {
      cy.get("#btn_modal_cookieX").click({ force: true });
      cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
        force: true,
      });
      cy.get('input[name="form_password"]').type("123", { force: true });
      cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
      cy.contains("Entrar").click({ force: true });
      cy.get("#dropdownMenu1-1").click({ force: true });
      cy.get(
        '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
      ).click({ force: true });
      cy.get("#dropdownAlunos").click({ force: true });
      cy.get('[codigoaluno="6"]').click({ force: true });
      cy.get("#btn_salvar_nome_aluno").click({ force: true });
      cy.get("#btn_comprar_lista").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get(
        "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
      ).click({ force: true });

      cy.get("#btn_pedido").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
      cy.get("#radioWithGap5").click({ force: true });
      cy.get("#radioWithGap5").click({ force: true });
      //primeiro cartão:
      cy.get("#cc-number-multiple").type("5448280000000007", { force: true });
      cy.get("#cc-cpf-multiple").type("04809155129", { force: true });
      cy.get("#cc-nome-multiple").type("Igor Teste Cypress", { force: true });
      cy.get("#cc-expiration-multiple").type("12/2026", { force: true });
      cy.get("#cc-cvv-multiple").type("235", { force: true });
      cy.get("#valor_multiple").type("1,00", { force: true });
      cy.get("#parcelasSelectMultiple1").select("1", { force: true });
      //segundo cartão:
      cy.get("#cc-number-multiple2").type("5448280000000007", { force: true });
      cy.get("#cc-cpf-multiple-2").type("04809155129", { force: true });
      cy.get("#cc-nome-multiple2").type("Igor Teste Cypress", { force: true });
      cy.get("#cc-expiration-multiple2").type("12/2026", { force: true });
      cy.get("#cc-cvv-multiple2").type("235", { force: true });
      cy.get("#parcelasSelectMultiple2").select("1", { force: true });
      cy.get("#btn_modal_confirmacao").click({ force: true });
      cy.get("#btn_comprar").click({ force: true });
      cy.wait(7000);
      cy.get(".fa-check-circle").should("be.visible");
    });

    //teste que passou 9:
    it("TESTE 9 CLASSICA, 1 ANO ENSINO FUNDAMENTAL, RETIRAR NA ESCOLA, PAGAMENTO CARTAO", () => {
      cy.get("#btn_modal_cookieX").click({ force: true });
      cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
        force: true,
      });
      cy.get('input[name="form_password"]').type("123", { force: true });
      cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
      cy.contains("Entrar").click({ force: true });
      cy.get("#dropdownMenu1-1").click({ force: true });
      cy.get(
        '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
      ).click({ force: true });
      cy.get("#dropdownAlunos").click({ force: true });
      cy.get('[codigoaluno="6"]').click({ force: true });
      cy.get("#btn_salvar_nome_aluno").click({ force: true });
      cy.get("#btn_comprar_lista").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get(
        "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
      ).click({ force: true });

      cy.get("#btn_pedido").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
      cy.get("#cc-number").type("5448280000000007", { force: true });
      cy.get("#cc-cpf").type("04809155129", { force: true });
      cy.get("#cc-nome").type("Igor Teste Cypress", { force: true });
      cy.get("#cc-expiration").type("12/2026", { force: true });
      cy.get("#cc-cvv").type("235", { force: true });
      cy.get("#parcelasSelect").select("1", { force: true });
      cy.get("#btn_modal_confirmacao").click({ force: true });
      cy.get("#btn_comprar").click({ force: true });
      cy.wait(7000);
      cy.get(".fa-check-circle").should("be.visible");
    });

    //teste que passou 10:
    it("TESTE 10 CLASSICA, 1 ANO ENSINO FUNDAMENTAL, RETIRAR NA ESCOLA, PAGAMENTO PIX", () => {
      cy.get("#btn_modal_cookieX").click({ force: true });
      cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
        force: true,
      });
      cy.get('input[name="form_password"]').type("123", { force: true });
      cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
      cy.contains("Entrar").click({ force: true });
      cy.get("#dropdownMenu1-1").click({ force: true });
      cy.get(
        '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
      ).click({ force: true });
      cy.get("#dropdownAlunos").click({ force: true });
      cy.get('[codigoaluno="6"]').click({ force: true });
      cy.get("#btn_salvar_nome_aluno").click({ force: true });
      cy.get("#btn_comprar_lista").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get(
        "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
      ).click({ force: true });

      cy.get("#btn_pedido").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
      cy.get("#radioWithGap11").click({ force: true });
      cy.get("#radioWithGap11").click({ force: true });
      cy.get("#btn_modal_confirmacao").click({ force: true });
      cy.get("#btn_comprar").click({ force: true });
      cy.get("#btnPixCopiaCola").click({ force: true });
      cy.wait(3000);
      cy.get(".fa-check-circle").should("be.visible");
    });

    //teste que passou 11:
    it("TESTE 11 CLASSICA, 1 ANO ENSINO FUNDAMENTAL, RETIRAR NA ESCOLA, PAGAMENTO BOLETO", () => {
      cy.get("#btn_modal_cookieX").click({ force: true });
      cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
        force: true,
      });
      cy.get('input[name="form_password"]').type("123", { force: true });
      cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
      cy.contains("Entrar").click({ force: true });
      cy.get("#dropdownMenu1-1").click({ force: true });
      cy.get(
        '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
      ).click({ force: true });
      cy.get("#dropdownAlunos").click({ force: true });
      cy.get('[codigoaluno="6"]').click({ force: true });
      cy.get("#btn_salvar_nome_aluno").click({ force: true });
      cy.get("#btn_comprar_lista").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get(
        "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
      ).click({ force: true });

      cy.get("#btn_pedido").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
      cy.get("#radioWithGap6").click({ force: true });
      cy.get("#radioWithGap6").click({ force: true });
      cy.get("#btn_modal_confirmacao").click({ force: true });
      cy.get("#btn_comprar").click({ force: true });
      cy.get(".swal2-confirm").click({ force: true });
      cy.wait(3000);
      cy.get(".fa-check-circle").should("be.visible");
    });

    //teste que passou 12:
    it("TESTE 12 CLASSICA, 1 ANO ENSINO FUNDAMENTAL, RETIRAR NA ESCOLA, PAGAMENTO 2 CARTOES", () => {
      cy.get("#btn_modal_cookieX").click({ force: true });
      cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
        force: true,
      });
      cy.get('input[name="form_password"]').type("123", { force: true });
      cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
      cy.contains("Entrar").click({ force: true });
      cy.get("#dropdownMenu1-1").click({ force: true });
      cy.get(
        '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
      ).click({ force: true });
      cy.get("#dropdownAlunos").click({ force: true });
      cy.get('[codigoaluno="6"]').click({ force: true });
      cy.get("#btn_salvar_nome_aluno").click({ force: true });
      cy.get("#btn_comprar_lista").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get(
        "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
      ).click({ force: true });

      cy.get("#btn_pedido").click({ force: true });
      cy.get(
        "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
      ).click({ force: true });
      cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
      cy.get("#radioWithGap5").click({ force: true });
      cy.get("#radioWithGap5").click({ force: true });
      //primeiro cartão:
      cy.get("#cc-number-multiple").type("5448280000000007", { force: true });
      cy.get("#cc-cpf-multiple").type("04809155129", { force: true });
      cy.get("#cc-nome-multiple").type("Igor Teste Cypress", { force: true });
      cy.get("#cc-expiration-multiple").type("12/2026", { force: true });
      cy.get("#cc-cvv-multiple").type("235", { force: true });
      cy.get("#valor_multiple").type("1,00", { force: true });
      cy.get("#parcelasSelectMultiple1").select("1", { force: true });
      //segundo cartão:
      cy.get("#cc-number-multiple2").type("5448280000000007", { force: true });
      cy.get("#cc-cpf-multiple-2").type("04809155129", { force: true });
      cy.get("#cc-nome-multiple2").type("Igor Teste Cypress", { force: true });
      cy.get("#cc-expiration-multiple2").type("12/2026", { force: true });
      cy.get("#cc-cvv-multiple2").type("235", { force: true });
      cy.get("#parcelasSelectMultiple2").select("1", { force: true });
      cy.get("#btn_modal_confirmacao").click({ force: true });
      cy.get("#btn_comprar").click({ force: true });
      cy.wait(7000);
      cy.get(".fa-check-circle").should("be.visible");
    });
  });

  /************* TESTES DE FRETES ************************************************************************************************************************************************************************************************** */
  //TESTES CARINHA FELIZ RETIRAR NA DISTRIBUIDORA
  //teste que passou 13:
  it("TESTE 13 CLASSICA, 1 ANO CARINHA FELIZ, RETIRAR NA DISTRIBUIDORA, PAGAMENTO CARTAO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#cc-number").type("5448280000000007", { force: true });
    cy.get("#cc-cpf").type("04809155129", { force: true });
    cy.get("#cc-nome").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration").type("12/2026", { force: true });
    cy.get("#cc-cvv").type("235", { force: true });
    cy.get("#parcelasSelect").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 14:
  it("TESTE 14 CLASSICA, 1 ANO CARINHA FELIZ, RETIRAR NA DISTRIBUIDORA, PAGAMENTO PIX", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get("#btnPixCopiaCola").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 15:
  it("TESTE 15 CLASSICA, 1 ANO CARINHA FELIZ, RETIRAR NA DISTRIBUIDORA, PAGAMENTO BOLETO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 16:
  it("TESTE 16 CLASSICA, 1 ANO CARINHA FELIZ, RETIRAR NA DISTRIBUIDORA, PAGAMENTO 2 CARTOES", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    //primeiro cartão:
    cy.get("#cc-number-multiple").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple").type("235", { force: true });
    cy.get("#valor_multiple").type("1,00", { force: true });
    cy.get("#parcelasSelectMultiple1").select("1", { force: true });
    //segundo cartão:
    cy.get("#cc-number-multiple2").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple-2").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple2").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple2").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple2").type("235", { force: true });
    cy.get("#parcelasSelectMultiple2").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });
  /***************************TESTES CARINHA FELIZ FRETE NORMAL (SEDEX)******************************/
  //teste que passou 17
  it("TESTE 17 CLASSICA, 1 ANO CARINHA FELIZ, FRETE NORMAL (SEDEX), PAGAMENTO CARTAO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#cc-number").type("5448280000000007", { force: true });
    cy.get("#cc-cpf").type("04809155129", { force: true });
    cy.get("#cc-nome").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration").type("12/2026", { force: true });
    cy.get("#cc-cvv").type("235", { force: true });
    cy.get("#parcelasSelect").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 18:
  it("TESTE 18 CLASSICA, 1 ANO CARINHA FELIZ, FRETE NORMAL (SEDEX), PAGAMENTO PIX", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get("#btnPixCopiaCola").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 19:
  it("TESTE 19 CLASSICA, 1 ANO CARINHA FELIZ, FRETE NORMAL (SEDEX), PAGAMENTO BOLETO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 20:
  it("TESTE 20 CLASSICA, 1 ANO CARINHA FELIZ, FRETE NORMAL (SEDEX), PAGAMENTO 2 CARTOES", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    //primeiro cartão:
    cy.get("#cc-number-multiple").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple").type("235", { force: true });
    cy.get("#valor_multiple").type("1,00", { force: true });
    cy.get("#parcelasSelectMultiple1").select("1", { force: true });
    //segundo cartão:
    cy.get("#cc-number-multiple2").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple-2").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple2").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple2").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple2").type("235", { force: true });
    cy.get("#parcelasSelectMultiple2").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  /***************************TESTES CARINHA FELIZ FRETE ECONOMICO (PAC)******************************/

  //teste que passou 21
  it("TESTE 21 CLASSICA, 1 ANO CARINHA FELIZ, FRETE ECONOMICO (PAC), PAGAMENTO CARTAO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#cc-number").type("5448280000000007", { force: true });
    cy.get("#cc-cpf").type("04809155129", { force: true });
    cy.get("#cc-nome").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration").type("12/2026", { force: true });
    cy.get("#cc-cvv").type("235", { force: true });
    cy.get("#parcelasSelect").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 22:
  it("TESTE 22 CLASSICA, 1 ANO CARINHA FELIZ, FRETE ECONOMICO (PAC), PAGAMENTO PIX", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get("#btnPixCopiaCola").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 23:
  it("TESTE 23 CLASSICA, 1 ANO CARINHA FELIZ, FRETE ECONOMICO (PAC), PAGAMENTO BOLETO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 24:
  it("TESTE 24 CLASSICA, 1 ANO CARINHA FELIZ, FRETE ECONOMICO (PAC), PAGAMENTO 2 CARTOES", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2418"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    //primeiro cartão:
    cy.get("#cc-number-multiple").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple").type("235", { force: true });
    cy.get("#valor_multiple").type("1,00", { force: true });
    cy.get("#parcelasSelectMultiple1").select("1", { force: true });
    //segundo cartão:
    cy.get("#cc-number-multiple2").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple-2").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple2").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple2").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple2").type("235", { force: true });
    cy.get("#parcelasSelectMultiple2").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  /************* TESTES DE FRETES ************************************************************************************************************************************************************************************************** */
  //TESTES 1 ANO BOLINHA RETIRAR NA DISTRIBUIDORA
  //teste que passou 25:
  it("TESTE 25 CLASSICA, 1 ANO BOLINHA, RETIRAR NA DISTRIBUIDORA, PAGAMENTO CARTAO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#cc-number").type("5448280000000007", { force: true });
    cy.get("#cc-cpf").type("04809155129", { force: true });
    cy.get("#cc-nome").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration").type("12/2026", { force: true });
    cy.get("#cc-cvv").type("235", { force: true });
    cy.get("#parcelasSelect").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 26:
  it("TESTE 26 CLASSICA, 1 ANO BOLINHA, RETIRAR NA DISTRIBUIDORA, PAGAMENTO PIX", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get("#btnPixCopiaCola").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 27:
  it("TESTE 27 CLASSICA, 1 ANO BOLINHA, RETIRAR NA DISTRIBUIDORA, PAGAMENTO BOLETO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 28:
  it("TESTE 28 CLASSICA, 1 ANO BOLINHA, RETIRAR NA DISTRIBUIDORA, PAGAMENTO 2 CARTOES", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    //primeiro cartão:
    cy.get("#cc-number-multiple").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple").type("235", { force: true });
    cy.get("#valor_multiple").type("1,00", { force: true });
    cy.get("#parcelasSelectMultiple1").select("1", { force: true });
    //segundo cartão:
    cy.get("#cc-number-multiple2").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple-2").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple2").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple2").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple2").type("235", { force: true });
    cy.get("#parcelasSelectMultiple2").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });
  /***************************TESTES BOLINHA (SEDEX)******************************/
  //teste que passou 29
  it("TESTE 29 CLASSICA, 1 ANO BOLINHA, FRETE NORMAL (SEDEX), PAGAMENTO CARTAO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#cc-number").type("5448280000000007", { force: true });
    cy.get("#cc-cpf").type("04809155129", { force: true });
    cy.get("#cc-nome").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration").type("12/2026", { force: true });
    cy.get("#cc-cvv").type("235", { force: true });
    cy.get("#parcelasSelect").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 30:
  it("TESTE 30 CLASSICA, 1 ANO BOLINHA, FRETE NORMAL (SEDEX), PAGAMENTO PIX", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get("#btnPixCopiaCola").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 31:
  it("TESTE 31 CLASSICA, 1 ANO BOLINHA, FRETE NORMAL (SEDEX), PAGAMENTO BOLETO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 32:
  it("TESTE 32 CLASSICA, 1 ANO BOLINHA, FRETE NORMAL (SEDEX), PAGAMENTO 2 CARTOES", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    //primeiro cartão:
    cy.get("#cc-number-multiple").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple").type("235", { force: true });
    cy.get("#valor_multiple").type("1,00", { force: true });
    cy.get("#parcelasSelectMultiple1").select("1", { force: true });
    //segundo cartão:
    cy.get("#cc-number-multiple2").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple-2").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple2").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple2").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple2").type("235", { force: true });
    cy.get("#parcelasSelectMultiple2").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  /***************************TESTES BOLINHA FRETE ECONOMICO (PAC)******************************/

  //teste que passou 33
  it("TESTE 33 CLASSICA, 1 ANO BOLINHA, FRETE ECONOMICO (PAC), PAGAMENTO CARTAO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#cc-number").type("5448280000000007", { force: true });
    cy.get("#cc-cpf").type("04809155129", { force: true });
    cy.get("#cc-nome").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration").type("12/2026", { force: true });
    cy.get("#cc-cvv").type("235", { force: true });
    cy.get("#parcelasSelect").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 34:
  it("TESTE 34 CLASSICA, 1 ANO BOLINHA, FRETE ECONOMICO (PAC), PAGAMENTO PIX", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get("#btnPixCopiaCola").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 35:
  it("TESTE 35 CLASSICA, 1 ANO BOLINHA, FRETE ECONOMICO (PAC), PAGAMENTO BOLETO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 36:
  it("TESTE 36 CLASSICA, 1 ANO BOLINHA, FRETE ECONOMICO (PAC), PAGAMENTO 2 CARTOES", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/2417"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    //primeiro cartão:
    cy.get("#cc-number-multiple").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple").type("235", { force: true });
    cy.get("#valor_multiple").type("1,00", { force: true });
    cy.get("#parcelasSelectMultiple1").select("1", { force: true });
    //segundo cartão:
    cy.get("#cc-number-multiple2").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple-2").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple2").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple2").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple2").type("235", { force: true });
    cy.get("#parcelasSelectMultiple2").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  /************* TESTES DE FRETES ************************************************************************************************************************************************************************************************** */
  //TESTES 1 ANO FUNDAMENTAL RETIRAR NA DISTRIBUIDORA
  //teste que passou 37:
  it("TESTE 37 CLASSICA, 1 ANO FUNDAMENTAL, RETIRAR NA DISTRIBUIDORA, PAGAMENTO CARTAO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#cc-number").type("5448280000000007", { force: true });
    cy.get("#cc-cpf").type("04809155129", { force: true });
    cy.get("#cc-nome").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration").type("12/2026", { force: true });
    cy.get("#cc-cvv").type("235", { force: true });
    cy.get("#parcelasSelect").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 38:
  it("TESTE 38 CLASSICA, 1 ANO FUNDAMENTAL, RETIRAR NA DISTRIBUIDORA, PAGAMENTO PIX", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get("#btnPixCopiaCola").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 39:
  it("TESTE 39 CLASSICA, 1 ANO FUNDAMENTAL, RETIRAR NA DISTRIBUIDORA, PAGAMENTO BOLETO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 40:
  it("TESTE 40 CLASSICA, 1 ANO FUNDAMENTAL, RETIRAR NA DISTRIBUIDORA, PAGAMENTO 2 CARTOES", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#distribuidora_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    //primeiro cartão:
    cy.get("#cc-number-multiple").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple").type("235", { force: true });
    cy.get("#valor_multiple").type("1,00", { force: true });
    cy.get("#parcelasSelectMultiple1").select("1", { force: true });
    //segundo cartão:
    cy.get("#cc-number-multiple2").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple-2").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple2").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple2").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple2").type("235", { force: true });
    cy.get("#parcelasSelectMultiple2").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });
  /***************************TESTES FUNDAMENTAL (SEDEX)******************************/
  //teste que passou 41
  it("TESTE 41 CLASSICA, 1 ANO FUNDAMENTAL, FRETE NORMAL (SEDEX), PAGAMENTO CARTAO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#cc-number").type("5448280000000007", { force: true });
    cy.get("#cc-cpf").type("04809155129", { force: true });
    cy.get("#cc-nome").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration").type("12/2026", { force: true });
    cy.get("#cc-cvv").type("235", { force: true });
    cy.get("#parcelasSelect").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 42:
  it("TESTE 42 CLASSICA, 1 ANO FUNDAMENTAL, FRETE NORMAL (SEDEX), PAGAMENTO PIX", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get("#btnPixCopiaCola").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 43:
  it("TESTE 43 CLASSICA, 1 ANO FUNDAMENTAL, FRETE NORMAL (SEDEX), PAGAMENTO BOLETO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 44:
  it("TESTE 44 CLASSICA, 1 ANO FUNDAMENTAL, FRETE NORMAL (SEDEX), PAGAMENTO 2 CARTOES", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#sedex_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    //primeiro cartão:
    cy.get("#cc-number-multiple").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple").type("235", { force: true });
    cy.get("#valor_multiple").type("1,00", { force: true });
    cy.get("#parcelasSelectMultiple1").select("1", { force: true });
    //segundo cartão:
    cy.get("#cc-number-multiple2").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple-2").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple2").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple2").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple2").type("235", { force: true });
    cy.get("#parcelasSelectMultiple2").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  /***************************TESTES FUNDAMENTAL FRETE ECONOMICO (PAC)******************************/

  //teste que passou 45
  it("TESTE 45 CLASSICA, 1 ANO FUNDAMENTAL, FRETE ECONOMICO (PAC), PAGAMENTO CARTAO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#cc-number").type("5448280000000007", { force: true });
    cy.get("#cc-cpf").type("04809155129", { force: true });
    cy.get("#cc-nome").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration").type("12/2026", { force: true });
    cy.get("#cc-cvv").type("235", { force: true });
    cy.get("#parcelasSelect").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 46:
  it("TESTE 46 CLASSICA, 1 ANO FUNDAMENTAL, FRETE ECONOMICO (PAC), PAGAMENTO PIX", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#radioWithGap11").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get("#btnPixCopiaCola").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 47:
  it("TESTE 47 CLASSICA, 1 ANO FUNDAMENTAL, FRETE ECONOMICO (PAC), PAGAMENTO BOLETO", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#radioWithGap6").click({ force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.get(".swal2-confirm").click({ force: true });
    cy.wait(3000);
    cy.get(".fa-check-circle").should("be.visible");
  });

  //teste que passou 48:
  it("TESTE 48 CLASSICA, 1 ANO FUNDAMENTAL, FRETE ECONOMICO (PAC), PAGAMENTO 2 CARTOES", () => {
    cy.get("#btn_modal_cookieX").click({ force: true });
    cy.get('input[name="form_email"]').type("silveriohs@hotmail.com", {
      force: true,
    });
    cy.get('input[name="form_password"]').type("123", { force: true });
    cy.get('input[name="form_code"]').type("TSSSTHARDBH", { force: true });
    cy.contains("Entrar").click({ force: true });
    cy.get("#dropdownMenu1-1").click({ force: true });
    cy.get(
      '[href="https://escolas.classicadistribuidora.com.br/home/class_selector/1400"]'
    ).click({ force: true });
    cy.get("#dropdownAlunos").click({ force: true });
    cy.get('[codigoaluno="6"]').click({ force: true });
    cy.get("#btn_salvar_nome_aluno").click({ force: true });
    cy.get("#btn_comprar_lista").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get(
      "#modal_lista > .modal-dialog > .modal-content > .modal-footer > .btn-teal"
    ).click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#pac_select").click({ force: true });
    cy.get("#btn_pedido").click({ force: true });
    cy.get(
      "#modal_cookie > .modal-dialog > .modal-content > .modal-header > .close"
    ).click({ force: true });
    cy.get("#btn_aceite_sistema_de_ensino_carrinho").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    cy.get("#radioWithGap5").click({ force: true });
    //primeiro cartão:
    cy.get("#cc-number-multiple").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple").type("235", { force: true });
    cy.get("#valor_multiple").type("1,00", { force: true });
    cy.get("#parcelasSelectMultiple1").select("1", { force: true });
    //segundo cartão:
    cy.get("#cc-number-multiple2").type("5448280000000007", { force: true });
    cy.get("#cc-cpf-multiple-2").type("04809155129", { force: true });
    cy.get("#cc-nome-multiple2").type("Igor Teste Cypress", { force: true });
    cy.get("#cc-expiration-multiple2").type("12/2026", { force: true });
    cy.get("#cc-cvv-multiple2").type("235", { force: true });
    cy.get("#parcelasSelectMultiple2").select("1", { force: true });
    cy.get("#btn_modal_confirmacao").click({ force: true });
    cy.get("#btn_comprar").click({ force: true });
    cy.wait(7000);
    cy.get(".fa-check-circle").should("be.visible");
  });
});
