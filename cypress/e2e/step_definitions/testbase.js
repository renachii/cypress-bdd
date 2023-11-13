import {Before} from "@badeball/cypress-cucumber-preprocessor";
import loginpage from "../../support/pages/loginpage";

Before(function () {
    cy.fixture('credentials.json').then(function (data) {
        testdata = data //Assign data here
    })
    cy.log("Before");
})

beforeEach(() => {
    cy.visit('/');
    cy.log("before each");
})

afterEach(() => {
    // from commands.js
    var result
    cy.elementExists("#password").then(boolean => result);
    cy.log(`elementExists: ${result}`);
    if (result == true) {
        loginpage.content.userInput().clear();
        loginpage.content.passwordInput().clear();
    }
    cy.log("after each");
})
