   
describe('My First Test', () => {
     
     let Data ;
     before( ()=>{
          cy.fixture('Orangehrm.json').then((Userdata)=>{
               Data = Userdata;
           
          })
clear
     })

  it('Verifying Login Page. -Positive', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  
    cy.url().should('include', Data.Include)
            .and('eq', Data.Url)
            .and('contain', Data.Logo1)
            .and('not.contain',Data.Logo2)

    cy.get(Data.BrandSel ).should('exist')
            .and('be.visible')

    cy.title().should('eq',Data.Title)
              .should('not.include','live.com')
          
         cy.wait(4000)

    cy.get(Data.UsernameSel).type(Data.Username);
    cy.get(Data.UsernameSel).should('have.value',Data.Username);
         cy.wait(4000)

    cy.get(Data.PasswordSel).type(Data.Password);
    cy.get(Data.PasswordSel).should('have.value',Data.Password);  
         cy.wait(4000)

    cy.get(Data.ButtonSel).click()
         cy.wait(4000)
    
    let expName = "Test 34 Kondem";

    cy.get(Data.ActNameSel).then(  (x) => {
      let actName = x.text()
      expect (actName).to.equal(expName)
          cy.wait(4000)

      cy.get('.oxd-main-menu-item.active').click()
      cy.get(' :nth-child(6) > .oxd-main-menu-item').click()
      expect (actName).to.not.equal(expName) 
      cy.wait(4000)


     

    
}) 



  it('Verifying Login Page. -Negative', () => {
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

})