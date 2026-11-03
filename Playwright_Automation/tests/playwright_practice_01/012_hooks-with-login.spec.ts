import {test, Page, expect, BrowserContext} from '@playwright/test'
import * as TestData from '../../testdata/testdata.ts'
/*
// scope of fixture
page : scope it limited to test
browser fixture : The `browser` fixture has a broader scope, that you can use outside of the test function as well. 
*/
let Newpage: Page 
let context: BrowserContext
test.describe("Sauce lab demo login", async()=> {
    test.beforeAll("sauce web login", async({browser})=> {
        // Create a new context with the help of the browser fixture. 
        context = await browser.newContext()
        // Create a new page with the help of context. 
        Newpage = await context.newPage()
        await Newpage.goto(TestData.hrm_data.url)
        await Newpage.getByPlaceholder("Username").fill(TestData.hrm_data.username)
        await Newpage.getByPlaceholder("Password").fill(TestData.hrm_data.password)
        await Newpage.getByRole("button", {name:"Login"}).click()
        const Heading =  Newpage.getByRole('heading', {name: "Dashboard"})
        await expect(Heading).toBeVisible()
    }) //17:23

    test.afterAll(async()=> {
        await context.close()
    })

    test.beforeEach(async()=> {
        await Newpage.getByRole("link", {name: "Dashboard"}).click()
        const Heading =  Newpage.getByRole('heading', {name: "Dashboard"})
        await expect(Heading).toBeVisible()
    })
     test.afterEach(async()=> {
        console.log("Test completed")
     })


    test("Navigate to Admin Page", async()=> {
        await Newpage.getByRole("link", {name:"Admin"}).click()
        const Heading =  Newpage.getByRole('heading', {name: "Admin"})
        await expect(Heading).toBeVisible()
    })

    test("Navigate to PIM Admin Page", async()=> {
        await Newpage.getByRole("link", {name:"PIM"}).click()
        const Heading =  Newpage.getByRole('heading', {name: "PIM"})
        await expect(Heading).toBeVisible()
    })
})