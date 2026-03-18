import { test, expect } from '@playwright/test'

export default class CartPage {
    constructor(page) {
        this.page = page
    }

    async checkItemCart() {
        return this.page.textContent('.inventory_item_name')
    }

    async goToCheckout() {
        await this.page.click('#checkout')
    }

}