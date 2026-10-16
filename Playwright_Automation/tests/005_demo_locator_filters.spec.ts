import { test,expect } from "@playwright/test"

// Website : https://sdetqa.vercel.app/filters_practice

/* 
==> Playwright locators filters

1. varify "Add to card" for product 2   - hasText
2. Count items not having "Out of stocks"
3. Find items which are 'In Stock'
4. Verify elements using data-testid
*/


// Hooks- Runs before each test
test.beforeEach(async({page}) => {
    await page.goto("https://sdetqa.vercel.app/filters_practice")

})

// Runs after all the tests completed.
test.afterAll(async({page}) => {
    await page.close()

})


// Filter by using hasText
test("1. varify 'Add to card' for product 2", async({page}) => {
    const productButton2 = page
    .getByRole('listitem')// inspect and check wheater it has list  of otems or not, (li)
    .filter({ hasText: 'Product 2' })
    .getByRole('button')
    //.click()


    // Varify button is visible
    await expect(productButton2).toBeVisible()
    // click
    //await productButton2.click()
})

// Filter by using hasNotText
test("2. Count items not having 'Out of stocks'", async({page}) => {
    const inStockItems = 
    page.locator(".card").nth(1) // css locators
    .getByRole('listitem') 
    .filter({ hasNotText: 'Out of stock'})
    // verify count 3
    await expect(inStockItems).toHaveCount(3)

})

// Filter by using hasText
test("3. Find items which are 'In Stock'", async({page}) => {
    const inStock = page
    .getByRole('listitem') 
    .filter({ hasText: 'In stock'})
    await expect(inStock).toHaveCount(3)

})


// Filter by using getByTestID()
test("4. Verify elements using data-testid", async({page}) => {
    const apple = page.getByTestId("apple")
    const banana = page.getByTestId("banana")
    const orange = page.getByTestId("orange")

    // verify visibility
    await expect(apple).toBeVisible()
    await expect(banana).toBeVisible()
    await expect(orange).toBeVisible()

    await expect(apple).toContainText('apple')
    await expect(banana).toContainText('banana')
    await expect(orange).toContainText('orange')

})































