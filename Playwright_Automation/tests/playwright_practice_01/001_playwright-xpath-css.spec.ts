import { test } from "@playwright/test";

// test.describe is used for multiple test cases.
// page: page fixture is used for opening browser and launch URL.

test.describe('Playwright locators with xpath and css',() =>{
    test("Find elements with XPath", async ({page}) => {
        // method which provide promise in that mostly we use await
        await page.goto("https://selectorshub.com/xpath-practice-page/")
        const heading = await page.locator("//span[text()='how to automate']").textContent()
        console.log("Heading", heading)
        await page.locator("//input[@id='ohrmList_chkSelectAll']").check()
    })

    test("CSS selector test cases", async ({page}) => {
        await page.goto("https://selectorshub.com/xpath-practice-page/")
        await page.locator('#kils').fill("Pankaj")


    })

    test("Find elements with XPath on dummy booking website", async({page})=> {
        await page.goto("https://sqatools.in/dummy-booking-website/")
        const heading = await page.locator("//h1[@class='entry-title']").textContent()
        console.log("Heading :", heading)
        await page.locator("//input[@value='radio_123']").check()
        
        // All methods return an array of elements, through which we can get each of the elements 
        // one by one with the help of an index, or we can apply a loop to the elements and perform a certain operation. 
        const all_radio_btns = await page.locator("//ul//input[@type='radio']").all()
        for(var radio of all_radio_btns) {
            await radio.check()
        }
    })

        test("CSS Selector test cases :", async({page})=> {
        test.setTimeout(60_000)
        await page.goto("https://sqatools.in/dummy-booking-website/")
        await page.locator("#birthday").fill("2026-10-13")
        await page.locator('#male').check()
        // select value fromn dropdown
        await page.locator("#admorepass").selectOption("Add 3 more passenger (200%)")
        await page.locator("#oneway").check()
    })
})