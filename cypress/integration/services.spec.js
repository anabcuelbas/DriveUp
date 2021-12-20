describe('services page test', () => {
  beforeEach(() => {
		cy.viewport('macbook-13');
    cy.visit('http://localhost:4200/login');
		cy.wait(1000);

		cy.get('[data-cy="email-input"]').type('email-usuario@teste.com');
		cy.wait(500);
		cy.get('[data-cy="password-input"]').type('1234');
		cy.wait(500);
		cy.get('[data-cy="btn"]').click();
		cy.wait(500);

		cy.get('[data-cy="cards"]').first().click();
		cy.wait(1000);
  })

  it('should display service page', () => {
		cy.get('[data-cy="header"]').should('be.visible');
		cy.wait(500);
		cy.get('[data-cy="title"]').should('be.visible');
		cy.wait(500);
		cy.get('[data-cy="lavagem-card"]').should('be.visible');
		cy.wait(500);
		cy.get('[data-cy="lavagem-card"]').first().get('[data-cy="create-appointment-btn"]').first().click();
		cy.wait(1000);
		cy.url().should('eq', 'http://localhost:4200/agendamento?id=1&estabelecimentoId=3&endereco=Centro,%20Rua%20Joaquim%20Martins,%20578&nome=Postinho&servicoNome=Lavagem');
  });
});
