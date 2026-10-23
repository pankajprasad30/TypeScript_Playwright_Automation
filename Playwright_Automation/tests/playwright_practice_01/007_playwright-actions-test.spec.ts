import {test, expect} from '@playwright/test'

test.describe("Playwright Action test cases", () => {
    test("Enter text in taxbox", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")

        const userNameValue = "Pankaj"
        const textField = page.getByPlaceholder("Enter username")
        await textField.fill(userNameValue)

        // The value from the text box that we have entered 
        const EnteredValue = await textField.inputValue()
        console.log(EnteredValue)
        expect(userNameValue).toEqual(EnteredValue) // for verifying text

        const PasswordValue = "pankaj@12345"
        const PassField = page.getByPlaceholder("Enter password")
        await PassField.fill(PasswordValue)
    })

    test("Enter date and time", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        await page.locator("#datePicker").fill("2026-10-29")
        await page.locator("#timePicker").fill("20:00")
        await page.locator("#dateTimePicker").fill("2026-10-22T20:15")
    })

    /* 
    Remember this
    getDate() → Returns the day (1–31).

    getMonth() → Returns the month (0–11), so add 1.

    getFullYear() → Returns the full year (e.g., 2026).

    Interview tip: JavaScript months are zero-indexed, meaning January is 0 and December is 11. That's why we use getMonth() + 1 to get the actual calendar month.
    */

    test("Fetch date and time", async({page}) => {
        const date = new Date()

        // const day = date.getDate()
        // const month = date.getMonth() + 1
        // const year = date.getFullYear()

        // const hour = date.getHours()
        // const min = date.getMinutes()

        // console.log("Date: ", year, month, day)
        // console.log("Time: ", hour,':', min)

        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, "0")
        const day = String(date.getDate()).padStart(2, "0")
        const hours = String(date.getHours()).padStart(2, "0")
        const minutes = String(date.getMinutes()).padStart(2, "0")

        const complete_DateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
        console.log(complete_DateTime)

        await page.goto("https://sqatools.in/automation-practice-page/")
        const dateTimePicker = page.locator("#dateTimePicker")
        await dateTimePicker.fill(complete_DateTime)

        // const complete_Date_Time = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}T${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
        // console.log(complete_Date_Time)
    })

    // Handle radiobutton and checkbox
    test("Randle radio button and checkboxes", async({page}) => {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const radioBtn = page.locator("#male")
        await expect(radioBtn).not.toBeChecked()
        await radioBtn.check()
        await expect(radioBtn).toBeChecked()

        const checkboxElem = page.locator("#python")
        await expect(checkboxElem).not.toBeChecked()
        await checkboxElem.check()
        await expect(checkboxElem).toBeChecked()

    })

    // handle dropdown
    test("Randle dropdown", async({page}) => {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const CountryDD = page.locator("#country")
        // select by value
        await CountryDD.scrollIntoViewIfNeeded()
       
        await CountryDD.selectOption("uk") // UK
        //await page.waitForTimeout(3000)
       
        // select by Label
        await CountryDD.selectOption({label: "India"})
        //await page.waitForTimeout(3000)

        // select by index position
        await CountryDD.selectOption({index: 4}) // Australia
        //await page.waitForTimeout(3000)

        const SkillDD = page.locator("#skills")
        await SkillDD.selectOption(['Python', 'Selenium', 'Playwright'])

    })

})

