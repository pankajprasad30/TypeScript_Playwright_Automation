import {test} from '../../fixture/baseFixture.ts'


test.describe("@userdetails Fixture specific test cases 1", async()=> {
    test("Add user details : firstname", async({Newpage})=> {
        await Newpage.locator('[data-testid="login-username"]').first().fill("Rahul")

    });

    test("Add user details: lastname : ", async({Newpage})=> {
        await Newpage.locator('[data-testid="login-password"]').fill("Sharma")

    });
});