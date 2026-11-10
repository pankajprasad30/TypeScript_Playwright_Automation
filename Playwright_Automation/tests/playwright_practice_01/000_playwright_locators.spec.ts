import { test, expect } from "@playwright/test";

/* 
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
.......................................................................................................................

In Playwright, these methods are used to find elements on a webpage so you can perform actions like clicking buttons, entering text, or checking information.

1. page.getByRole()
Use when: You want to find an element based on its role, such as a button, textbox, link, or checkbox.

Where we can use it:

Buttons

Links

Textboxes

Checkboxes

Headings

Radio buttons

Example:

javascript
page.getByRole('button', { name: 'Login' }).click();
page.getByRole('link', { name: 'Home' }).click();
page.getByRole('textbox', { name: 'Email' }).fill('test@gmail.com');
page.getByRole('checkbox', { name: 'Remember me' }).check();
page.getByRole('heading', { name: 'Welcome' }).isVisible();
2. page.getByText()
Use when: You want to find an element using the text displayed on the webpage.

Where we can use it:

Normal text

Messages

Paragraphs

Labels or other text elements

Menu items

Example:

javascript
page.getByText('Welcome back').click();
page.getByText('Login successful').isVisible();
page.getByText('Forgot Password?').click();
page.getByText('Order placed successfully').isVisible();
3. page.getByLabel()
Use when: An input field has a label associated with it.

Where we can use it:

Email fields

Password fields

Name fields

Checkboxes with labels

Radio buttons with labels

Example:

Imagine the webpage has a label called Email Address above an input field.

javascript
page.getByLabel('Email Address').fill('test@gmail.com');
page.getByLabel('Password').fill('Test@123');
page.getByLabel('Remember me').check();
4. page.getByPlaceholder()
Use when: An input field contains placeholder text inside it.

Where we can use it:

Search boxes

Email inputs

Password inputs

Name fields

Comment boxes

Example:

Imagine a search box displaying Search products.

javascript
page.getByPlaceholder('Search products').fill('Laptop');
page.getByPlaceholder('Enter email').fill('test@gmail.com');
page.getByPlaceholder('Enter password').fill('Test@123');
5. page.getByAltText()
Use when: You want to find an image or another element using its alternative text (alt attribute).

Where we can use it:

Product images

Company logos

Profile pictures

Banners with alt text

Example:

Imagine an image has alt="Company Logo".

javascript
page.getByAltText('Company Logo').click();
page.getByAltText('Product Image').isVisible();
page.getByAltText('User Profile').isVisible();
Note: This method is mainly used for images. The element must have matching alternative text.

6. page.getByTitle()
Use when: An element has a title attribute, often shown as a tooltip when you hover over it.

Where we can use it:

Icons

Buttons

Images

Links

Other elements with a title attribute

Example:

Imagine a button has title="Close".

javascript
page.getByTitle('Close').click();
page.getByTitle('Help').click();
page.getByTitle('User Settings').click();
Note: The element must have a matching title attribute.

7. page.getByTestId()
Use when: The developer has added a special testing attribute, usually data-testid, to an element.

Where we can use it:

Login buttons

Submit buttons

Search fields

Shopping cart icons

Elements that are difficult to locate using other methods
*/

test.describe("Playwright locator methods", () => {
    // 1. page.getByRole():
    test("getByRole() method", async({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const primary_Btn = page.getByRole("button", {name: "Primary Action"})
        await expect(primary_Btn).toBeVisible()
        await page.getByRole("textbox", {name: "Username:"}).nth(0).fill("Pankaj")
        await page.getByRole("checkbox", {name: "Accept terms"}).check()
        const value = await page.getByRole("menuitem", {name: "Contact"}).textContent()
        console.log(value)
    })
    // 2. page.getByText()
    test("getByText() method", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        await page.getByText("START").click()
        const element =  page.getByText("colored text")
        await expect(element).toBeAttached()
        await page.getByText("Online Trainings").click()
    })

    // 3. page.getByLabel()
    test("getByLabel() method", async({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const emailID = page.getByLabel("Email Address:")
        await expect(emailID).toBeVisible()
        await emailID.fill("pankajprasad@gmail.com")
    })

    // 4. page.getByPlaceholder()
    test("getByPlaceholder() method", async({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const fullName = page.getByPlaceholder("Enter your full name")
        await expect(fullName).toBeVisible()
        await fullName.fill("Pankaj Prasad")
    })

    // 5. page.getByAltText() 
    test("page.getByAltText() methods", async({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const textImage = page.getByAltText("logo image")
        await textImage.scrollIntoViewIfNeeded() // for viewing exatct location in webpage.
        await expect(textImage).toBeVisible()     
    })

    // 6. page.getByTitle() 
    test("getByTitle() method", async({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const titleHome = page.getByTitle("Home page link")
        await titleHome.scrollIntoViewIfNeeded()
        expect(titleHome).toBeVisible()
        console.log(await titleHome.textContent()) // Home

        const titleToolTip = page.getByTitle("Tooltip text")
        console.log(await titleToolTip.textContent()) // This text has a tooltip

    })

    // 7. getByTestId() Locators
    test("getByTestId() Locators", async({page}) => {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
        const profileName = page.getByTestId("profile-name")
        await profileName.scrollIntoViewIfNeeded()
        await expect(profileName).toBeVisible()
        console.log(await profileName.textContent()) // John Doe

        // const productPrice = page.getByTestId("profile-email").textContent()
        // // await expect(productPrice).toContainText("$29.99")
        // // await expect(productPrice).toHaveText("$29.99")
        // console.log(productPrice)

        const email = await page.getByTestId("profile-email").textContent()
        console.log(email)

        const product_cart2 = await page.getByTestId("product-card-2").textContent()
        console.log(product_cart2)

    })
})