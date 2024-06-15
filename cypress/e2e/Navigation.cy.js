
// Go Command

describe("Mysuite", ()=>{

    it.only('NavigationTest', ()=>{

        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq',"Your Store");
        cy.screenshot("Homepage");

        cy.wait(2000);

          cy.get('li:nth-child(7) a:nth-child(1)').click();
          cy.get("div[id='content'] h2").should('have.text', "Cameras");
          cy.screenshot("Camera");

          cy.wait(2000);

             cy.go('back');   //Go back to the home page.
             cy.title().should('eq',"Your Store");

             cy.wait(2000);

               cy.go('forward');
                cy.get("div[id='content'] h2").should('have.text', "Cameras");

                cy.wait(2000);

                  cy.go(-1);
                  cy.title().should('eq',"Your Store");

                  cy.wait(2000);

                    cy.go(+1);
                    cy.get("div[id='content'] h2").should('have.text', "Cameras");

                    cy.wait(2000);

                      cy.go(-1);
                      cy.title().should('eq',"Your Store");

                      cy.wait(2000);

                        cy.reload();

                          cy.get('li:nth-child(6) a:nth-child(1)').click();
                          cy.get("div[id='content'] h2").should('have.text',"Phones & PDAs");
                          cy.screenshot("Phone");

                            cy.go(-1);
                          cy.title().should('eq',"Your Store");
    

                            
                            


                    
  






    })


})