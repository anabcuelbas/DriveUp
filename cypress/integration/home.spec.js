describe('home page test', () => {
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
  })

  it('should display home page', () => {
		cy.get('[data-cy="header"]').should('be.visible');
		cy.wait(500);
		cy.get('[data-cy="title"]').should('be.visible');
		cy.wait(2000);
  });

	it('should navigate to service page', () => {
		cy.get('[data-cy="cards"]').first().click();
		cy.wait(1000);
		cy.url().should('eq', 'http://localhost:4200/lavagem?id=1&nome=Lavagem');
		cy.wait(2000);
  });
});
