import { expect } from '@playwright/test'

export default class CheckoutStepOnePage {
    constructor(page) {
        this.page = page
    }

    async fillUserInfo(firstName, lastName, postalCode) {
        await this.page.fill('input#first-name.input_error.form_input', firstName)
        await this.page.fill('#last-name', lastName)
        await this.page.fill('#postal-code', postalCode)
        
    }

    async continue() {
        await this.page.click('#continue')
        
    }
}