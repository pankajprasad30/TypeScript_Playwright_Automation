import {test} from '@playwright/test'
import { RestFul } from '../../api/api_actions/restful_api';

test.describe("@api API Test cases execution", async()=> {
    test("Get all user info and verify", async({request})=> {
        const obj = new RestFul(request)
        const data = await obj.get_all_user_info()
        const JSONdata = await data.json()
        const StatusCode = data.status()
        console.log(JSONdata, StatusCode)

    });
  }
)