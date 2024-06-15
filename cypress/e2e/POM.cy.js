import Login from "../fixtures/PageObjects/Loginpage2";

describe( 'POM', () =>{

    it( "LoginTest", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln=new Login();
        ln.setUserName("Admin");
        ln.setPassword("admin123");
        ln.clickSubmit();
        ln.verifyLogin();

    })

})