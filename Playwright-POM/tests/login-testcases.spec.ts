import { LoginPage } from "../pages/LoginPage";
import {test} from '@playwright/test'


test.describe("@login All login test cases", ()=> {

    test("Login with valid credentials", async({page})=> {
        const loginpage = new LoginPage(page)
        await loginpage.navigate("https://sqatools.in/dummy-booking-website/")
        await loginpage.login("testuser", "Test@123")
        await loginpage.verifyHeading()
    })

})

// npx playwright test -g "Login with valid credentials"