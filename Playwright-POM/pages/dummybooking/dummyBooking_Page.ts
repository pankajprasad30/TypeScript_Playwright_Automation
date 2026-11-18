import {Page} from '@playwright/test'
import {DummyBookingLocators} from './dummyBooking_Locator'

export class DummyBookingPage extends DummyBookingLocators {
    constructor(page:Page) {
        super(page)
    }

    async login(username: string, password:string) {
        await this.UsernameField.fill(username)
        await this.PasswordField.fill(password)
        await this.LoginButton.click()
    }
      async select_From_And_To_City(from_city: string, to_city: string) {
        await this.fromCityDrodown.selectOption({label : from_city})
        await this.toCityDrodown.selectOption({label: to_city})
    }

    async select_depart_and_return_date(depart_date: string, return_date: string) {
        await this.departDateCalender.fill(depart_date)
        await this.returnDateCalender.fill(return_date)
    }

    async select_flight_class(flight_class: string) {
       await this.flightClassDrodown.selectOption({label: flight_class})
    }

    async passenger_details(adult: string, children: string, infant: string) {
        await this.adultsDropdown.selectOption({label: adult})
        await this.childrenDropdown.selectOption({label: children})
        await this.infantDrodown.selectOption({label: infant})
    }
}