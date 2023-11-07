/// <reference type="cypress">
import {Given, Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../pages/homepage";
import loginpage from "../pages/loginpage";
import {generateRandomString} from "../utils/common";

var randomStr 
var result

Before(function () {
    cy.fixture('credentials.json').then(function (data) {
        testdata = data //Assign data here
    })
})

beforeEach(() => {
    cy.visit('/');
    console.log("before each");
})

afterEach(() => {
    // from commands.js
    cy.elementExists("#password").then(boolean => result);
    if (result == true) {
        loginpage.content.userInput().clear();
        loginpage.content.passwordInput().clear();
    }
    console.log("after each");
})

Given('the portal login page is accessed' , () => {
    loginpage.content.title().should('be.visible');
    loginpage.content.loginButton().should('be.visible');
})

Given('the admin credentials are entered' , () => {
    loginpage.content.userInput().type(testdata.Username);
    loginpage.content.passwordInput().type(testdata.Password);
})

Given("username {string} is entered", function (user) {
    loginpage.content.userInput().type(user);
});

Given("password {string} is entered" ,function (pass) {
    loginpage.content.passwordInput().type(pass);
});

Given('username is entered' , () => {
    randomStr = generateRandomString(10);
    loginpage.content.userInput().type(randomStr);
})

Given('password is entered' , () => {
    randomStr = generateRandomString(10);
    loginpage.content.passwordInput().type(randomStr);
})

When('the credentials are submitted' , () => {
    loginpage.content.loginButton().click();
})

Then('the homepage is accessed' , (datatable) => {
    homepage.content.burgerButton().click();
    homepage.content.logoutButton().should('be.visible');

    datatable.hashes().forEach((data) => {
        homepage.content.title().should('have.text', data.Title);
    })
})

Then("error message {string} is displayed", function (error) {
    loginpage.content.errorMessage().should('have.text', error);
});

