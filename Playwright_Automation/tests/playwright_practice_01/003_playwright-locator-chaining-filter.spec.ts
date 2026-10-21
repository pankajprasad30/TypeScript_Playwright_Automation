
import { test } from "@playwright/test";

/* 
1. What is Locator Chaining in Playwright?
Locator chaining means combining multiple locators to find an element inside another element.

For example, imagine a page contains multiple product cards, and each card has an Add to Cart 
button. You want to click the button for a specific product.

 */

test("Locator chaining", async({page}) => {
    await page.goto("https://sqatools.in/dummy-booking-website/")
    // Identify the top element table. 
    const cityTable = page.locator("#cities")
    // Identify the row inside the table with a specific name
    const mumbaiRow = cityTable.getByRole('row', {name: "Mumbai"})
    // Identify the checkbox element inside that row
    await mumbaiRow.getByRole("checkbox").check()

    await page.locator("#cities").getByRole("row", {name:"Pune"}).getByRole("checkbox").check()

    await mumbaiRow.getByRole("checkbox").uncheck()
    await page.locator("#cities").getByRole("row", {name:"Kolkata"}).getByRole("checkbox").check()
})

/* 
2. What is filter() in Playwright?
filter() narrows down a locator by applying conditions, such as text content or the 
presence of a child element.

It is especially useful when multiple elements share the same structure.
 */

test("Filter locator", async({page}) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByLabel("Username").fill("standard_user") // we can use .getByPlaceholder also
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.getByRole('button', {name:'Login'}).click()
    // First preference for username and password in this is .getByLabel()
    // For login button getByRole('button', {name:'Login'})

    // Apply text filter to get the element
    // locate -> filter -> role -> click
    const topElem = page.locator(".inventory_item").filter({hasText: "Sauce Labs Backpack"})
    await topElem.getByRole("button", {name: "Add to cart"}).click()

    // Locator filter to identify the next element 
    // remember . -> also in locator(".inventory_item")
    const topElement2 = page.locator(".inventory_item").filter({has: page.getByText("Sauce Labs Bike Light")})
    await topElement2.getByRole("button", {name: "Add to cart"}).click()

    // Locator filter to identify the next element
    const topElem3 = page.locator(".inventory_item").filter({has: page.locator("a#item_1_title_link")})
    await topElem3.getByRole("button", {name: "Add to cart"}).click()

    // Locator filter to identify the next element with text and locator filter
    const topElem4 = page.locator(".inventory_item").filter({has: page.locator("a#item_5_title_link")}).filter({hasText: "Sauce Labs Fleece Jacket"})
    await topElem4.getByRole("button", {name: "Add to cart"}).click()
})

test("Inline filter with locator method", async({page})=> {
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.getByRole("button", {name: "Login"}).click()
    const topelem = page.locator("div.inventory_item", {hasText: "Sauce Labs Backpack"})
    await topelem.getByRole("button", {name: "Add to cart"}).click()

    });