import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe("Mouse Operations", ()=>{

    it('Mouse Hover',()=>  {

        cy.visit("https://demo.opencart.com/");

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link')
          .should('not.be.visible');

        cy.get('.nav > :nth-child(1) > .dropdown-toggle')
          .trigger('mouseover')
          .click();

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link')
          .should('be.visible');




    });

    it('Rigth Click', () =>{

         cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html");
    
    //Approuch 1
         cy.get('.context-menu-one')
           .trigger('contextmenu');
        
        cy.get('.context-menu-icon-copy > span').should('be.visible');

    //Approuch 2
           cy.get('.context-menu-one')
             .rightclick();

           cy.get('.context-menu-icon-copy > span')
             .should('be.visible');
      

    });


    it('Doudle Click', () =>{ 
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded('#iframeResult');
        cy.get('#accept-choices').click();

    //Aprouch 1 to Double cick.
         cy.iframe('#iframeResult')
            .find("button[ondblclick='myFunction()']")
            .trigger('dblclick');
          
         cy.iframe('#iframeResult')
            .find('#field2')
            .should('have.value','Hello World!');
            

    //Approuch 2
          cy.iframe('#iframeResult')
            .find("button[ondblclick='myFunction()']")
            .dblclick();
          
         cy.iframe('#iframeResult')
            .find('#field2')
            .should('have.value','Hello World!');

    });


    it('Drag and Drop using plugin', () =>{ 
      cy.visit('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');

      cy.get('#box7').drag('#box106', {force:true});
      cy.get('#box6').drag('#box104', {force:true});
      cy.get('#box4').drag('#box102', {force:true});
      cy.get('#box3').drag('#box103', {force:true});
      cy.get('#box5').drag('#box105', {force:true});
      cy.get('#box1').drag('#box107', {force:true});
      cy.get('#box2').drag('#box101', {force:true});

    });


    it.only('Scrolling Page', () =>{

      cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")

      cy.get("img[alt='Flag of India']")
        .scrollIntoView({duration:4000})

      cy.get("img[alt='Flag of India']")
        .should('be.visible')

      cy.get("img[alt='Flag of El Salvador']")
        .scrollIntoView({duration: 4000})

      cy.get("img[alt='Flag of El Salvador']")
        .should('be.visible')

      cy.get("#footer")
        .scrollIntoView({duration: 4000})

  









    });

});