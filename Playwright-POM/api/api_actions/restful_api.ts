import { APIBase } from "../common/APIBase";
import { APIRequestContext } from "@playwright/test";


export class RestFul extends APIBase {
    constructor(request:APIRequestContext) {
        super(request)
    }

    async get_all_user_info() {
        const response = this.get_method(
            "https://api.restful-api.dev/objects"
        )
        return response

    }
}