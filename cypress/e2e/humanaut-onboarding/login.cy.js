/* 
 # login.cy.js
 #
 # Description: Tests users' ability of being able to login/signup into system
 # By Kevin Nguyen
 # November 13, 2024 
 */

describe('Navigation', () => {
  it('sign up', () => {
    cy.loginSignup("foo3123", true);
  })

  it('login', () => {
    cy.loginSignup("foo3123", false);
  })
})