import { expect } from '@playwright/test'

export default class CheckoutStepOnePage {
    constructor(page) {
        this.page = page
    }
 
    async finishCheckout() {
        await this.page.click('#finish')
        
    }

}