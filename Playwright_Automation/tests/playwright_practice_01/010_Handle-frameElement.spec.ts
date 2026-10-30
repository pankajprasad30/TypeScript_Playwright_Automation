import {test} from '@playwright/test'

test.describe("Handle Iframe Test cases", async()=> {
    test("@frame Get Iframe Elements", async({page})=> {
        await page.goto("https://sqatools.in/automation-practice-page/")
        const IframeHeading =  page.getByRole("heading", {name : "Iframe"})
        await IframeHeading.scrollIntoViewIfNeeded()
        // Element with the CSS selector 
        const FrameLocator = page.frameLocator("#sampleIframe")
        const para = FrameLocator.locator("p[lang='en']")
        console.log(await para.textContent())
    });

    test("@frame2 handle menu items",async({page})=> {
        await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame")
        const FrameElem =  page.frameLocator('iframe[name=globalSqa]')
        await FrameElem.locator("#mobile_menu_toggler").click()
    })


    test("@frame3 handle menu items with print",async({page})=> {
        await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame")
        const FrameElem =  page.frameLocator('iframe[name=globalSqa]')
        const menu = FrameElem.locator("#mobile_menu_toggler")
        await menu.press("Control+p")
        await page.waitForTimeout(3000)
    })
});