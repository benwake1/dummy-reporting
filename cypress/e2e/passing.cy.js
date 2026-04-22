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
	
	it('Can visit the homepage', () => {
	    cy.visit('https://example.cypress.io')
	});

})
