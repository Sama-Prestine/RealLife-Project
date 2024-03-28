describe('Handle Tables',(()=>{

    beforeEach('Login',()=>{ 
        cy.visit ("https://demo.opencart.com/admin/index.php");
              cy.wait(4000);

        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
              cy.wait(4000);

        cy.get("button[type='submit']").click();
        cy.get('.btn-close').click
              cy.wait(4000);

              cy.url().should('include','route=common/dashboard&user_token');

        cy.get("#menu-customer>a").click();
        cy.get("#menu-customer>ul>li:first-child").click();


    })


    it('Check Number of Rows and Columns',()=>{



    })


    it.skip('Check cell Data from Specific Rows and Columns',()=>{


        
    })


    it.skip('Read all the Rows and Columns Data in the First Page ',()=>{


        
    })


    it.skip('Pagination',()=>{


        
    })









}))