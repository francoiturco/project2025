class HomePage {

    elements = {
        pageTitle: () => cy.get('title')
    };

    verifyHomePageTitle (pageTitle) {
        this.elements.pageTitle().should('have.text', pageTitle)
    }

};

export const homePage = new HomePage();