import {test, expect} from '@playwright/test'
import * as fs from 'node:fs/promises'

async function createFile(filepath: string, content :string) {
    try {
        await fs.writeFile(filepath, content, {flag: 'wx'})
        console.log("File Created successfully")
    } catch(error) {
        console.log("File already exist")

    }

}

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

    // Different click options:
    test("Different click options", async({page}) => {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const Dummy_Page = page.getByRole("link", {name:"Dummy Page"}).first() // .first() — selects the first matching link.
        await Dummy_Page.click({modifiers: ['Control']})

        const Login_Page = page.getByRole("link", {name: "Login Page"}).first()
        await Login_Page.click({modifiers: ["Shift"]})

        // .pressSequentially: Enter character by character
        const address = page.locator("#address")
        await address.clear()
        await address.pressSequentially("Chabua, Assam")
        await page.close()
    })


    // keyboard operations and shortcuts
    test("keyboard operations and shortcuts", async({page}) => {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const usernameField = page.getByPlaceholder("Enter username")
        await usernameField.fill("user1@gmail.com")
        await usernameField.press("Control+A") // Seleft all
        await usernameField.press("Control+C") // Copy content
        
        const enter_Address = page.locator("#address")
        await enter_Address.clear()
        await enter_Address.press("Control+V") // Paste content

    })



    // upload file and verify
    test("@upload Upload file and verify", async({page}) => {
        await test.step.skip("Upload single files", async() => { // for skip--> .skip
            await page.goto("https://sqatools.in/automation-practice-page/")
            const File_Upload = page.getByRole("heading", {name: "File Upload"})
            await File_Upload.scrollIntoViewIfNeeded() // for scrolling page to proper location

            const File1Path = './Test_Files/file_Upload1.txt' // location of file
            const fileUpload = page.locator("#fileUpload")
            fileUpload.setInputFiles(File1Path) // file location 
            await page.waitForTimeout(3000)// 3 seconds
        })
       // Navigate to integrated terminal--> npx playwright text --grep '@upload' --project=chromium --headed


        await test.step("Upload multiple files", async() => {
            await page.goto("https://app.thetestingacademy.com/playwright/widgets/upload-download")
            const File2Path = './Test_Files/file_Upload2.txt' // location of file
            const File3Path = './Test_Files/file_Upload3.txt' // location of file
            createFile(File2Path, "We are Learning Playwright Action")
            createFile(File3Path, "We are Learning Playwright Action")

            const multiUpload = page.locator("#multi-upload")
            await multiUpload.scrollIntoViewIfNeeded() // for scrolling page to proper location
            multiUpload.setInputFiles([File2Path, File3Path])
            await page.waitForTimeout(3000)
        })

    })

    // Perform drap and drop
    test("Perform drag & Drop Operation", async({page})=> {
        test.setTimeout(60_000)
        await page.goto("https://sqatools.in/automation-practice-page/")
        await page.waitForLoadState("load")
        await page.getByRole("link", {name: "Python Practice Exercises"}).focus()
        await page.waitForTimeout(3000)
        await page.getByRole("link", {name: "Python Practice Exercises"}).press("Escape")
    
        const dragElem = page.locator("#drag1")
        const dropElem = page.locator(".drop")
        await dragElem.scrollIntoViewIfNeeded()
        await dragElem.dragTo(dropElem)
        await expect(dropElem).toHaveText(/Drag Me/)
        await page.waitForTimeout(3000)

    });



})

