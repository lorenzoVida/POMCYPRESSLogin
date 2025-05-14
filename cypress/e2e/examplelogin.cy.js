// En primer lugar, debemos importar el POM de la locación correspondiente.

import homePage from "../support/pages/homePage.js";
//Creamos una instancia de la clase
const HOME_PAGE = new homePage();

context("Example 01", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Login with bad credentials",()=>{
        HOME_PAGE.gotoPracticeTab();
        HOME_PAGE.linkLoginPage();
        HOME_PAGE.writeUser('student');
        HOME_PAGE.writePass('Password123');
    })
});