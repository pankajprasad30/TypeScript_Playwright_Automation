import {test as base, Page} from '@playwright/test'

type MyFixtures = {
    amazonPage: Page
}

export const test = base.extend<MyFixtures> ({
    amazonPage: async ({page}, use) => {
        await page.goto("https://amazon.in/")
        await use(page)
    }
})

export {expect} from '@playwright/test'
