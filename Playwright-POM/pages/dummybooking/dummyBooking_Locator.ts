import {Page} from '@playwright/test'
import { basePage } from '../common/basePage'


export class DummyBookingLocators extends basePage {
    constructor(page: Page) {
        super(page)
    }

    get UsernameField() {
        return this.page.getByTestId("login-username")
    }

    get PasswordField() {
        return this.page.getByTestId("login-password")
    }

    get LoginButton() {
        return this.page.getByTestId("login-button")
    }

    get fromCityDrodown() {
        return this.page.getByTestId("from-city")
    }

    get toCityDrodown() {
        return this.page.getByTestId("to-city")
    }

    get departDateCalender() {
        return this.page.getByTestId("depart-date")
    }

    get returnDateCalender() {
        return this.page.getByTestId("return-date")
    }

    get flightClassDrodown() {
        return this.page.getByTestId("cabin-class")
    }

    get adultsDropdown() {
        return this.page.getByTestId("adults")
    }

    get childrenDropdown(){
        return this.page.getByTestId("children")
    }

    get infantDrodown() {
        return this.page.getByTestId("infants")
    }

}