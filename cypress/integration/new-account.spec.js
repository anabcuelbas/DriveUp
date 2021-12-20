describe('new-account page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login/create-account');
  })

  it('should display company form', () => {
		cy.wait(2000);
    // cy.get('[data-cy="select-type"]').click();
		// cy.contains('Prestador de Serviço').click();
		// cy.contains('OK').click();
		cy.get('select[name="optionsList"]').select('my value')
		cy.wait(1000);
		cy.get('[data-cy="company-type"]').should('be.visible');
  })
});
