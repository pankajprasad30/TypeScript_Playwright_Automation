import { test, expect } from '../../fixture/fixtures'

test("Launch Amazon website", async ({ amazonPage}) => {
    await expect(amazonPage).toHaveURL(/amazon.in/)
    console.log('Amazon webpage launched successfully')
})
// ways to run test cases
// npx playwright test /amazon.spec.ts
// npx playwright test -g 'Custom Fixture Demo'  