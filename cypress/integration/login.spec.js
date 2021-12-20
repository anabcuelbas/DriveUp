describe('login page test', () => {
  beforeEach(() => {
		cy.viewport('macbook-13');
    cy.visit('http://localhost:4200/login');
		cy.wait(1000);
  })

  it('should display login form and navigate to create-account page', () => {
		cy.get('[data-cy="email"]').should('be.visible');
		cy.wait(500);
		cy.get('[data-cy="password"]').should('be.visible');
		cy.wait(500);
		cy.get('[data-cy="checkbox"]').should('be.visible');
		cy.wait(500);
		cy.get('[data-cy="btn"]').should('be.visible');
		cy.wait(500);
		cy.get('.simple-text__nova-conta').should('be.visible');
		cy.wait(500);
		cy.get('.simple-text__nova-conta').click();
		cy.wait(500);
		cy.url().should('eq', 'http://localhost:4200/login/create-account');
  });

	it('should show fail message', () => {
		cy.get('[data-cy="email-input"]').type('email@invalido.com');
		cy.wait(500);
		cy.get('[data-cy="password-input"]').type('1212');
		cy.wait(500);
		cy.get('[data-cy="btn"]').click();
		cy.wait(500);
		cy.get('#alert-1-msg').should('contain', 'Seu email ou senha estão incorretos. Por favor tente novamente.');
		cy.wait(500);
	});

	it('should log into home page', () => {
		cy.get('[data-cy="email-input"]').type('email-usuario@teste.com');
		cy.wait(500);
		cy.get('[data-cy="password-input"]').type('1234');
		cy.wait(500);
		cy.get('[data-cy="btn"]').click();
		cy.wait(500);
		cy.url().should('eq', 'http://localhost:4200/home');
	});
});
