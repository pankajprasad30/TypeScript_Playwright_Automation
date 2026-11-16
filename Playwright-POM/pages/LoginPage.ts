 import { Page, Locator, expect } from '@playwright/test';

 export class LoginPage {
    readonly page: Page
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginBtn: Locator;
    readonly HeadingText: Locator;

     constructor(page: Page) {
        this.page = page
        this.usernameField = this.page.getByTestId("login-username")
        this.passwordField = this.page.getByTestId("login-password")
        this.loginBtn = this.page.getByTestId("login-button")
        this.HeadingText = this.page.locator("header.fb-top h1")
     }

    async navigate(url: string) {
        await this.page.goto(url)
    }

    async login(username: string, password: string) {
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
        await this.loginBtn.click()
     }

    async verifyHeading() {
        expect(this.HeadingText).toBeVisible()
    }

 }