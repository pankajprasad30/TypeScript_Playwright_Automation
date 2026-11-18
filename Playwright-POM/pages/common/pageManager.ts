import {Page} from '@playwright/test'
import { DummyBookingPage } from "../dummybooking/dummyBooking_Page";

export class PageManager {
    readonly page: Page
    readonly dbookingPage: DummyBookingPage

    constructor(page: Page) {
        this.page = page
        this.dbookingPage = new DummyBookingPage(this.page)
        
    }

}