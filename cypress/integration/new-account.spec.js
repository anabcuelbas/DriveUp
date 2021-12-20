describe('new-account page test', () => {
  beforeEach(() => {
		cy.viewport('macbook-13');
    cy.visit('http://localhost:4200/login/create-account');
		cy.wait(1000);
  })

  it('should display company form', () => {
		cy.wait(2000);
    
		cy.get('[data-cy="select-type"]').click();
		cy.wait(1000);
		cy.get('.alert-radio-label.sc-ion-alert-md').first().click();
		cy.wait(1000);
		cy.contains('OK').click();
		cy.wait(1000);
		cy.get('.empresa').should('be.visible');
  });

	it('should fill company form and create company user', () => {
		cy.wait(2000);
    
		cy.get('[data-cy="select-type"]').click();
		cy.wait(1000);
		cy.get('.alert-radio-label.sc-ion-alert-md').first().click();
		cy.wait(1000);
		cy.contains('OK').click();
		cy.wait(1000);

		cy.get('#company-name').type('Empresa Teste');
		cy.wait(500);
		cy.get('#company-email').type('empresa@teste2.com');
		cy.wait(500);
		cy.get('#company-time').type('8h às 16h');
		cy.wait(500);
		cy.get('#company-day').type('Segunda à Sexta');
		cy.wait(500);
		cy.get('#company-address').type('Rua Teste, número 123. Cidade Teste - TESTE');
		cy.wait(500);
		cy.get('#company-url').type('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881__340.jpg');
		cy.wait(500);

		cy.get('#password').type('1234');
		cy.wait(500);
		cy.get('#confirm-password').type('1234');
		cy.wait(500);
		cy.get('#submit-btn').click();
		cy.wait(2000);
		cy.get('#alert-2-msg').should('contain', 'Sua conta foi criada com sucesso :D');
  });

	it('should display user form', () => {
		cy.wait(2000);
    
		cy.get('[data-cy="select-type"]').click();
		cy.wait(1000);
		cy.get('.alert-radio-label.sc-ion-alert-md').eq(1).click();
		cy.wait(1000);
		cy.contains('OK').click();
		cy.wait(1000);
		cy.get('.usuario').should('be.visible');
  });

	it('should fill user form and create user', () => {
		cy.wait(2000);
    
		cy.get('[data-cy="select-type"]').click();
		cy.wait(1000);
		cy.get('.alert-radio-label.sc-ion-alert-md').eq(1).click();
		cy.wait(1000);
		cy.contains('OK').click();
		cy.wait(1000);
		
		cy.get('#user-name').type('Usuário Teste');
		cy.wait(500);
		cy.get('#user-email').type('email-usuario@teste.com');
		cy.wait(500);
		cy.get('#user-phone').type('11999999999');
		cy.wait(500);

		cy.get('#password').type('1234');
		cy.wait(500);
		cy.get('#confirm-password').type('1234');
		cy.wait(500);
		cy.get('#submit-btn').click();
		cy.wait(2000);
		cy.get('#alert-2-msg').should('contain', 'Sua conta foi criada com sucesso :D');
  });
});
