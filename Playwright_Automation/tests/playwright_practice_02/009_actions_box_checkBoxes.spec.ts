import {test, expect} from '@playwright/test'

const pageURL = "https://sdetqa.vercel.app/autoplay"

test.describe("Data entry form dalidation", () => {

    test.beforeEach(async({page}) => {
        await page.goto(pageURL)
    })
})