/* 
 # commads.js
 #
 # Description: Initial set of commands shared by many tests
 # By Kevin Nguyen
 # November 13, 2024 
 */


Cypress.Commands.add('loginSignup', (emailUsername, isSignup) => {
  // This is the email that will be used in the signup
  let email = emailUsername + "@testsendr.link";
  cy.clearCookies()

  cy.visit('https://qa.my.humanauthealth.com/')

  if (isSignup) {
    cy.contains('Sign up').click()
    cy.get('#email').type(`${email}{enter}`);
  } else {
    cy.get('#username').type(`${email}{enter}`);
  }

  // Wait 4 seconds for the email to send
  cy.wait(4000)

  // Make a request to get the most recently sent email from testsendr
  // DOCUMENTATION FOR TESTSENDR: https://testsendr.link/docs/quick-start
  cy.request("GET", `https://api.testsendr.link/?email=${email}`, {
  }).then((response) => {
    // Makes sure response was successful and we were able to get the email
    expect(response.status).to.eq(200)
    expect(response.body[0].subject).to.eq("Log in to your Humanaut Health Account")

    console.log(response.body)

    let sortedRecentMessages = response.body.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    var verificationCode = sortedRecentMessages[0].text.replace(/[^\d]+/g, ''); 
    cy.get('#code').type(`${verificationCode}{enter}`);
  });

  cy.title().should('eq', 'Humanaut Member Portal');
});