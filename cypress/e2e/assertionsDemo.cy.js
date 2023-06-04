it('Assertions Demo',()=>{

    cy.visit('https://example.cypress.io/')
    
    // cy.get('#L2AGLb > .QS5gu').scrollIntoView()
    
    cy.get('ul[class=\'home-list\']>li:nth-of-type(1)>a').click()

    // implicit assertion is should() and and()
    
    cy.get('#query-btn').should("be.visible").should('be.enabled')

    cy.get('#query-btn').should('contain','Button')
    
    cy.get('#query-btn').should('have.class','query-btn')

    cy.get('#query-btn').and('have.class','query-btn')
                        .and('be.visible')
                        .and('be.enabled')

    //------------------

    // explicit assertion is assert() and expect()

    expect(true).to.be.true

    //let name='cypress';
    //expect(name).to.be.equal('cypress')

    assert.equal(4,4,'Equal')

    assert.equal(4,'4','equal')

    assert.notEqual(4,5,'not equal')

    // cy.get('#APjFqb').type('cypress')
    
    // cy.contains('Google Search').click()
    
    // OR
    // cy.get('#APjFqb').type('cypress{Enter}')
    
    // // cy.get('.MUFPAc > :nth-child(5) > a',{timeout:6000}).click()
    
    // cy.get('.MUFPAc > :nth-child(5) > a').click()
    
    // cy.wait(5000)
    
    // cy.get('.MUFPAc > :nth-child(3) > a').click()
    
    // cy.wait(5000)
    


    
    })