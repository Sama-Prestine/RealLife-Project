describe('Alert', () => {

it('Verifying Alert -Positive', () => {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

      cy.get("button[onclick='jsAlert()']").click();

      cy.on('window:alert',(t)=>{
        expect(t).to.contain('I am a JS Alert')

        cy.get("#result").should('have.text','You successfully clicked an alert')

      })


    })

        
    
it('Verifying Alert - Ok Confirmation', () => {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

      cy.get("button[onclick='jsConfirm()']").click();

      cy.on('window:confirm',(t)=>{
        expect(t).to.contain('I am a JS Confirm')

      cy.get("#result").should('have.text','You clicked: Ok')


      })
})


it('Verifying Alert - Cancel Confirmation', () => {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

      cy.get("button[onclick='jsConfirm()']").click();

      cy.on('window:confirm',(t)=>{
        expect(t).to.contain('I am a JS Confirm')
      })

        cy.on('window:confirm',()=> false);

      cy.get("#result").should('have.text','You clicked: Cancel')

      })



it('Verifying Alert - Prompt Confirmation', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
           
            cy.window().then ((win) =>{
                cy.stub(win,'prompt').returns('Welcome')
            })
    
          cy.get("button[onclick='jsPrompt()']").click();
    
          cy.get("#result").should('have.text','You entered: Welcome')
    
    
          })
    
    
it('Verifying Alert - Prompt Cancel', () => {

            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
               
                cy.window().then ((win) =>{
                    cy.stub(win,'prompt').returns('Welcome')
                })
        
              cy.get("button[onclick='jsPrompt()']").click();
              
                cy.on('window:prompt',()=> false);
        
              cy.get("#result").should('have.text','You entered: null')
        
        
              })
    

it('Verifying Alert - Autenticator ', () => {

        cy.visit("https://adminthe-internet.herokuapp.com/basic_auth", {auth:
                                                                          {
                                                                            username:'Admin',
                                                                            passward:'admin'
                                                                        }
                                                                    });

        cy.get("div[class='example'] p").should('have.text',
                             'Congratulations! You must have the proper credentials.')

         cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
         cy.get("div[class='example'] p").should('have.contain','Congratulations!');
            
      
            
                  })
        
})   
    




