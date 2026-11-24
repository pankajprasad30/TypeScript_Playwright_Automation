import { APIRequestContext, APIResponse } from '@playwright/test';
import { APIBase, APIHeaders, APIRequestBody } from '../common/APIBase';
import { restfulApiData } from '../../testdata/restfulApiData';

export class RestFul extends APIBase {
  constructor(request: APIRequestContext) {
    super(request);
  }

  async listObjects(ids?: readonly string[]): Promise<APIResponse> {
    const url = new URL(restfulApiData.commonUrl);
    for (const id of ids ?? []) {
      url.searchParams.append('id', id);
    }
    return this.get_method(url.toString());
  }

  async getObject(id: string): Promise<APIResponse> {
    return this.get_method(`${restfulApiData.commonUrl}/${encodeURIComponent(id)}`);
  }

  async createObject(
    body: APIRequestBody,
    headers: APIHeaders = restfulApiData.headers,
  ): Promise<APIResponse> {
    return this.post_method(restfulApiData.commonUrl, headers, body);
  }

  async replaceObject(
    id: string,
    body: APIRequestBody,
    headers: APIHeaders = restfulApiData.headers,
  ): Promise<APIResponse> {
    return this.put_method(
      `${restfulApiData.commonUrl}/${encodeURIComponent(id)}`,
      headers,
      body,
    );
  }

  async patchObject(
    id: string,
    body: APIRequestBody,
    headers: APIHeaders = restfulApiData.headers,
  ): Promise<APIResponse> {
    return this.patch_method(
      `${restfulApiData.commonUrl}/${encodeURIComponent(id)}`,
      headers,
      body,
    );
  }

  async deleteObject(id: string): Promise<APIResponse> {
    return this.delete_method(
      `${restfulApiData.commonUrl}/${encodeURIComponent(id)}`,
    );
  }

  async rawRequest(
    url: string,
    method: string,
    headers?: APIHeaders,
  ): Promise<APIResponse> {
    return this.raw_method(url, method, headers);
  }
}
