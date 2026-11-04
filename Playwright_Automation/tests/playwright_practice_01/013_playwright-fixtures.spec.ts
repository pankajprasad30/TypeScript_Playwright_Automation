import {test} from '../../fixture/baseFixture.ts'

test.describe("Fixture specific test cases", ()=> {

    test("Add user details : firstname", async({Mypage})=> {
        await Mypage.locator('[data-testid="login-username"]').first().fill("Rahul")
    });

    test("Add user details: lastname : ", async({Mypage})=> {
        await Mypage.locator('[data-testid="login-password"]').fill("Sharma")
    });
})

/* 
Complete execution flow
Import the custom test from baseFixture.ts.
Create a describe block.
Create the first test case.
Receive the Mypage fixture.
Enter Rahul into the first matching input.
Complete the first test and clean up its context.
Create the second test case.
Receive a fresh Mypage fixture.
Enter Sharma into the second matching input.
Complete the second test and clean up its context.

........................................................
Remember these five things: --> 

base.extend() – Creates custom fixtures.

use – Passes the fixture value to the test.

Mypage – Custom fixture name used in test cases.

await use(page) – Separates setup from test execution and teardown.

context.close() – Cleans up the browser context after the test.
*/