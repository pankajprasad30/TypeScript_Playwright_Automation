import {test} from '@playwright/test'

// `test.describe` is nothing but a test suite that includes multiple test cases. 
// page : `page` is a built-in fixture which is responsible for opening the browser and launching the prowser.

test.describe('Playwright locators with xpath & css', () => {

    test('Find element with x-path', async({page}) => {
        await page.goto('https://sqatools.in/dummy-booking-website/')
        const heading = await page.locator("//h1[@class='entry-title']").textContent()
        console.log("Heading", heading)
        await page.locator("//input[@value='radio_123']").check()

        // All methods return an array of elements, through which we can get each of the elements 
        // one by one with the help of an index, or we can apply a loop to the elements and perform a certain operation. 
        const all_ladio_btns = await page.locator("//ul//input[@type='radio']").all()
        for(var radio of all_ladio_btns)
        {
            await radio.check()
        }

        // nth help us to  provide index position for the locator 
        await page.locator("//input[@name='firstname']").nth(0).fill("Pankaj")
        await page.locator("//input[@name='firstname']").nth(1).fill("Prasad")
    })


    test("CSS selector test cases:", async({page}) => {
        await page.goto("https://sqatools.in/dummy-booking-website/")
        await page.locator("#birthday").fill("2026-10-14")
        await page.locator("#male").check()
        // select value fromn dropdown
        await page.locator("#admorepass").selectOption("Add 3 more passenger (200%)")
        await page.locator("#oneway").check()

    })

})