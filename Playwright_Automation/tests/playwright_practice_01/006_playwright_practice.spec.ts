import{test} from '@playwright/test'

var ENV = "TEST"
// If value is TEST means its not matching with palse condition so both test case will run.
// If value is PROD then last test case will be skipped. --> test.skip(ENV == "PROD","Feature is not available in Prd environment")

test.describe("Execute all test cases", () => {
    test("Enter user details", async({page}) => {
        await test.step("Open browser and launch url", async()=> {
            await page.goto("https://sqatools.in/automation-practice-page/")

        })

        await test.step("Enter username", async()=> {
            await page.getByPlaceholder("Enter username").fill("Pankaj")

        })

        await test.step("Enter password", async()=> {
            await page.getByPlaceholder("Enter password").fill("Pankaj@123")

        })

        await test.step("Email address", async()=> {
            await page.locator('//textarea[@id="address"]').fill("Chabua, Assam")

        })
        
    })

    test("Select gender and course content", async({page}) => {
        test.skip(ENV == "PROD","Feature is not available in Prd environment")
        await test.step("Open browser and launch url", async()=> {
            await page.goto("https://sqatools.in/automation-practice-page/")

        })

        await test.step("Select gender", async()=> {
            await page.locator("#male").click()

        })

        await test.step("Select course", async()=> {
            await page.locator("#python").check()

        })        
    })

})

// npx playwright test 006_playwright_practice.spec.ts --project=chromium --headed
// npx playwright show-report