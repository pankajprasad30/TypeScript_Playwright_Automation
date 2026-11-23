import { APIBase } from "../common/APIBase";
import { APIRequestContext } from "@playwright/test";
import * as APITestdata from '../../testdata/api_testdata.ts'

export class SQAToolsAPI extends APIBase {
    constructor(request:APIRequestContext) {
        super(request)
    }

    async CheckBasicCredentials() {
        const response = await this.get_method(
            APITestdata.sqatoolsAPI.AuthURL,
            APITestdata.sqatoolsAPI.basicAuthHeader
        )
        return response
    }

    async GetUsersWithGoRest() {
        const response = await this.get_method(
            APITestdata.gorestAPI.UsersURL,
            APITestdata.gorestAPI.headers
        )
        return response
    }

}