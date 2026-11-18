// import {test as base} from '@playwright/test'
// import { PageManager } from '../pages/common/pageManager'

// type MyFixture = {
//     PManager : PageManager
// }

// export const test = base.extend<MyFixture>({
//     PManager: [async({browser}, use)=> {
//         const context = await browser.newContext()
//         const page = await context.newPage()
//         const PManager = new PageManager(page)
//         await use(PManager)
//     }, {scope: 'worker'}]

// })




import { test as base } from '@playwright/test'
import { PageManager } from '../pages/common/pageManager'

type MyFixture = {
    PManager: PageManager
}

export const test = base.extend<MyFixture>({
    PManager: [async ({ browser }, use) => {

        const context = await browser.newContext()
        const page = await context.newPage()

        const PManager = new PageManager(page)

        await use(PManager)

        await context.close()

    }, { scope: 'worker' }]
})
