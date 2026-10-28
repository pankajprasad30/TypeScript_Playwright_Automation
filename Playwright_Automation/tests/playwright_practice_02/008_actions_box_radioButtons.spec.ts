import {test, expect} from '@playwright/test'

const pageURL = "https://sdetqa.vercel.app/autoplay"

test.describe("Data entry form dalidation", () => {

    test.beforeEach(async({page}) => {
        await page.goto(pageURL)
    })

    // 1. Page loading validation
    test("1. Page loading validation", async({page}) => {
        await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay")
        await expect(page.getByText("AutoPlay")).toBeVisible()
    })

    // 2. Input field validation
    test("2. Input field validation", async({page}) => {
        const nameField = page.getByLabel("Full name")
        const emailField = page.getByLabel("Email")
        const phoneField = page.getByLabel("Phone")
        const addressField = page.getByLabel("Address")


        // Assertions: 
        // Full name should be visible and enabled
        await expect(nameField).toBeVisible()
        await expect(nameField).toBeEnabled()

        // Verify maximum length/attribute should be 15
        await expect(nameField).toHaveAttribute('maxlength', '15')

        // Enter and verify full name value
        await nameField.fill('Pankaj Prasad')
        await expect(nameField).toHaveValue('Pankaj Prasad')

        //Email field should be visible and accept a value
        await expect(emailField).toBeVisible()
        await emailField.fill("Pankaj@gmail.com")
        await expect(emailField).toHaveValue('Pankaj@gmail.com')

        // Phone field should be visible and accept a value
        await expect(phoneField).toBeVisible()
        await phoneField.fill("+91 99999999")
        await expect(phoneField).toHaveValue('+91 99999999')

        // Address field should be visible and sccept multi-line text
        await expect(addressField).toBeVisible()
        await addressField.fill("M.E.S Tinali, Chabua \nAssam")
        await expect(addressField).toHaveValue("M.E.S Tinali, Chabua \nAssam")

        await page.waitForTimeout(2000) // waiting for timeout
    })

    // 3. Radio button validation
    test("Radio button validation", async({page}) => {
        const maleRadioButton = page.getByLabel('Male', { exact: true })
        const femaleRadioButton = page.getByLabel('Female', { exact: true });

        await expect(maleRadioButton).toBeVisible()
        await expect(femaleRadioButton).toBeVisible()

        await maleRadioButton.check()
        await expect(maleRadioButton).toBeChecked()
        await expect(femaleRadioButton).not.toBeChecked()

    })






})