describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })
    it('Test case 1: Positive LogIn test', () => {  
        cy.get('h2').contains('Test login');
        cy.get('h2').should('be.visible');
        cy.get('#username').type('student');
        cy.get('#password').type('Password123');
        cy.get('#submit').click();
        cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/');
        cy.get('.post-title').contains('Logged In Successfully').should('be.visible');
        cy.get('.wp-block-button__link').contains('Log out').should('be.visible');
    })

    it('Test case 2: Negative username test', () => {  
        cy.get('h2').should('be.visible');
        cy.get('#username').type('incorrectUser');
        cy.get('#password').type('Password123');
        cy.get('#submit').click();
        cy.get('#error').should('have.text','Your username is invalid!').should('be.visible');
    })

    it.only('Test case 2: Negative username test', () => {  
        cy.get('#username').type('student');
        cy.get('#password').type('incorrectPassword');
        cy.get('#submit').click();
        cy.get('#error').should('have.text','Your password is invalid!').should('be.visible');
    })

    
})