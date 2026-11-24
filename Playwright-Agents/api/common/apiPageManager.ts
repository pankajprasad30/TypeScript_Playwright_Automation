import { APIRequestContext } from '@playwright/test';
import { RestFul } from '../api_actions/restful_api';

export class APIPageManager {
  readonly restfulApi: RestFul;

  constructor(request: APIRequestContext) {
    this.restfulApi = new RestFul(request);
  }
}
