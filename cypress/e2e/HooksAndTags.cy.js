//Before
//After
//BeforeEach
//AfterEach

describe('MyTestSuite', ()=>{

    before(()=>{

        cy.log("***** Lounch App *****");
    })

    after(()=>{

        cy.log("***** Close App *****");
    })

    beforeEach(()=>{

        cy.log("***** Login *****");
    })

    afterEach(()=>{

        cy.log("***** Logout *****");
    })



    it.skip('Search', ()=>{



    })


    it('Advanced search',()=>{




    })


    it.only('Listing Product',()=>{



    })

})
    
  