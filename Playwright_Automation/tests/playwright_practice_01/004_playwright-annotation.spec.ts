import {test} from '@playwright/test'

test.describe("Booking.com features", () => {
    // Option1 : Specify the tag name along with the title of the test suite or test case. 
    test.describe("@hotel Hotel Booking", () => {
        test("@smoke Hotel booking test case 1", () => {
            console.log("Hotel booking test case 1")
        })
        test("@sanity Hotel booking test case 2", () => {
            console.log("Hotel booking test case 2")
        })
        test("@regression Hotel booking test case 3", () => {
            console.log("Hotel booking test case 3")
        })
    })

    // Option 2: separately define a section to assign a tag to each of the test cases. 
    test.describe("Flight Booking", {tag: '@flight' }, ()=> {
        test("Flight test case1",{tag: '@smoke'},  ()=> {
            console.log("Flight test case1")
        })

        test("Flight test case2", {tag: '@sanity'}, ()=> {
            console.log("Flight test case2")
        })

        test("Flight test case3", {tag: '@regression'}, ()=> {
            console.log("Flight test case3")
        })

    })

    test.describe("Cab Booking", {tag: '@cab'}, ()=> {
        test("Cab test case1", {tag: '@smoke'}, ()=> {
            console.log("Cab test case1")
        })

        test("Cab test case2", {tag: '@sanity'}, ()=> {
            console.log("Cab test case2")
        })

        test("Cab test case3", {tag: '@regression'}, ()=> {
            console.log("Cab test case3")
        })

    })

})

/* 
npx playwright test --grep "@smoke"

All sanity tests

npx playwright test --grep "@sanity"

All regression tests

npx playwright test --grep "@regression"

Only hotel tests

npx playwright test --grep "@hotel"

Only flight tests

npx playwright test --grep "@flight"

Only cab tests

npx playwright test --grep "@cab"

Smoke tests for flights

npx playwright test --grep "@flight.*@smoke"
*/