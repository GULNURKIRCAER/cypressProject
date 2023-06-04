import { LoginPage } from "./pages.js/login_page"

const loginPage=new LoginPage()  //const=constant
//var=for creating or defining a variable
//let=new convention

//to group all tests in a describe block
describe('All Login Tests', function(){

    //describe'dan once de koyulabilir. eger descripe disarisinda test varsa
    beforeEach(function(){
        
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

// to run some particular test it.only
// it.only('POM Demo',function(){

// to skip this test
it.skip('POM Demo',function(){
    
    //url is repeating, so we have to create beforeEach
    // cy.visit('https://opensource-demo.orangehrmlive.com/')

    loginPage.enterUserName('Admin')

    loginPage.enterPassword('admin123')

    loginPage.cliskSubmit()

    cy.wait(1000)


})

it('login test',function(){
    
    // cy.visit('https://opensource-demo.orangehrmlive.com/')

    loginPage.enterUserName('Admin123')

    loginPage.enterPassword('admin123')

    loginPage.cliskSubmit()

    cy.wait(1000)

    cy.get('.oxd-alert-content > .oxd-text').should('be.visible')

    cy.contains('Admin').should('not.be.enabled')
})
})