
describe('Data Driven Test', () => {

     it('Verifying Login Page. -Positive', () => {
          cy.fixture('Orangehrm.json').then((Userdata) => {

               cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

               Userdata.forEach((Data) => {

                    cy.url().should('include', Data.Include)
                         .and('eq', Data.Url)
                         .and('contain', Data.Logo1)
                         .and('not.contain', Data.Logo2)

                    cy.get(Data.BrandSel).should('exist')
                         .and('be.visible')

                    cy.title().should('eq', Data.Title)
                         .should('not.include', 'live.com')

                    cy.wait(4000)

                    cy.get(Data.UsernameSel).type(Data.Username);
                    cy.get(Data.UsernameSel).should('have.value', Data.Username);
                    cy.wait(4000)

                    cy.get(Data.PasswordSel).type(Data.Password);
                    cy.get(Data.PasswordSel).should('have.value', Data.Password);
                    cy.wait(4000)

                    cy.get(Data.ButtonSel).click()
                    cy.wait(4000)

                    if (Data.Username == 'Admin' && Data.Password == 'admin123') {

                         cy.get(Data.MyInfoSel).click()
                         cy.get(Data.MyInfoSel).click()

                         cy.get(Data.FirstNameSel).clear()
                              .click()
                              .type(Data.FirstName);
                         cy.wait(4000)

                         cy.get(Data.MiddleNameSel)
                              .click()
                              .type(Data.MiddleName);
                         cy.wait(4000)


                         cy.get(Data.LastNameSel).click()
                              .clear()
                              .type(Data.LastName);
                         cy.wait(4000)

                         cy.get(Data.IDSel).clear()
                              .click()
                              .type(Data.ID);
                         cy.wait(4000)

                         cy.get(Data.OtherIDSel).clear()
                              .click()
                              .type(Data.OtherID);
                         cy.wait(4000)

                         cy.get(Data.DriverLisSel).clear()
                              .type(Data.DriverLisNum)
                         cy.get(Data.LisensDateSel).clear()
                               .type(Data.LisensDate)
                         cy.get(Data.NationalitySel).click()
                         cy.get(Data.NationalitySel2).click()
                         cy.get(Data.GenderSel).click()

                         cy.get(Data.MaritalSel).click()
                         cy.get(Data.MariedSel).click()
                         cy.get(Data.SaveSel).click()




                         let expName = "Sama Prestine";

                         cy.get(Data.ActNameSel).then((x) => {
                              let actName = x.text()
                              expect(actName).to.equal(expName)
                              cy.wait(4000)

                              expect(actName).to.not.equal(expName)
                              cy.wait(4000)

                             
                              cy.get(Data.Logout1Sel).click()
                              cy.wait(4000)
                              cy.get(Data.Logout2Sel).click()

                             

                         })

                    }

                    else {

                         cy.get(Data.ExpectedSel2)
                              .should('have.text', Data.Expected2)



                    }

               })
          })


     })

})



