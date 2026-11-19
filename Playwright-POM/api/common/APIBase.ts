import { APIRequestContext} from "@playwright/test";

export class APIBase {
    request: APIRequestContext
    constructor(request: APIRequestContext) {
        this.request = request

    }

    async get_method(url: string, header: any= null, request_body:any = null) {
        header = header !=null ? header: {}
        request_body = request_body != null? request_body: {}
        const response = await this.request.get(url, {
            headers: header,
            data: request_body
        })
        console.log("response:", response)
        console.log("status", response.status())
        return response 
    }

    async post_method(url: string, header: any= null, request_body:any = null) {
        header = header !=null ? header: {}
        request_body = request_body != null? request_body: {}
        const response = await this.request.post(url, {
            headers: header,
            data: request_body
        })
        console.log("response:", response)
        console.log("status", response.status())
        return response 
    }

     async put_method(url: string, header: any= null, request_body:any = null) {
        header = header !=null ? header: {}
        request_body = request_body != null? request_body: {}
        const response = await this.request.put(url, {
            headers: header,
            data: request_body
        })
        console.log("response:", response)
        console.log("status", response.status())
        return response 
    }

    async patch_method(url: string, header: any= null, request_body:any = null) {
        header = header !=null ? header: {}
        request_body = request_body != null? request_body: {}
        const response = await this.request.patch(url, {
            headers: header,
            data: request_body
        })
        console.log("response:", response)
        console.log("status", response.status())
        return response 
    }

    async delete_method(url: string, header: any= null, request_body:any = null) {
        header = header !=null ? header: {}
        request_body = request_body != null? request_body: {}
        const response = await this.request.patch(url, {
            headers: header,
            data: request_body
        })
        console.log("response:", response)
        console.log("status", response.status())
        return response 
    }





}