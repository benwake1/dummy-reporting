describe('Passing Test Demo', () => {
  it('always passes', () => {
    expect(true).to.equal(true)
  })
})

describe('Demo Passing Test', () => {
before(() => {
// optional: visit any page
cy.visit('https://example.cypress.io')
})
  })


it('Intentionally fails to demo screenshots and videos', () => {
// This assertion will always fail
cy.get('h1').should('contain', 'Kitchen Sink')

})
