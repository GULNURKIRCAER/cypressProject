/// <reference types="cypress"/>

before(function(){
    
    cy.fixture('example.json').as('test_data')
})
it('Read Files using Fixture',function(){

    //cunku bu dosya var bizde
   cy.fixture('example.json').then((data)=>{
      
    cy.log(data.name)
    cy.log(data.email)
   })

   cy.log(this.test_data.name)
})

it('Read Files using readFile()',function(){
      
    cy.readFile('cypress/fixtures/example.json').then((data)=>{

        cy.log(data.name)
    })
})

it('Write file demo',function(){
    
    cy.writeFile('sample.txt','hello,I am gulnur ,')

    // cy.writeFile('sample.txt','I am learning cypress')
    
    cy.writeFile('sample.txt','I am learning cypress',{flag:'a+'})


})