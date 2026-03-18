import { expect } from '@playwright/test'

export default class CheckoutCompletePage {
    constructor(page) {
        this.page = page
    }
     
    
    async getCompletionMessage() {

        await expect(this.page.locator('#checkout_complete_container > h2')).toHaveText('Thank you for your order!')
    }
}       