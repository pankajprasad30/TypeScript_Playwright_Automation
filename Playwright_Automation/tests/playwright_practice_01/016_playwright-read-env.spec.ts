import {test,expect} from '@playwright/test'

declare const process: { env: Record<string, string | undefined> }

test.describe("Read environment variable from .env file", ()=> {

    test("Login with valid credentials", async({page}) => {
        await page.goto(process.env.BASE_URL!) // The ! in TypeScript is called the Non-Null Assertion Operator.
        await page.getByPlaceholder("Username").fill(process.env.USERNAME_VALUE!)
        await page.getByPlaceholder("Password").fill(process.env.PASSWORD_VALUE!)
        await page.getByRole('button', { name: 'Login' }).click()
        await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible({timeout:30_000})
    })

    test("@multienv Read credentilas from different environment file", async({page}) => {
        console.log("Base URL is : "+process.env.BASE_URL)
        console.log("Username is : "+process.env.USERNAME_VALUE)
        console.log("Password is : "+process.env.PASSWORD_VALUE)
    })
})

// $env:TEST_ENV="prod"; npx playwright test --grep "@multienv" --project=chromium
// $env:TEST_ENV="qa"; npx playwright test --grep "@multienv" --project=chromium