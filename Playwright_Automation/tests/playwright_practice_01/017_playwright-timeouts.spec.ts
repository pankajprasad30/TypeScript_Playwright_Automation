/*
test timeout:
         -> Default timeout for each test case is 30 seconds. 
            It means the complete test execution has to complete within 30 seconds. 

         -> The user can change the timeout on a test level, which is the highest priority. test.setTimeout(45_000)
         -> A user can change the timeout on a suite level, which is applicable for all the test cases inside it. 
         -> The user can change the project-level configuration timeout that is in the config file, which will be 
            applicable for all the test suite files available in the project. 
            # { timeout: 60_000 }
         
Navigation timeout: the timeout taken to load any URL is called a navigation timeout. 
       -> We can set a navigation timeout on a specific navigation operation. 
          # await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html", {timeout: 10_000})

       -> Navigation timeout: we can set it globally from the config file as well. 
         # 
         use: {
            navigationTimeout: 20_000,
         }

Expect timeout, that is called assertion timeout:
       -> Whenever we perform any assertion and we want to verify certain things within a given period of time 
       -> We can specify for a specific `expect` operation. 
       -> Set timeout globally from a config file as well. 
       -> Default timeout for any assertion is 5 seconds. 
       -> Test line : await expect(primary_Btn).toBeVisible({timeout: 10_000})

       # config level changes:  
       expect: {
                  timeout : 15_000
               },

global timeout:  global timeout is the time taken to execute all the test cases. 
              -> globalTimeout: 1*60*60*1000,

action timeout: while performing an action on a certain element, we can specify the timeout. 
             -> await page.getByRole("textbox", {name: "Username:"}).nth(0).fill("Rahul", {timeout: 10_000})
             -> use: { actionTimeout: 15_000 }
            
static timeout: this is called a hard wait sleep time. 
              page.waitForTimeout(30_000)

*/


import {expect, test} from '@playwright/test'

const Winwidth = 2000;
const Winheight = 1000;
test.describe("Playwright Locators Method with timeout ", ()=> {
    // Suite-level test timeout that will be applicable for all the test cases 
    test.setTimeout(45_000)
    test("GetbyRole Method", async({page})=> {
        // The test-level timeout, which will be applicable only to a specific test case 
        test.setTimeout(40_000)
        await page.setViewportSize({width: Winwidth, height: Winheight})
        //<button role="button">Primary Action</button>
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html", {timeout: 10_000})
        const primary_Btn = await page.getByRole("button", {name: "Primary Action"}) 
        await expect(primary_Btn).toBeVisible({timeout: 10_000})
        await page.waitForTimeout(30_000)
        await page.getByRole("textbox", {name: "Username:"}).nth(0).fill("Rahul", {timeout: 10_000})
        await page.getByRole("checkbox", {name: "Accept terms"}).check()
        const value = await page.getByRole("menuitem", {name: "Contact"}).textContent()
        console.log(value)
    })

    test("GetbyText Method", async({page})=> {
        await page.setViewportSize({width: Winwidth, height: Winheight})
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        await page.getByText("START").click()
        const element =  page.getByText("colored text")
        await expect(element).toBeAttached()
        await page.getByText("Online Trainings").click()
    });

     test("getByLabel Method", async({page})=> {
        test.setTimeout(60000)
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        // <label for="email">Email Address:</label>
        await page.getByLabel("Email Address:").fill("user1@gmail.com")
        await page.getByLabel("Password:").fill("user1@12345")
        await page.getByLabel("Your Age:").fill("30")
        await page.getByLabel("Standard").check()
        await page.getByLabel(" Express").check()

     });

      test("getByPlaceholder() Method", async({page})=> {
        // <input type="text" placeholder="Enter your full name" class="full-width">
        await page.setViewportSize({width: Winwidth, height: Winheight})
        test.setTimeout(60000)
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        await page.getByPlaceholder("Enter your full name").fill("Rahul Gupta")
        await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("789798798798")
        await page.getByPlaceholder("Type your message here...").fill("We are learning Playwright locator methods")
        await page.getByPlaceholder("Search products...").fill("ABC")
        await page.getByRole("button", {name: "Search"}).click()

      });

      test("getByAltText() Method", async({page})=> {
        // <input type="text" placeholder="Enter your full name" class="full-width">
        await page.setViewportSize({width: Winwidth, height: Winheight})
        test.setTimeout(60000)
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const image = page.getByAltText("logo image")
        await image.scrollIntoViewIfNeeded()
        await expect(image).toBeVisible()
      });

      test("getByTitle() Method", async({page})=> {
        // `title` method we can use with the `title` attribute 
        await page.setViewportSize({width: Winwidth, height: Winheight})
        test.setTimeout(60000)
        // <a href="#" title="Home page link">Home</a>
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const homeElem = page.getByTitle("Home page link")
        await homeElem.scrollIntoViewIfNeeded()
        console.log(await homeElem.textContent())

        const ToolTipElem = page.getByTitle("Tooltip text")
        console.log(await ToolTipElem.textContent())
      });

      test("getByTestId() method", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const profile = page.getByTestId("profile-name")
        await profile.scrollIntoViewIfNeeded()
        console.log(await profile.textContent())

        const email = await page.getByTestId("profile-email").textContent()
        console.log(email)

        const product_cart1 = await page.getByTestId("product-card-1").textContent()
        console.log(product_cart1)

        
      });
}); 