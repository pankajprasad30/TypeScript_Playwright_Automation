import {expect, test} from '@playwright/test'

test.describe("Handle Playwright Alerts", async()=> {
    test("Accept Simple Alert", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/")
        
        page.on("dialog", dialog=> {
            console.log(dialog.message())
            dialog.accept()
        });
        await page.locator("#alertBtn").click()
    });


    test("Accept Confirmation Alert", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/")
        
        page.on("dialog", dialog=> {
            console.log(dialog.message())
            dialog.accept()
        });
        await page.locator("#confirmBtn").click()
        const msg = page.locator("#demo")
        console.log(await msg.textContent())
        expect(await msg.textContent()).toEqual("You pressed OK!")
    });

    test("Dismiss Confirmation Alert", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/")
        
        page.on("dialog", dialog=> {
            console.log(dialog.message())
            dialog.dismiss()
        });
        await page.locator("#confirmBtn").click()
        const msg = page.locator("#demo")
        console.log(await msg.textContent())
        expect(await msg.textContent()).toEqual("You pressed Cancel!")
    });

    test("Accept prompt Alert", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/")
        const Name = "Mohit"
        page.on("dialog", dialog=> {
            console.log(dialog.message())
            dialog.accept(Name)
        });
        await page.locator("#promptBtn").click()
        const msg = page.locator("#demo")
        console.log(await msg.textContent())
        expect(await msg.textContent()).toEqual(`Hello ${Name}! How are you today?`)
    });

    test("dismiss prompt Alert", async({page})=> {
        await page.goto("https://testautomationpractice.blogspot.com/")
        const Name = "Mohit"
        page.on("dialog", dialog=> {
            console.log(dialog.message())
            dialog.dismiss()
        });
        await page.locator("#promptBtn").click()
        const msg = page.locator("#demo")
        console.log(await msg.textContent())
        expect(await msg.textContent()).toEqual('User cancelled the prompt.')
    });
})