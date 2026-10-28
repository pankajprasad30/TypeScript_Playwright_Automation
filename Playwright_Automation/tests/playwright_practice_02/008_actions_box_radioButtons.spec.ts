import {test, expect} from '@playwright/test'

const pageURL = "https://sdetqa.vercel.app/autoplay"

test.describe("Data entry form dalidation", () => {

    test.beforeEach(async({page}) => {
        await page.goto(pageURL)
    })

    // 1. Page loading validation
    test("1. Page loading validation", async({page}) => {
        await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay")
        await expect(page.getByText("AutoPlay")).toBeVisible()
    })

    // 2. Input field validation
    test("2. Input field validation", async({page}) => {
        await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay")
        await expect(page.getByText("AutoPlay")).toBeVisible()
    })






})