
import 'cypress-iframe'

describe("Handle Frames",(()=>{

    it('Approach 1',()=>{
    
       cy.visit ('https://the-internet.herokuapp.com/iframe')
       cy.wait(4000);

       let iFrame = cy.get('#mce_0_ifr')
             .its('0.contentDocument.body')
             .should('be.visible')
             .then(cy.wrap);

             iFrame.clear().type('You are Welcome{ctrl+a}');
             cy.wait(4000);

             //cy.get ('#mce_0_ifr').should('contain','You are Welcome')

        cy.get("[aria-label='Bold']").click();
        cy.wait(4000);

        cy.get("[aria-label='Italic']").click();
        cy.wait(4000);


        cy.get("[aria-label='Align center']").click();

        



    })


    it('Approach 2 - By using custom commands',()=>{
    
        cy.visit ('https://the-internet.herokuapp.com/iframe')
        cy.wait(4000);
 
            cy.getIframe('#mce_0_ifr').clear().type(' Custom Commands You are Welcome{ctrl+a}');
              cy.wait(4000);
 
         cy.get("[aria-label='Bold']").click();
         cy.wait(4000);
 
         cy.get("[aria-label='Italic']").click();
         cy.wait(4000);
 
 
         cy.get("[aria-label='Align center']").click();
 
     })



     it('Approach 3 - By using cypress iframe plugins ',()=>{
    
        cy.visit ('https://the-internet.herokuapp.com/iframe')
        cy.wait(4000);

            cy.frameLoaded('#mce_0_ifr');
 
            cy.iframe('#mce_0_ifr').clear().type(' Plugins You are Welcome{ctrl+a}');
              cy.wait(4000);
 
         cy.get("[aria-label='Bold']").click();
         cy.wait(4000);
 
         cy.get("[aria-label='Italic']").click();
         cy.wait(4000);
 
 
         cy.get("[aria-label='Align center']").click();


     })     
 
     
     
 
 }))    
    
    

   