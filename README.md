# Initial testing for Humanaut Onboarding
By Kevin Nguyen
November 13, 2024

## Intro

This repository contains the initial QA testing suite for Humanaut Health's onboarding web app, focused on the user-side. The tests are built using the Cypress testing framework and target the QA environment of the app here: https://qa.my.humanauthealth.com/

## Quick Start
To run the tests locally, follow these steps:
1. Clone the repo `git clone {REPO_URL}`

2. Navigate to project directory `cd /path/to/repo`

3. npx cypress open

## What's Been Done
  - Implemented logging in and signing up existing/new users
  - Bypassed the OTP login step to streamline testing.

## Though Process of OTP Implementation

When going through the onboarding process, I identified the hardest thing to QA test around would be OTP and payments. 

From looking for solutions from various sources (i.e Reddit, StackOverflow, blogs, etc), I explored the following solutions:
1. Login to Gmail via Cypress:
  - Pros:
    - Easy to implement
  - Cons:
    - Time consuming - requires going through Google sign in process every time
    - Clunky code - Google sign in flow isn't the same every time
    - Limited to only one email address - would have to create a whole gmail to make another account or use the youremail+test@gmail.com
2. Use gmail API to access email
  - Pros:
    - Intuitive
  - Cons:
    - API is complex to work with
    - Setting up on each machine would be a hassle
    - Limited to only one email address - would have to create a whole gmail to make another account or use the youremail+test@gmail.com
2. OTP Lib/Get OTP from DB (as described here):
  - Pros:
    - Conceptually straightforward to implement
    - No need to deal with emails
  - Cons:
    - Need access to code base/database (which I don't have)
    - Skips testing OTP email
3. Use an email service designed for QA:
  - Pros:
    - Conceptually easy to implement
    - Plenty of services available. Choose which fulfills use case
    - Can make as many new emails as you wish
  - Cons:
    - Some services cost money (there are free tiers that are already pretty useful)
    - Lack of long term storage of emails (free tier limitation)

  
## TODO
- Create a more functions that eliminate reptitive tasks (i.e login, signup)
  - Create an account and "onboard" that user up to a certain stage of onboarding process(i.e completed their bloodwork, came into office, etc)
- Handle Stripe paywalls:
  - Bypass payment
    - Accounts with emails ending in a certain url (i.e testsender.link) don't get charged
    - Promo code that allows for bypassing payment (coded in QA .env variable)
  - Check out Stripe-mock. This solution potentially allows us to test cases such as declined payments as well 