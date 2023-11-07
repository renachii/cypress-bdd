class homepage {
    content = {
        title : () => cy.get(".header_secondary_container > span.title"),
        burgerButton : () => cy.get("#react-burger-menu-btn"),
        logoutButton : () => cy.get("#logout_sidebar_link")
    }

    logout() {
        this.content.burgerButton().click();
        this.content.logoutButton().click();
    }
}

module.exports = new homepage();
