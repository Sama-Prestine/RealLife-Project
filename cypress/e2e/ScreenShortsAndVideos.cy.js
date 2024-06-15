
describe("MyScreenshorts/Videos", () =>{

   it('Capture ScreenShorts & Videos', () =>{

        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq',"Your Store");

        cy.wait(2000);

          cy.screenshot("Homepage");

          cy.wait(5000);

            cy.get("img[title='Your Store']").screenshot("Logo");

    })


    it('Capture ScreenShorts & Videos', () =>{

        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq',"Your Store");

          cy.get('li:nth-child(7) a:nth-child(1)').click();
          cy.get("div[id='content'] h2").should('have.text', "Tablets");

            cy.reload();


    })


})