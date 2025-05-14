var pageLocators = {
    practiceTab: '#menu-item-20 > a',
    LoginLinkPage: 'Test Login Page',
    username: 'student',
    pass: 'Password123',
    txtUser: '#username',
    txtPass: '#password',
  }
 
  class homePage {
    practiceTab() { 
        return cy.get(pageLocators.practiceTab); 
    }
    gotoPracticeTab() { 
        return this.practiceTab().click({force: true}); 
    }

    linkLoginPage() { 
      return cy.contains(pageLocators.LoginLinkPage).click();
    }


    inputUser(){
      return cy.get(pageLocators.txtUser);
    }

    inputPass(){
      return cy.get(pageLocators.txtPass);
    }

    writeUser(user){
      return this.inputUser().type(user);
    }
    
    writePass(pass){
      return this.inputPass().type(pass);
    }
   
  }
  export default homePage;
