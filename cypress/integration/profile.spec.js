describe('profile page test', () => {
  beforeEach(() => {
		cy.viewport('macbook-13');
    cy.visit('http://localhost:4200/login');
		cy.wait(500);

		cy.get('[data-cy="email-input"]').type('email-usuario@teste.com');
		cy.wait(500);
		cy.get('[data-cy="password-input"]').type('1234');
		cy.wait(500);
		cy.get('[data-cy="btn"]').click();
		cy.wait(500);

		cy.get('[data-cy="profile-link"]').click();
		cy.wait(1000);
  })

  it('should display user profile page with user data', () => {
		cy.get('[data-cy="header"]').should('be.visible');
		cy.wait(500);
		
		cy.get('input[name="name"]')
  		.invoke('val')
  		.then(sometext => {
				cy.log(sometext).should('eq', 'Usuário Teste');

			});
		cy.get('input[name="email"]')
		.invoke('val')
		.then(sometext => {
			cy.log(sometext).should('eq', 'email-usuario@teste.com');

		});
		cy.get('input[name="phone"]')
  		.invoke('val')
  		.then(sometext => {
				cy.log(sometext).should('eq', '11999999999');

			});

		cy.get('[data-cy="edit-btn"]').should('be.visible');
		cy.get('[data-cy="logout-btn"]').should('be.visible');
  });

	it('should not be able to edit info before clicking on the edit button', () => {
		cy.get('input[name="name"]').should('be.disabled');
		cy.get('input[name="email"]').should('be.disabled');
		cy.get('input[name="phone"]').should('be.disabled');
	});

	it('should be able to edit name and phone data', () => {
		cy.get('[data-cy="edit-btn"]').click();
		cy.wait(500);
		cy.get('[data-cy="submit-btn"]').should('be.visible');
		cy.get('[data-cy="cancel-btn"]').should('be.visible');
		cy.wait(500);
		cy.get('input[name="email"]').should('be.disabled');

		cy.get('input[name="name"]').clear().type('Nome Editado');
		cy.wait(500);
		cy.get('input[name="phone"]').clear().type('11994282377');
		cy.wait(500);
		cy.get('[data-cy="submit-btn"]').click();
		cy.wait(1000);

		cy.get('input[name="name"]')
		.invoke('val')
		.then(sometext => {
			cy.log(sometext).should('eq', 'Nome Editado');

		});
		cy.get('input[name="phone"]')
  		.invoke('val')
  		.then(sometext => {
				cy.log(sometext).should('eq', '11994282377');

			});
	});

	it('should log out', () => {
		cy.get('[data-cy="logout-btn"]').click();
		cy.wait(500);
		cy.url().should('eq', 'http://localhost:4200/login');
		cy.visit('http://localhost:4200/home');
		cy.wait(500);
		cy.url().should('eq', 'http://localhost:4200/login');
	})
});
