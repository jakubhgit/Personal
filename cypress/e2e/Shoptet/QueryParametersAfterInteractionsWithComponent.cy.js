// Function to check and verify a checkbox's state and URL update
function checkAndVerifyCheckbox(checkboxSelector, urlParam) {
  cy.get(checkboxSelector).click() // Click the checkbox to select it
  cy.url().should('include', urlParam) // Verify the URL includes the correct parameter for the checkbox
}

describe('Category Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://pop.shoptet.cz/obleceni/'); // Visit the category page
    cy.get('[data-testid="buttonCookiesAccept"]').click({ force: true }); // Accept cookies
  })

  // Test to check if the price range slider updates the URL
  it('should update price range and reflect it in the URL', () => {
    cy.get('#slider-range > a:nth-child(2)').click({ force: true }).type('{rightarrow}'); // Increase the price range
    cy.wait(2000) // Wait for price to update
    cy.get('#slider-range > a:nth-child(3)').click({ force: true }).type('{leftarrow}'); // Decrease the price range
    cy.url().should('include', 'priceMin=201.00') // Verify the min price
    cy.url().should('include', 'priceMax=1149.00') // Verify the max price
  })

  // Test to check the stock checkbox and verify URL update
  it('should select the stock checkbox and verify the state and URL update', () => {
    checkAndVerifyCheckbox('input[type="checkbox"][name="stock"][value="1"]', 'stock=1') // Select stock checkbox and verify
  })

  // Test to check the sale checkbox and verify URL update
  it('should select the sale checkbox and verify the state and URL update', () => {
    checkAndVerifyCheckbox('input[type="checkbox"][name="dd[]"][id="dd[]1"][value="1"]', 'dd=1') // Select sale checkbox and verify
  })

  // Test to check the news checkbox and verify URL update
  it('should select the news checkbox and verify the state and URL update', () => {
    checkAndVerifyCheckbox('input[type="checkbox"][name="dd[]"][id="dd[]2"][value="2"]', 'dd=2') // Select news checkbox and verify
  })

  // Test to check the tip checkbox and verify URL update
  it('should select the tip checkbox and verify the state and URL update', () => {
    checkAndVerifyCheckbox('input[type="checkbox"][name="dd[]"][id="dd[]3"][value="3"]', 'dd=3') // Select tip checkbox and verify
  })

  // Test to check a combination of stock and news checkboxes and verify URL update
  it('should select combination of stock and news checkboxes and verify URL update', () => {
    checkAndVerifyCheckbox('input[type="checkbox"][name="stock"][value="1"]', 'stock=1'); // Select stock checkbox
    checkAndVerifyCheckbox('input[type="checkbox"][name="dd[]"][id="dd[]2"][value="2"]', 'dd=2') // Select news checkbox
  })

  // Test for selecting a combination of sale and tip checkboxes and verifying URL update
it('should select sale and tip checkboxes and verify the URL includes both filters', () => {
    
  // Click on sale checkbox
  cy.get('input[type="checkbox"][name="dd[]"][id="dd[]1"][value="1"]').click()

  // Click on tip checkbox
  cy.get('input[type="checkbox"][name="dd[]"][id="dd[]3"][value="3"]').click()

  // Verify that the URL contains both 'dd=1' and 'dd=3' parameters
  cy.url().should('include', 'dd=1,3')
})

// Test for updating price range and selecting stock, sale, and news checkboxes, and verifying the URL update
it('should update price range and verify stock, sale, and news checkboxes and URL update', () => {
  // Adjust the price range by clicking on the slider
  cy.get('#slider-range > a:nth-child(2)').click({ force: true }).type('{rightarrow}')
  cy.wait(2000); // Wait for the price range to adjust
  cy.get('#slider-range > a:nth-child(3)').click({ force: true }).type('{leftarrow}')
  cy.wait(2000); // Wait for the price range to adjust

  // Select stock checkbox
  cy.get('input[type="checkbox"][name="stock"][value="1"]').click()

  // Select sale checkbox
  cy.get('input[type="checkbox"][name="dd[]"][id="dd[]1"][value="1"]').click()

  // Select news checkbox
  cy.get('input[type="checkbox"][name="dd[]"][id="dd[]2"][value="2"]').click()

  // Verify that the URL contains all selected filters (price range, stock, sale, and news)
  cy.url().should('include', 'priceMin=201.00&priceMax=1149.00&stock=1&dd=1,2')
  
})
})