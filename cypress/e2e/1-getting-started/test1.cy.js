describe('example to-do app', () => {
    it('Test case 1: Positive LogIn test', () => {  
        cy.visit('https://practicetestautomation.com/practice-test-login/') 
        // cy.get('#title-container')  
        // cy.get('[id="title-container"]') 
        // cy.get('#site-title').invoke('text').as('header-text')
        cy.get('h2').contains('Test login');
        cy.get('h2').should('be.visible');
        // cy.get('h2').should('not.be.visible');
        cy.get('#username').type('student');
        cy.get('#password').type('Password123');
        cy.get('#submit').click();
        // cy.log(cy.url());
        cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/');
        cy.get('.post-title').contains('Logged In Successfully').should('be.visible');
        cy.get('.wp-block-button__link').contains('Log out').should('be.visible');
    })
})


//[บรรทัดที่10] = กรอก Username
//[บรรทัดที่11] = กรอก Password
//[บรรทัดที่12] = เป็นปุ่มกด submit เพื่อ login
//[บรรทัดที่14] = จากที่ submit จากบรรทัดที่ 12 จะไปอีกลิ้งค์ที่ได้ใส่ไว้
//[บรรทัดที่15] = แสดงข้อความ Logged In Successfully
//[บรรทัดที่16] = มีปุ่ม Log out
