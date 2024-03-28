
describe("Handle Tabs",(()=>{

it('Approach 1',()=>{

   cy.visit ('https://the-internet.herokuapp.com/windows')
   cy.wait(4000);

   cy.get('.example >a') .invoke('removeAttr','target').click();
   cy.wait(4000);

   cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
   cy.wait(4000);

   cy.go('back');
   cy.wait(4000);

   cy.url().should('include','https://the-internet.herokuapp.com/windows')

})



    it('Approach 2',()=>{
    
       cy.visit ('https://the-internet.herokuapp.com/windows')
       cy.wait(4000);
    
       cy.get('.example >a') .then((e)=>{

        let url = e.prop('href');

        cy.visit(url);
        cy.wait(4000);

       })
    
       cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
       cy.wait(4000);
    
       cy.go('back');
    
       cy.url().should('include','https://the-internet.herokuapp.com/windows')

    })


}))