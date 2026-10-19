import {test, expect} from "@playwright/test"
/* 
// Two extension we can use to find CSS or xpath
1. selectorsHub
2. Locator Lab --> More accurate and completely free/ also it provides suggestions which is best or good or flagile

Common CSS Selector Patterns



*/



test("CSS with ID: ", async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    // tag with id or id
    // ID starts with #
    const searchBoxWithID = page.locator("#small-searchterms") // using ID 
    searchBoxWithID.fill("Build your own cheap computer")
    await page.locator('[value="Search"]').click() //using tag
    await expect(page.locator('h2[class="product-title"] a')).toHaveText("Build your own cheap computer")
    await page.close()
})

test("CSS with class: ", async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    // CSS with class
    // clas starts with .
    const searchBoxWithClass = page.locator(".search-box-text") // using class
    searchBoxWithClass.fill("Build your own cheap computer")
    await page.locator('[value="Search"]').click() //using tag
    await page.waitForTimeout(5000) // 5000 milli second means 5 second
    await expect(page.locator('h2[class="product-title"] a')).toHaveText("Build your own cheap computer")
    await page.close()
})

test("CSS with attribute: ", async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    // CSS with class
    // clas starts with .
    const searchBoxWithAttribute = page.locator('[value="Search store"]') 
    // Single Attribute: [name="q"] 
    // Multiple Attribute: [name="q"][value="Search store"]
    searchBoxWithAttribute.fill("Build your own cheap computer")
    await page.locator('[value="Search"]').click() //using tag
    //await page.waitForTimeout(5000) // 5000 milli second means 5 second
    await expect(page.locator('h2[class="product-title"] a')).toHaveText("Build your own cheap computer")
    await page.close()
})

// class + Attribute --> used to get unique value

test("CSS with class + attribute: ", async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")
    const searchBox = page.locator('.search-box-text[name="q"]') 
    searchBox.fill("Build your own cheap computer")
    await page.locator('[value="Search"]').click() //using tag
    await expect(page.locator('h2[class="product-title"] a')).toHaveText("Build your own cheap computer")
    await page.close()
})