/* 
Quick Guide: 
These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

// Website for practice: https://sdetqa.vercel.app/pw-locators-demo-app

import {test, expect} from '@playwright/test'

test("Playwright locators", async({page})=>{
    await page.goto("https://sdetqa.vercel.app/pw-locators-demo-app")
    // 1. page.getByRole(): mostly used for interactive elements, e.g: button, checkbox, links, headings, table etc
    const projectsLink =  page.getByRole('link', {name: 'Projects'})
    await expect(projectsLink).toBeVisible()

    const signInButton = page.getByRole('button', {name: 'Sign In'})
    await expect(signInButton).toBeVisible()
    await signInButton.click()

    // 2. page.getByText(): to locate by text content/ non-interactive elements

    //const welcomeText = page.getByText('Welcome, John! 👋') // exact match/ extact string have to pass
    const welcomeText = page.getByText('Welcome, John! 👋',{exact:true})
    await expect(welcomeText).toBeVisible()

    // 3. page.getByLabel(): to locate a form control by associated label's text.
    // Ideal for form fields with visible labels.
    //Note* : If we have further action after toBeVisible() better to store in some element then use it.
    const firstName = page.getByLabel("First Name")
    await expect(firstName).toBeVisible()
    await firstName.fill("Pankaj")

    const emailID = page.getByLabel("Email Address")
    await expect(emailID).toBeVisible()
    await emailID.fill("pankaj@gmail.com")

    // 4. page.getByPlaceholder(): to locate an input by placeholder.
    const searchTest = page.getByPlaceholder("Search tests...")
    await expect(searchTest).toBeVisible()
    await searchTest.fill("Locators practice..")

    // 5. page.getByAltText(): to locate an element, usually image, by its text alternative.
    //page.getByAltText("Playwright logo")
    await expect(page.getByAltText("Playwright logo")).toBeVisible()

    // 6. page.getByTitle(): to locate an element by its title attribute.
    const testPassed = page.getByTitle("Tests passed today")
    await expect(testPassed).toBeVisible()

    // await expect(testPassed).toHaveText("3,204Passed") // in this we have to pass exact text
    await expect(testPassed).toContainText("3,204") // here partia text is fine.

    // 7. page.getByTestId(): to locate an element based on its data-testid attribute (other attributes can be configured).
    const proPlanButton = page.getByTestId("add-to-cart-pro")
    await expect(proPlanButton).toBeVisible()
    await proPlanButton.click()

    const searchButton = page.getByTestId("search-input")
    await expect(searchButton).toBeVisible()

})