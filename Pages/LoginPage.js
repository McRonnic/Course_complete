import { expect } from '@playwright/test'
const url = 'https://www.saucedemo.com/'

export default class LoginPage {
    constructor(page) {
        this.userNameInput = '#user-name'
        this.page = page
    }

    async navigate() {
        await this.page.goto(url)
    }

    async login(username, password) {
        await this.page.fill(this.userNameInput, username)
        await this.page.fill('#password', password)
        await this.page.click('input[type="submit"]')
        
    }


    async checkLogin() {
        return this.page.textContent('.title')
    }

    async assertLogin(text) {
        //Check is login is successful
        const header = await this.checkLogin()
        expect(header).toContain(text)
    }
}