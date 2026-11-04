import {test} from '../../fixture/baseFixture.ts'


test.describe("@userdetails Fixture specific test cases 2", async()=> {

    test("Select Gender from radio", async({Newpage})=> {
        await Newpage.locator("#male").check()
    });

    test("Select Add more passenger", async({Newpage})=> {
        await Newpage.locator("#admorepass").selectOption("2")
    });
});