import {test} from '@playwright/test'

test("Inbuild fixture", async({page})=> { // built-in fixture called page.
    await page.goto("https://amazon.in")
})