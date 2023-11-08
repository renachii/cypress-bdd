/// <reference type="cypress">
import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../support/pages/homepage";
import loginpage from "../../support/pages/loginpage";

Given('the portal home page is accessed' , () => {
    // from commands.js
    loginpage.login(testdata.Username, testdata.Password);
    homepage.content.title().should('have.text', 'Products');
})

When('the user logout' , () => {
    homepage.logout();
})

Then('the login page is accessed' , () => {
    loginpage.content.loginButton().should('be.visible');
})