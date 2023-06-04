export class LoginPage{

    //in page class ,we can create variables for objects locators
    username_textbox='input[name=\'username\']'
    login_submit='button[type=\'submit\']'
    
    //password_textbox='input[name=\'password\']' istersem yaparim

    //we can pass the data "username" from test scripts
    enterUserName(username){
        cy.get(this.username_textbox).type(username)

    }

    enterPassword(password){
        cy.get('input[name=\'password\']').type(password)
    }

    cliskSubmit(){
        cy.get(this.login_submit).click()
    }
}