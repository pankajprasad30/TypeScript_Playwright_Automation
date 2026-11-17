import { LoginPage } from "../pages/LoginPage";
import {test} from '@playwright/test'

// Now we're using your LoginPage class inside a Playwright test spec.
test.describe("@login All login test cases", ()=> { // Groups related test cases

    test("Login with valid credentials", async({page})=> { // Defines an individual test // built-in page fixture
        const loginpage = new LoginPage(page) // Creates an instance of LoginPage
        await loginpage.navigate("https://sqatools.in/dummy-booking-website/")
        await loginpage.login("testuser", "Test@123")
        await loginpage.verifyHeading()
    })

})

// npx playwright test -g "Login with valid credentials"
// for executing group of test cases:---> npx playwright test --grep "@login"

/* 
Why do we create an object of LoginPage inside the test?
Answer: We create an instance of the LoginPage class and pass the Playwright page fixture to its constructor. 
This allows us to access the locators and reusable methods defined inside LoginPage without duplicating code in every test.

Q: Why do we use tags in Playwright?
Answer: We use tags to categorize test cases based on their functionality, 
such as smoke, regression, and sanity. Using Playwright's --grep option, 
we can execute specific categories of tests without executing the entire test suite.

B. What is a fixture?
A fixture is a mechanism that provides the required objects, resources, or setup to a test automatically.

Playwright already provides built-in fixtures such as:
Built-in fixture	Purpose
page	            Browser tab/page
browser	            Browser instance
context	            Browser context
request	            API request context

We can also create our own fixtures.

For example:
- loginPage
- homePage
- dashboardPage
- bookingPage
These are custom fixtures.


*/