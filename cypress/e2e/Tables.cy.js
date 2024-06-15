describe('Handle Tables',(()=>{

    beforeEach('Login',()=>{ 
        cy.visit ("https://demo.opencart.com/admin/index.php");
              cy.wait(4000);

        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
              cy.wait(4000);

        cy.get("button[type='submit']").click();
        cy.get('.btn-close').click(),
              cy.wait(4000);

              cy.url().should('include','route=common/dashboard&user_token');

        cy.get("#menu-customer>a").click();
        cy.get("#menu-customer>ul>li:first-child").click();


    })


    it('Check Number of Rows and Columns',()=>{
      cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10');

      cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7');

    })


    it('Check cell Data from Specific Rows and Columns',()=>{
      cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
         .contains('hfgjhgjgjggj@gmail.com');
    
    })


    it('Read all the Rows and Columns Data in the First Page ',()=>{
      cy.get('table[class="table table-bordered table-hover"]>tbody>tr')
         .each(  ($row, index, $rows)=>{

            cy.wrap($row).within( ( )=>{

                  cy.get("td").each(  ($col, index, $cols)=>{
                        cy.log($col.text());

                  })

            })

         })

    })


    it('Pagination',()=>{

      //Find total number of pages.
      let totalPages;
      cy.get(".col-sm-6.text-end").then((e)=>{
            let mytext = e.text();

           totalPages = mytext.substring( mytext.indexOf("(")+1, mytext.indexOf("Pages")-1);
           cy.log("Total number of pages in a table=====>" +totalPages);
      

      for(let p=1; p<=totalPages; p++){

            if(totalPages>1){

                  cy.log("Active page is ===>"+p);

                  cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                  cy.wait (1000);

                  cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                  .each( ($row, index, $rows)=>{
                        cy.wrap($row).within(()=>{
                              cy.get('td:nth-child(3)').then((e)=>{
                                    cy.log(e.text());


                              })


                        })


                  })




            }




      }




      })


        
    })

 }))