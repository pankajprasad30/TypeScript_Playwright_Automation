import { test,expect } from "@playwright/test"

// Website : https://sdetqa.vercel.app/filters_practice

/* 
==> Playwright locators filters

1. varify "Add to card" for product 2   - hasText
2. Count items not having "Out of stocks"
3. Find items which are 'In Stock'
4. Verify elements using data-testid
5. Count all elements with test ids
6. Find "Say goodbye" button for the John
7. Find "Say hello" button for the Mary
8. Find subscribe buttons using multiple conditions
9. Find "details" button for done tasks
10. Verify stock status counts

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

    await expect(apple).toContainText('apple') // 🍏 apple
    await expect(banana).toContainText('banana')
    await expect(orange).toContainText('orange')

});


// 5. Count all elements with test ids
test("5. Count all elements with test ids", async({page}) => {
     //page.getByTestId("[data-testid]")
     const testIDElements = page.locator("[data-testid]")

     // Access different positions
    const first = testIDElements.first()
    const second = testIDElements.last()
    const nth = testIDElements.nth(3)

    console.log(await first.innerText())
    console.log(await second.innerText())
    console.log(await nth.innerText())

    // Verify the count
    await expect(testIDElements).toHaveCount(5)

})

// Chaining filter // 6. Find "Say goodbye" button for the John
test('Find "Say goodbye" button for the John', async({page}) => {

    const goodByButton = page.getByRole('listitem').filter({hasText: 'John'}).getByRole('button', {name:'Say goodbye'})

    await expect(goodByButton).toBeVisible()
    await expect(goodByButton).toHaveText('Say goodbye')

})


// Chaining filter // 7. Find "Say hello" button for the Mary
test('7. Find "Say hello" button for the Mary', async({page}) => {

    const sayHelloButton = page.getByRole('listitem').filter({hasText: 'Mary'}).getByRole('button', {name:'Say hello'})

    await expect(sayHelloButton).toBeVisible()
    await expect(sayHelloButton).toHaveText('Say hello')

})


// 8. Find subscribe buttons using multiple conditions
// role="button" and have title "subscribe"

test('8. Find subscribe buttons using multiple conditions', async({page}) => {

    const subscribeButton = page.getByRole('button').and(page.getByTitle('Subscribe', {exact: true}))
    
    console.log("Subscribe button count:", await subscribeButton.count())

    await expect(subscribeButton).toHaveCount(2)
    await expect(subscribeButton.first()).toBeVisible()
    await expect(subscribeButton.last()).toBeVisible()


})

// multiple conditions //9. Find "details" button for done tasks


test('9. Find "details" button for done tasks', async({page}) => {

    const doneTaskDetails = page.getByRole('listitem').filter({hasText: 'done'}).getByRole('button', {name:'details'})
    
    await expect(doneTaskDetails).toHaveCount(2)

})


// 10. Verify stock status counts
test('10. Verify stock status counts', async({page}) => {

    const inStock = page.getByRole('listitem').filter({hasText: 'In stock'})

    const outStock = page.getByRole('listitem').filter({hasText: 'Out of stock'})
    
    await expect(inStock).toHaveCount(3)
    await expect(outStock).toHaveCount(2)

})





















