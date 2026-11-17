 import { Page, Locator, expect } from '@playwright/test';

 export class LoginPage {
    readonly page: Page // Browser page instance
    readonly usernameField: Locator; // Identifies UI elements
    readonly passwordField: Locator;
    readonly loginBtn: Locator;
    readonly headingText: Locator;

     constructor(page: Page) { // Initializes locators
        this.page = page
        this.usernameField = this.page.getByTestId("login-username")
        this.passwordField = this.page.getByTestId("login-password")
        this.loginBtn = this.page.getByTestId("login-button")
        this.headingText = this.page.locator("header.fb-top h1")
     }

    async navigate(url: string) { // 	Opens application
        await this.page.goto(url)
    }

    async login(username: string, password: string) { //Performs login
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
        await this.loginBtn.click()
     }

    async verifyHeading() { // Validates heading visibility
        await expect(this.headingText).toBeVisible()
    }

 }

 /* 
 Why do we use readonly in the Page Object Model?
 Answer: readonly ensures that the locator reference cannot be reassigned after 
 initialization in the constructor. However, we can still interact with the locator 
 using methods like fill(), click() and clear().

 */