/// <reference type="cypress">
import {Given, Then, When, Before} from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../support/pages/homepage";
import loginpage from "../../support/pages/loginpage";
import {generateRandomString} from "../../support/utils/common";

var randomStr

Given('the portal login page is accessed' , () => {
    loginpage.content.title().should('be.visible');
    loginpage.content.loginButton().should('be.visible');
})

Given('the admin credentials are entered' , () => {
    cy.log(`testdata.Username: ${testdata.Username}`);
    loginpage.content.userInput().type(testdata.Username);
    cy.log(`testdata.Password: ${testdata.Password}`);
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
        cy.log(`datatable - data.Title: ${data.Title}`);
        homepage.content.title().should('have.text', data.Title);
    })
})

Then("error message {string} is displayed", function (error) {
    cy.log(`error message: ${error}`);
    loginpage.content.errorMessage().should('have.text', error);
});