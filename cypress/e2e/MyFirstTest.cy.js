   
describe('My First Test', () => {

  it.skip('Verifying Login Page. -Positive', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

   // cy.url().should('include','orangehrmlive.com')
   // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   // cy.url().should('contain','orangehrmlive')
   // cy.title().should('eq','OrangeHRM')

    cy.url().should('include','orangehrmlive.com')
            .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain','orangehrmlive')
            .and('not.contain','Webpagelive')

    cy.get('.orangehrm-login-branding > img').should('exist')
            .and('be.visible')

    cy.title().should('eq','OrangeHRM')
              .should('not.include','live.com')
          
         cy.wait(4000)

    cy.get('input[placeholder=Username').type('Admin')
    cy.get('input[placeholder=Username').should('have.value','Admin')
         cy.wait(4000)
    cy.get('input[placeholder=Password').type('admin123')
    cy.get('input[placeholder=Password').should('have.value','admin123')  
         cy.wait(4000)
    cy.get('button[type=submit').click()
         cy.wait(4000)
    
    let expName = "Bob Tester";

    cy.get('.oxd-userdropdown-name').then(  (x) => {
      let actName = x.text()
      expect (actName).to.equal(expName)
      expect (actName).to.not.equal(expName)
    })


  })

  it.skip('Verifying Login Page. -Negative', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM123')
  })

  

  it('Verifying Multiple Functions', () => {
    cy.visit("https://testautomationpractice.blogspot.com/")
         cy.wait(4000)

    cy.get('h1[class=title]').should('contain','Automation Testing Practice')  
         cy.wait(4000)

    cy.get('#name').type('Sama Prestine')
    cy.get('#email').type('samaprestine3813@gmail.com')
         cy.wait(4000)
    cy.get('#phone').type('653539554')
    cy.get('#textarea').type('Bonamoussadi')

    cy.get('#male').check()
    cy.get('input#tuesday').check()
    cy.get('#country').select('Canada')
    cy.get('option[value=green]').click()
    //cy.get('#name').check()
    //cy.get('#name').check()


   
    //cy.get('button[type=submit').click()
         cy.wait(4000)
    
         




  })

})