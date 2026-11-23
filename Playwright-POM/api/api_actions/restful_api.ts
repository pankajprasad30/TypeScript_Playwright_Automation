import { APIBase } from "../common/APIBase";
import { APIRequestContext } from "@playwright/test";
import * as APITestdata from '../../testdata/api_testdata.ts'


export class RestFul extends APIBase {
    constructor(request:APIRequestContext) {
        super(request)
    }

    async get_all_user_info() {
        const response = this.get_method(
            APITestdata.restful_api.common_url
        )
        return response

    }

    async create_new_object() {
        const response = this.post_method(
            APITestdata.restful_api.common_url,
            APITestdata.restful_api.headers,
            APITestdata.restful_api.newObjectRequest
        )
        return response
    }
}