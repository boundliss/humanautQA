/* 
 # login.cy.js
 #
 # Description: Tests users' ability of being able to login/signup into system
 # By Kevin Nguyen
 # November 13, 2024 
 */

describe('Navigation', () => {
  it('paybill', () => {
    cy.loginSignup("foo31234", true);

    cy.get('input[placeholder="Choose a clinic"]', { timeout: 10000 }).click()
    cy.contains('The Grove').click()
    cy.contains('Continue').click()

    cy.get('input[placeholder="Add promotion code"]', { timeout: 10000 }).type('test-1')
    cy.contains('Apply code').closest('button').click();
    cy.get('input[type="checkbox"]').eq(0).click();
    cy.get('input[type="checkbox"]').eq(1).click();


    // User should enter card details
    cy.contains('Add New Card').closest('button').click().click().pause();

    cy.contains('Submit').click();
    
  })
})