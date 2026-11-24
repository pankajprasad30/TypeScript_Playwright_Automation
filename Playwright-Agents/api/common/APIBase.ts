import { APIRequestContext, APIResponse } from '@playwright/test';

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export type APIRequestBody = JsonValue | string;
export type APIHeaders = Record<string, string>;

export class APIBase {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get_method(url: string, header?: APIHeaders): Promise<APIResponse> {
    return this.request.get(url, { headers: header });
  }

  async post_method(
    url: string,
    header?: APIHeaders,
    request_body?: APIRequestBody,
  ): Promise<APIResponse> {
    return this.request.post(url, this.requestOptions(header, request_body));
  }

  async put_method(
    url: string,
    header?: APIHeaders,
    request_body?: APIRequestBody,
  ): Promise<APIResponse> {
    return this.request.put(url, this.requestOptions(header, request_body));
  }

  async patch_method(
    url: string,
    header?: APIHeaders,
    request_body?: APIRequestBody,
  ): Promise<APIResponse> {
    return this.request.patch(url, this.requestOptions(header, request_body));
  }

  async delete_method(url: string, header?: APIHeaders): Promise<APIResponse> {
    return this.request.delete(url, { headers: header });
  }

  async raw_method(
    url: string,
    method: string,
    header?: APIHeaders,
  ): Promise<APIResponse> {
    return this.request.fetch(url, { method, headers: header });
  }

  private requestOptions(header?: APIHeaders, requestBody?: APIRequestBody) {
    return {
      headers: header,
      data: requestBody,
    };
  }
}
