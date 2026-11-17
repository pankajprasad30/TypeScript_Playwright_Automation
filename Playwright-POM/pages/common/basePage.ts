import {Page} from '@playwright/test'

export class basePage {
    readonly page:Page
    constructor(page:Page) {
        this.page = page
    }

    async navigate(url:string){
        await this.page.goto(url)
    }

    async waitfortime(timeout:number){
        await this.page.waitForTimeout(timeout)
    }

}