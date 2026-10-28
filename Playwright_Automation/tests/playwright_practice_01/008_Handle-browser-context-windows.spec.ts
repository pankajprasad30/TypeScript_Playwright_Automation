import {test, BrowserContext, Page, chromium, firefox} from '@playwright/test'

// Scenario 1: 1 Browser with 2 tab
test.describe("Handle browser windows", async() => {
    test("Scenario 1: 1 Browser with 2 tab", async({browser}) => {
        test.setTimeout(120_000)
        const context: BrowserContext = await browser.newContext() // Creates a new browser context.
        const page1: Page = await context.newPage() // Creates a new tab.
        const page2: Page = await context.newPage()

        await page1.goto("https://sqatools.in/dummy-booking-website/")
        await page2.goto("https://sqatools.in/automation-practice-page/")
        
        await page1.locator("#firstname").first().fill("Pankaj")
        await page1.locator("#firstname").nth(1).fill("Prasad")

        await page2.getByPlaceholder("Enter username").fill("user1@gmail.com")
        await page2.getByPlaceholder("Enter password").fill("user@12345")

        await page2.getByRole("radio", {name: "Male", exact: true}).check()      
    })

    // Scenario 2: 1 Browser with 2 context with 1 tab each
    test("Scenario 2: 1 Browser with 2 context with 1 tab each", async({browser}) => {
        test.setTimeout(120_000)
        const context1: BrowserContext = await browser.newContext()
        const context2: BrowserContext = await browser.newContext()

        const page1: Page = await context1.newPage()
        const page2: Page = await context2.newPage()

        await page1.goto("https://sqatools.in/dummy-booking-website/")
        await page2.goto("https://sqatools.in/automation-practice-page/")

        await page1.locator("#firstname").first().fill("Rahul")
        await page1.locator("#firstname").nth(1).fill("Sharma")

        await page2.getByPlaceholder("Enter username").fill("user1@gmail.com")
        await page2.getByPlaceholder("Enter password").fill("user@12345")

        await page2.getByRole("radio", {name: "Male", exact: true}).check()

    } )


    // Scenario 3: 2 diff Browser with 2 context with 1 tab each
    test("Scenario 3: 2 diff Browser with 2 context with 1 tab each", async()=> {
        test.setTimeout(120_000)
        const browser1 = await chromium.launch({headless: false})
        const browser2 = await firefox.launch({headless: false})
        const context1: BrowserContext = await browser1.newContext()
        const context2: BrowserContext = await browser2.newContext()

        const page1: Page = await context1.newPage()
        const page2: Page = await context2.newPage()

        await page1.goto("https://sqatools.in/dummy-booking-website/")
        await page2.goto("https://sqatools.in/automation-practice-page/")

        await page1.locator("#firstname").first().fill("Rahul")
        await page1.locator("#firstname").nth(1).fill("Sharma")

        await page2.getByPlaceholder("Enter username").fill("user1@gmail.com")
        await page2.getByPlaceholder("Enter password").fill("user@12345")

        await page2.getByRole("radio", {name: "Male", exact: true}).check()
    });

    // Scenario 4: 1 Browser with 2 context with 1 tab each with click action
    test("Scenario 4: 1 Browser with 2 context with 1 tab each with click action", async({browser})=> {
        test.setTimeout(120_000)
        const context1: BrowserContext = await browser.newContext()
        const page1: Page = await context1.newPage()
        await page1.goto("https://sqatools.in/automation-practice-page/")

        const [newPage] = await Promise.all([page1.waitForEvent('popup'), // Waits for a popup.
                                             page1.getByRole('link', { name : "Dummy Page"}).first().click()
                                            ]);
        const page2 = newPage

        await page2.locator("#firstname").first().fill("Rahul")
        await page2.locator("#firstname").nth(1).fill("Sharma")

        await page1.getByPlaceholder("Enter username").fill("user1@gmail.com")
        await page1.getByPlaceholder("Enter password").fill("user@12345")

        await page1.getByRole("radio", {name: "Male", exact: true}).check()
    });

})

/* 
Playwright: Browser, BrowserContext, Page — explained block by block
Your code demonstrates four ways to handle browser windows, tabs, and isolated browser sessions using Playwright with TypeScript.

The most important concept to understand is the relationship between Browser → BrowserContext → Page.

...................................................................................................................
Browser: The actual browser instance, such as Chromium or Firefox.

BrowserContext: An isolated session within a browser. It has its own cookies, local storage, and session storage.

Page: A single browser tab or popup window within a context.

Locator: A way to identify and interact with an element on a page, such as a textbox, button, or radio button.

.....................................................................................
Easy way to remember
Scenario 1: One browser, one context, two tabs.

Scenario 2: One browser, two contexts, two independent sessions.

Scenario 3: Two browsers, two contexts, cross-browser testing.

Scenario 4: One browser, one context, a second page opened through a popup.

*/