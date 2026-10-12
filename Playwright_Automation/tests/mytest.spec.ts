// first import pre-defined modules.
// writing manual test case

import { test, expect } from "@playwright/test"

/* 
// fixture - global variable : page, browser

 test ("Title", async ({page})=> {
 
 // step 1
 // step 2
 // step 3
 })
Note* every method return promise
*/


 test ("Verify title", async ({page})=> {
    await page.goto("https://demowebshop.tricentis.com/")
    await expect(page).toHaveTitle("Demo Web Shop")
 })

 // npx playwright test --> all test case will be executed inside test folder.
 // npx playwright test ./test/mytest.spec.ts --> only this rest will be executed.
 //  npx playwright show-report --> xtml report

 // headless mode--> without opening the browser, default mode
 // npx playwright test ./tests/mytest.spec.ts --headed --> now it will be opened with browser
