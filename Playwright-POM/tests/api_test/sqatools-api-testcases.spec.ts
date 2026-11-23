import {expect, test} from '@playwright/test'
import { SQAToolsAPI } from '../../api/api_actions/sqatools_api';
import * as APITestdata from '../../testdata/api_testdata'

test.describe("@sqapi API Test cases execution", async()=> {
    test.skip("Basic Auth Operation", async({request})=> {
        const obj = new SQAToolsAPI(request)
        const data = await obj.CheckBasicCredentials()
        const JSONdata = await data.json()
        const StatusCode = data.status()
        expect(JSONdata.length).toEqual(13)
        expect(StatusCode).toBe(200)
    });  

    test("Get all users", async({request})=> {
        const obj = new SQAToolsAPI(request)
        const data = await obj.GetUsersWithGoRest()
        const JSONdata = await data.json()
        const StatusCode = data.status()
        console.log(JSONdata)
        expect(StatusCode).toBe(200)
    });  


});