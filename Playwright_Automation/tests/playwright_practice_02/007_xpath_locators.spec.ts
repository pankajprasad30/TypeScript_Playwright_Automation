import { test, Expect, expect} from '@playwright/test'

// https://demowebshop.tricentis.com/

test("x-path practice", async({page}) => {
    await page.goto("https://demowebshop.tricentis.com/")

    // 1. absolute x-path (Full xpath) -Not recommended
    const logo = page.locator('//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]')
    await expect(logo).toBeVisible()

    // 2. relative x-path (Partial xpath)
    //syntax:   //tagname[@attribute=value]
    const logo1 = page.locator("//img[@alt='Tricentis Demo Web Shop']")
    await expect(logo1).toBeVisible()

    // 3. xpath with contains()
    let products = page.locator("//h2/a[contains(@href, 'computer')]")
    const productCount = await products.count()
    console.log("Product Count: ", productCount)
    expect(productCount).toBeGreaterThan(0)

    //console.log(await products.nth(1).textContent()) // Build your own computer
    console.log(await products.allTextContents())
    // 'Build your own cheap computer',
    // 'Build your own computer',
    // 'Build your own expensive computer',
    // 'Simple Computer'
    //await products.click() // when we perform any action on proup of element it will throw exception
    //     Error: locator.click: Error: strict mode violation: locator('//h2/a[contains(@href, \'computer\')]') resolved to 4 elements:
    await products.nth(1).click()
    await page.goBack()

    // 4. xpath with start
    const buildingProducts = page.locator("//h2//a[starts-with(@href,'/build')]")
    const count = await buildingProducts.count()
    //expect(count).toBeGreaterThan(0)
    expect(count).toBe(3)

    // 5. xpath with inner text
    const registerLink = page.locator("//a[text()='Register']")
    await expect(registerLink).toBeVisible()

    // 6. xpath with last()
    //const wishList = page.locator('//div[@class="column my-account"]//li').last()
    const wishListText = await page.locator('//div[@class="column my-account"]//li[last()]').textContent() // last one to get text content
    expect(wishListText).toBe("Wishlist")

    // 7. xpath with position()
    const addressesText = await page.locator('//div[@class="column my-account"]//li[position()=3]').textContent()
    expect(addressesText).toBe('Addresses')

    const twiterText = await page.locator('//div[@class="column follow-us"]//li[position()=2]').textContent()
    expect(twiterText).toBe('Twitter')

    await page.close()

})