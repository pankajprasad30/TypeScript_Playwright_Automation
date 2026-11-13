/* 
--> Assertions
Assertions are one of the most important concepts in Playwright test automation. 
They verify whether the application behaves as expected after performing an action. 
Without assertions, your automation script simply performs actions without validating the results.

What are Assertions?
Assertions verify the expected state of your application.

For example, after clicking the Login button, you may want to verify:

User is redirected to Dashboard
Welcome message is displayed
Logout button is visible
Shopping cart contains 3 products

Why Playwright Assertions are Powerful:-

Auto-wait until the condition becomes true
Retry assertions automatically
Produce detailed error messages
Capture screenshots on failures
Generate trace files
Work with UI elements directly

Assertion Categories:-
Playwright provides several assertion types.

Value Assertions
Locator Assertions
Page Assertions
API Assertions
Screenshot Assertions
Soft Assertions
Polling Assertions
Custom Assertions

Playwright provides three main types of assertions:

1. Auto-retrying assertions

2. Non-retrying assertions

3. Soft assertions

*/

import {expect, test} from "@playwright/test"

test.describe("Assetions concept with codes", ()=> {
    // 3. Value Assertions
    test("Playwright Value Assertions", async({page}) => {

        //toBe()
        const count = 10
        expect(count).toBe(10)

        const name = 'pankaj'
        expect(name).toBe('pankaj')

        // not.toBe()
        // const sarName = 'prasad'
        // expect(sarName).toBe('pankaj')

        // toEqual()
        const user = {
            name: "Pankaj",
            age: 39
        };
        expect(user).toEqual({
            name: "Pankaj",
            age: 39
        })

        // toContain()
        const fruits = ["Apple", "Orange"]
        expect(fruits).toContain("Apple")
        expect(fruits).toEqual(expect.arrayContaining(["Apple", "Orange"]))

        // toHaveLength()
        expect([1, 2, 3]).toHaveLength(3)
        expect("Pankaj").toHaveLength(6)
    })

    // 2. Locator Assertions
    test("Playwright Locator Assertions", async({page}) => {
        await page.goto("https://sqatools.in/dummy-booking-website/")
        const userName = page.getByLabel('Username')
        // toBeVisible()
        await expect(userName).toBeVisible()
        // toBeEnabled()
        await expect(userName).toBeEnabled()
        
        // toBeChecked()
        // await page.locator('[data-testid="remember-me"]').click()
        // await expect(page.locator('[data-testid="remember-me"]')).toBeChecked()

        const checkMark = page.locator('[data-testid="remember-me"]')
        await checkMark.click()
        await expect(checkMark).toBeChecked()

        // toHaveValue()
        await page.getByRole('textbox', { name: 'Username' }).fill("testuser")
        await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue("testuser")

        await page.getByRole('textbox', { name: 'Password' }).fill("Test@123")
        await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue("Test@123")

        await page.getByRole('button', { name: 'Log in' }).click()
        // toHaveText()
        await expect(page.getByRole('heading', { name: 'Search flights' })).toHaveText("Search flights")
        // toBeVisible()
        await expect(page.getByRole('heading', { name: 'Search flights' })).toBeVisible()
        // toContainText()
        await expect(page.getByRole('heading', { name: 'Search flights' })).toContainText("Search")
    })

    // 3. Page Assertions
    test("Playwright Page Assertions", async({page}) => {
        await page.goto("https://www.amazon.in/")
        //toHaveURL()
        await expect(page).toHaveURL(/amazon/)
        // toHaveTitle()
        await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")


    })


})