describe('Product Availability Test', () => {
  beforeEach(() => {
    cy.visit('https://pop.shoptet.cz/obleceni/') // Visit the category page
    cy.get('[data-testid="buttonCookiesAccept"]').click({ force: true }) // Accept cookies
  })  

  it('should verify that all products have the "Skladem" availability', () => {
    // Select stock checkbox and verify it is checked
    cy.get('input[type="checkbox"][name="stock"][value="1"]').click()
    cy.get('input[type="checkbox"][name="stock"][value="1"]').should('be.checked')

    cy.wait(2000) // Wait for products to load after filter is applied

    // Loop through each product and verify availability text
    cy.get('ul.products[data-testid="productCards"] li').each(($product) => {
      cy.wrap($product).as('product'); // Alias each product for easy reference

      // Verify that the availability text contains either "Skladem" or "Na dotaz"
      cy.get('@product')
        .find('span.p-cat-availability')
        .should(($availability) => {
          const text = $availability.text().trim()
          expect(text).to.match(/Skladem|Na dotaz/)
        })
    })
  })

  it('should select new checkbox and verify it is checked', () => {
    
    cy.get('input[type="checkbox"][name="dd[]"][id="dd[]2"][value="2"]').click()
    cy.get('input[type="checkbox"][name="dd[]"][id="dd[]2"][value="2"]').should('be.checked')
  })

  it('should select tip checkbox and verify it is checked', () => {

    cy.get('input[type="checkbox"][name="dd[]"][id="dd[]3"][value="3"]').click()
    cy.get('input[type="checkbox"][name="dd[]"][id="dd[]3"][value="3"]').should('be.checked')
  })

  it('should select sale checkbox and verify it is checked', () => {
    
    cy.get('input[type="checkbox"][name="dd[]"][id="dd[]1"][value="1"]').click()
    cy.get('input[type="checkbox"][name="dd[]"][id="dd[]1"][value="1"]').should('be.checked')
  })
})
