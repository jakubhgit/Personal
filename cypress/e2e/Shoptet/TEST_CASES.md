# Verification Query Parameters After Component Interaction

## Test Case ID: TC-001

**Test Case Description**  
Verification of URL parameters update after using a slider that determines the price range.

### Pre-Conditions  
1. User is at [https://pop.shoptet.cz/obleceni/].
2. The price of the products on the page varies, and the user has the option to adjust the price range.  
3. The web page is fully loaded and available to interact with the elements.

### Test Data  
URL: [https://pop.shoptet.cz/obleceni/].

### Test Steps  
1. Go to [https://pop.shoptet.cz/obleceni/].
2. Click on the "Accept Cookies" button.  
3. Adjust the price limit to a minimum of 201 CZK and a maximum of 1499 CZK.

### Expected Result  
1. After adjusting the price limit to a minimum value of 201 CZK and a maximum value of 1499 CZK, the display of products is adjusted according to the set price limit.  
2. The URL contains the parameters `priceMin=201.00` and `priceMax=1499.00`, reflecting the set price range.

### Post Conditions  
1. The page remains in a filtered state with an active price limit between 201 CZK and 1499 CZK.  
2. Products displayed on the page are filtered based on the current price range.  
3. The URL contains the parameters `priceMin=201.00` and `priceMax=1499.00`, which correspond to the set filters.  
4. The user can continue to interact with the filter or the products on the page.

### Actual Result  
*(It will be filled after testing)*

### Status  
*(Pass/Fail)*

---

## Test Case ID: TC-002

**Test Case Description**  
Verification of URL parameters update after using slider and checkboxes “In Stock”, “Sale”, “New” on the page.

### Pre-Conditions  
1. The user is at [https://pop.shoptet.cz/obleceni/].  
2. The price of the products on the page varies, and the user has the ability to adjust the price range.  
3. The web page is fully loaded and available to interact with the elements.  
4. Checkboxes for filters such as "In Stock", "Sale", and "New" are available and functional.

### Test Data  
URL: [https://pop.shoptet.cz/obleceni/]

### Test Steps  
1. Go to [https://pop.shoptet.cz/obleceni/].  
2. Adjust the price threshold to a minimum of 201 CZK and a maximum of 1499 CZK.  
3. Select the checkbox "In stock", "Sale", "New".

### Expected Result  
1. After accepting cookies, the page loads, and the user can adjust the price threshold.  
2. After adjusting the price limit to a minimum value of 201 CZK and a maximum value of 1499 CZK, the products are displayed according to the set price limit.  
3. After checking the "In stock", "Sale", and "New" checkboxes, the filter is applied, and the page displays only products that meet these criteria.  
4. The URL contains the following parameters: `priceMin=201.00&priceMax=1499.00&stock=1&dd=1,2`, which reflects the applied filters for price and availability of products.

### Post Conditions  
1. The page remains in a filtered state with an active price threshold between 201 CZK and 1499 CZK.  
2. Products displayed on the page are filtered based on the current price threshold and selected checkboxes ("In Stock", "Sale", "New").  
3. The URL contains parameters `priceMin=201.00&priceMax=1499.00&stock=1&dd=1,2`, which correspond to the set filters.  
4. The user can continue to interact with the filter, products, or other options on the page.

### Actual Result  
*(It will be filled after testing)*

### Status  
*(Pass/Fail)*


# Check Visible Output Based On The Interaction With Component

## Test Case ID: TC-001

**Test Case Description**  
Verification of products after using the "In Stock" filter.

### Pre-Conditions  
1. User is at [https://pop.shoptet.cz/obleceni/]. 
2. Products have availability marked as "In Stock" or "On Request".  

### Test Data  
URL: [https://pop.shoptet.cz/obleceni/].

### Test Steps  
1. Go to [https://pop.shoptet.cz/obleceni/].
2. Click on the "Accept Cookies" button.  
3. Click on the "In Stock" checkbox.  
4. Ensure the "In Stock" checkbox is checked.  
5. Check each product in the product card:  
   * Verify that product availability is marked as "In Stock" or "On Request".  

### Expected Result  
1. The "In Stock" checkbox is checked.  
2. Each product has availability marked as "In Stock" or "On Request".  

### Post Conditions  
1. The page remains in a filtered state with the "In Stock" filter active.  
2. Products in the list reflect the applied filter.  

### Actual Result  
*(To be filled in after the test)*  

### Status  
*(Pass/Fail)*  

---

## Test Case ID: TC-002

**Test Case Description**  
Verification of the "News" checkbox after checking it.

### Pre-Conditions  
1. User is at [https://pop.shoptet.cz/obleceni/].
2. The "News" checkbox is visible on the page.  

### Test Data  
URL: [https://pop.shoptet.cz/obleceni/].

### Test Steps  
1. Go to [https://pop.shoptet.cz/obleceni/].
2. Click on the "Accept Cookies" button.  
3. Click on the "News" checkbox.  
4. Ensure the "News" checkbox is checked.  

### Expected Result  
1. The "News" checkbox is visible.  
2. The "News" checkbox can be checked.  
3. The "News" checkbox remains checked.  

### Post Conditions  
1. The status of the "News" checkbox is saved, and its check is maintained until the user leaves or refreshes the page.  

### Actual Result  
*(To be filled in after the test)*  

### Status  
*(Pass/Fail)*  

---

## Test Case ID: TC-003

**Test Case Description**  
Verifying the marking of a combination of multiple checkboxes.

### Pre-Conditions  
1. User is at [https://pop.shoptet.cz/obleceni/]. 
2. Checkboxes "New", "In Stock", "Tip", and "Sale" are visible on the page.  

### Test Data  
URL: [https://pop.shoptet.cz/obleceni/].

### Test Steps  
1. Go to [https://pop.shoptet.cz/obleceni/].  
2. Click on the "Accept Cookies" button.  
3. Click on the checkboxes "News", "In Stock", "Tip", and "Sale".  

### Expected Result  
1. The "New", "In Stock", "Tip", and "Sale" checkboxes are visible.  
2. Checkboxes can be checked.  
3. Checkboxes remain checked.  

### Post Conditions  
1. The checkbox condition is saved, and its combined marking is retained until the user leaves or refreshes the page.  

### Actual Result  
*(To be filled in after the test)*  

### Status  
*(Pass/Fail)*  
