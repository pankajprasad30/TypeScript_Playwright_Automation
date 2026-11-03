import {test as base, Page, BrowserContext} from '@playwright/test'
// using Playwright Fixtures in TypeScript.
// The main purpose of a fixture is to write reusable code that can be shared across multiple test cases,
//   so you don't have to repeat the same setup steps in every test.

type MyFixture = {
     Mypage : Page
    }

export const test = base.extend<MyFixture>({
    Mypage: async({browser}, use)=> {
        const context: BrowserContext = await browser.newContext()
        const page: Page = await context.newPage()
        await page.goto("https://sqatools.in/dummy-booking-website/") 
        await use(page)
        // cleanup of fixture
        await context.close()
    }
})

/* 
Complete execution flow -->
Import Playwright modules.
Create a custom fixture type.
Extend the original Playwright test.
Create a new browser context.
Create a new browser page.
Open the website.
Pass the page using await use(page).
Execute the test case.
Close the browser context.
*/