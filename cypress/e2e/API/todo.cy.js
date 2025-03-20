/// <reference types="cypress" />
import {homePage} from '../../pages/homePage/homePage'

describe('CRUD API Tests', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Verify Page', () => {
        cy.fixture('example.json').then( ($data) => {
            homePage.verifyHomePageTitle($data.title)
        })
    })
})
