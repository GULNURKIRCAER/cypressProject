/// <reference types="cypress"/>

//  it('Google Search',function(){
//     cy.visit('https://google.com/')
//  })

// or

it('Google Search',()=>{

cy.visit('https://google.com/')

cy.get('#L2AGLb > .QS5gu').scrollIntoView()

cy.get('#L2AGLb > .QS5gu').click()

cy.get('#APjFqb').type('cypress')

cy.contains('Google Search').click()

// OR
// cy.get('#APjFqb').type('cypress{Enter}')

// cy.get('.MUFPAc > :nth-child(5) > a',{timeout:6000}).click()

cy.get('.MUFPAc > :nth-child(5) > a').click()

cy.wait(5000)

cy.get('.MUFPAc > :nth-child(3) > a').click()

cy.wait(5000)

// implicit assertion is should() and and()
// explicit assertion is assert() and expect()

//npx cypress open
//npx cypress run
//npx cypress run -h
// npx cypress run --help
// --spec or -s
// --browser or -b
// --headless
})