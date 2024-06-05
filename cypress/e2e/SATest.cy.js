describe('Tendable Website Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.tendable.com');
  });

  describe('Top-level Menus Accessibility', () => {
    const menuItems = ['Our Story', 'Our Solution', 'Why Tendable'];
    it('should confirm accessibility of top-level menus', () => {
      menuItems.forEach((item) => {
        cy.get('nav').contains(item).should('be.visible');
      });
    });
  });

  describe('"Request a Demo" Button Presence', () => {
    it('should verify the "Request a Demo"', () => {
          cy.get('a.button').contains('Request A Demo').should('be.visible')
    });
  });

  describe('Contact Us Form Submission', () => {

    it('should navigate to "Contact Us", choose "Marketing" and submit the form', () => {
      cy.get('a.button').contains('Contact Us').click()
      cy.contains('div', 'Marketing').parent()
      .within(() => {
        cy.get('button')
          .contains('Contact')
          .click();
        });
      cy.get('input[name="fullName"]').first().type('Test User');
      cy.get('input[name="email"]').first().type('test@example.com');
      cy.get('input[name="cellPhone"]').first().type('1234567890');
      cy.get('input[name="organisationName"]').first().type('Org Name')
      cy.get('input[name="consentAgreed"]').first().click()
      cy.get('button[name="form_page_submit"]').first().click();
      cy.contains('This field is required').should('be.visible');
    });
  });

});
