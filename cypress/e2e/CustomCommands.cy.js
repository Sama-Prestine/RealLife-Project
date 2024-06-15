 // Click on a link using label.
 // Over writing existing contains() command.
 // Re-usable custom command.


 describe('Custom Commands', () =>{


    it('Handling links', () =>{

        cy.visit("https://demo.nopcommerce.com/")

    // Direct method without Custom Comman.
        // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)")
         //  .click();

           //Using Custom Command.
           cy.clickLink("Apple MacBook Pro 13-inch");

        cy.get("div[class='product-name'] h1")
          .should('have.text','Apple MacBook Pro 13-inch');

        cy.clickLink("Home");

        cy.clickLink("Build your own computer");

        cy.get("div[class='product-name'] h1")
          .should('have.text','Build your own computer');

          cy.clickLink("Home");

        cy.clickLink("$25 Virtual Gift Card");

        cy.get("div[class='product-name'] h1")
          .should('have.text','$25 Virtual Gift Card');

    })


    it.only('Overwriting existing command', () =>{

        cy.visit("https://demo.nopcommerce.com/")

        //Using Custom Command.
        cy.clickLink("APPLE MACBOOK PRO 13-inch");

        cy.get("div[class='product-name'] h1")
          .should('have.text','Apple MacBook Pro 13-inch');

          cy.clickLink("Home");

         cy.clickLink("Apple MacBook Pro 13-inch");

        cy.get("div[class='product-name'] h1")
        .should('have.text','Apple MacBook Pro 13-inch');

    })


    it("Login Command", () =>{

      cy.visit("https://demo.nopcommerce.com/");

      cy.clickLink("Log in"); // Custom Command
        
        cy.loginapp("samaprestine3813@gmail.com","Success3813@"); // Custom Command

        cy.get('.ico-account').should('have.text','My account');


    })


 })