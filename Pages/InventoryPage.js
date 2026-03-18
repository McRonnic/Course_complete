import { expect } from '@playwright/test'

export default class InventoryPage {
    constructor(page) {
        this.page = page

    }

    async selectProduct() {
        //Product sort by price
        await this.page.click('.product_sort_container')
        await this.page.selectOption('.product_sort_container', 'hilo')
        //Add to cart most expensive
        await this.page.click('.inventory_list >.inventory_item:nth-child(1) button')
      
    }
 
    async openCart() {
        await this.page.click('.shopping_cart_link' )
        
    }

    async checkItemInventory() {
        return this.page.textContent('.inventory_list >.inventory_item:nth-child(1) .inventory_item_name')
    }


}