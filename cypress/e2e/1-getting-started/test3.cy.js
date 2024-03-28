const loginElement = require('../../fixtures/loginPage.json');
const testData = require('../../fixtures/testData/loginPage.json');

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/');
    })
    it.only('Test case 1: Positive LogIn test', () => {  
        cy.get('h2').contains('Test login');
        cy.get(loginElement.usernameInput).type(testData.positiveUsername);
        cy.get(loginElement.passwordInput).type(testData.positivePassword);
        cy.get(loginElement.loginButton).click();
        cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/');
        cy.get('.post-title').contains('Logged In Successfully').should('be.visible');
        cy.get('.wp-block-button__link').contains('Log out').should('be.visible');
    })

    it('Test case 2: Negative username test', () => {  
        cy.get(loginElement.usernameInput).type(testData.negativeUsername);
        cy.get(loginElement.passwordInput).type(testData.positivePassword);
        cy.get(loginElement.loginButton).click();
        cy.get('#error').should('have.text','Your username is invalid!').should('be.visible');
    })

    it('Test case 3: Negative password test', () => {  
        cy.get(loginElement.usernameInput).type(testData.positiveUsername);
        cy.get(loginElement.passwordInput).type(testData.negativePassword);
        cy.get(loginElement.loginButton).click();
        cy.get('#error').should('have.text','Your password is invalid!').should('be.visible');
    })
})