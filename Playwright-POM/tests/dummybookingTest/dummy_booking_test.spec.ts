import { expect } from '@playwright/test'
import {test} from '../../fixture/baseFixture'
import * as Testdata from '../../testdata/testdata'

test.describe("@dbtest Dummy booking test cases", ()=> {
    test.beforeAll("Login and search flight", async({PManager})=> {
    //test("Login and search flight", async({PManager})=> {
        await PManager.dbookingPage.navigate(Testdata.DummyBooking.url)
        await PManager.dbookingPage.login(
            Testdata.DummyBooking.username,
            Testdata.DummyBooking.password
        )
        await expect(PManager.dbookingPage.SearchHeading).toBeVisible()
       // npx playwright test --grep '@dbtest' --headed --project=chromium

    });

    test("Select from and to city", async({PManager})=> {
        await PManager.dbookingPage.select_From_And_To_City(
            Testdata.DummyBooking.fromCity,
            Testdata.DummyBooking.toCity
        )    
     });

    test("Select depart date and return date", async({PManager})=> {
        await PManager.dbookingPage.select_depart_and_return_date(
            Testdata.DummyBooking.departDate,
            Testdata.DummyBooking.returnDate
        )    
     });

     test("Select flight class and passenger", async({PManager})=> {
        await PManager.dbookingPage.select_flight_class(
            Testdata.DummyBooking.flightClass
        ) 
        await PManager.dbookingPage.passenger_details(
            Testdata.DummyBooking.Adult,
            Testdata.DummyBooking.child,
            Testdata.DummyBooking.infant
        )   
     });
})