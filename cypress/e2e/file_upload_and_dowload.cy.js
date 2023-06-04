/// <reference types="cypress-downloadfile"/>


it('File Upload Demo',function(){

    cy.visit('https://trytestingthis.netlify.app/')

    cy.get('#myfile').scrollIntoView()
    
    //file is under fixtures
    cy.get('#myfile').attachFile('sample.txt')
})

it('File Download Demo',function(){

    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})