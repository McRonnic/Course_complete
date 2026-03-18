import LoginPage from "./LoginPage.js";
import InventoryPage from "./InventoryPage.js";
import CartPage from "./CartPage.js";
import CheckoutStepOnePage from "./CheckoutStepOnePage.js";
import CheckoutStepTwoPage from "./CheckoutStepTwoPage.js";
import CheckoutCompletePage from "./CheckoutCompletePage.js";



export default class PageManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page)
        this.inventoryPage = new InventoryPage(page)
        this.cartPage = new CartPage(page)
        this.checkOne = new CheckoutStepOnePage(page)
        this.checkTwo = new CheckoutStepTwoPage(page)
        this.checkComplete = new CheckoutCompletePage(page)
 
    }
}