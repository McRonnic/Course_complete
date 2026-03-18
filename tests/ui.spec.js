import { test, expect } from '@playwright/test'
import PageManager from '../Pages/PageManager.js'

let pm;

test.describe('Login Tests', () => {
    test.beforeEach(async ({page}) => {
        pm = new PageManager(page)

    })

    test('Purchase process', async () => {

        await pm.loginPage.navigate();
        await pm.loginPage.login('standard_user', 'secret_sauce');
        await pm.loginPage.assertLogin("Products");

        await pm.inventoryPage.selectProduct();
        let item = await pm.inventoryPage.checkItemInventory()
        await pm.inventoryPage.openCart();
        expect(item).toBe(await pm.cartPage.checkItemCart());

        await pm.cartPage.goToCheckout();

        await pm.checkOne.fillUserInfo('Grzegosz', 'Brzęczyszczykiewicz', '12345' );
        await pm.checkOne.continue();

        await pm.checkTwo.finishCheckout();

        await pm.checkComplete.getCompletionMessage()
  
    })


})