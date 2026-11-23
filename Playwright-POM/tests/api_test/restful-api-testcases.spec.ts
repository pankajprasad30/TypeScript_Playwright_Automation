import {expect, test} from '@playwright/test'
import { RestFul } from '../../api/api_actions/restful_api';
import * as APITestdata from '../../testdata/api_testdata'

test.describe("@api API Test cases execution", async()=> {
    test("Get all user info and verify", async({request})=> {
        const obj = new RestFul(request)
        const data = await obj.get_all_user_info()
        const JSONdata = await data.json()
        const StatusCode = data.status()
        expect(JSONdata.length).toEqual(13)
        expect(StatusCode).toBe(200)
    });

    test("Create new object and verify", async({request})=> {
        const obj = new RestFul(request) 
        const response = await obj.create_new_object()
        const JSONResponse = await response.json()
        const STATUSCode = response.status()
        expect(JSONResponse.name).toEqual(APITestdata.restful_api.newObjectRequest.name)
        expect(STATUSCode).toEqual(200)

    })
}

)