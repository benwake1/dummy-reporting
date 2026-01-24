describe('Dummy test', () => {
  it('always passes', () => {
    expect(true).to.equal(true)
  })
})

describe('Demo Failing Test', () => {
before(() => {
// optional: visit any page
cy.visit('https://example.cypress.io')
})


it('Intentionally fails to demo screenshots and videos', () => {
// This assertion will always fail
cy.get('h1').should('contain', 'THIS TEXT DOES NOT EXIST')


// Another failing assertion
cy.get('body').should('have.class', 'non-existent-class')
})
})
