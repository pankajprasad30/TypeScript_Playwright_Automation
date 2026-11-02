
// Import test and expect functions from Playwright
import { test, expect } from '@playwright/test'

// Group related test cases under one test suite
test.describe("Hooks Practice", () => {

    // BEFORE ALL:
    // Executes only ONCE before all test cases in this test suite.
    // Useful for common setup activities.
    test.beforeAll(() => {
        console.log("Before All: Test suite execution started")
    })

    // AFTER ALL:
    // Executes only ONCE after all test cases are completed.
    // Useful for cleanup activities.
    test.afterAll(() => {
        console.log("After All: Test suite execution completed")
    })

    // BEFORE EACH:
    // Executes before EVERY individual test case.
    // Useful for preparing the test environment.
    test.beforeEach(() => {
        console.log("Before Each: Setting up the test environment")
    })

    // AFTER EACH:
    // Executes after EVERY individual test case.
    // Useful for cleanup after each test.
    test.afterEach(() => {
        console.log("After Each: Cleaning up the test environment")
    })

    // TEST CASE 1
    test("@f1 Test case 1", async () => {
        console.log("Executing Test Case 1")
    })

    // TEST CASE 2
    test("@sanity Test case 2", async () => {
        console.log("Executing Test Case 2")
    })

    // TEST CASE 3
    test("@regression Test case 3", async () => {
        console.log("Executing Test Case 3")
    })

    // npx playwright test --grep '@f1'  only 1 test
    // @f1 filters correctly but @smoke executes everything.

})
