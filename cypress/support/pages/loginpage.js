class loginpage {
    content = {
        title : () => cy.xpath("//div[@class='login_logo']"),
        userInput : () => cy.xpath("//input[@id='user-name']"),
        passwordInput : () => cy.get("#password"),
        loginButton : () => cy.get("#login-button"),
        errorMessage : () => cy.get("div.error-message-container")
    }

    login(username, password) {
        this.content.userInput().type(username);
        this.content.passwordInput().type(password);
        this.content.loginButton().click();
    }
}

module.exports = new loginpage();
