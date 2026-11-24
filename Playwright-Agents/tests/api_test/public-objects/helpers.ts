import { randomUUID } from 'node:crypto';
import { APIResponse, expect } from '@playwright/test';
import { RestFul } from '../../../api/api_actions/restful_api';
import { JsonValue } from '../../../api/common/APIBase';

export type APIObject = {
  id: string;
  name: string;
  data: JsonValue;
  createdAt?: string | number;
  updatedAt?: string | number;
};

export type APIObjectPayload = {
  name: string;
  data: JsonValue;
};

export function isJsonValue(value: unknown): value is JsonValue {
  if (
    value === null ||
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  ) {
    return true;
  }

  if (Array.isArray(value)) {
    return value.every(isJsonValue);
  }

  if (typeof value !== 'object') {
    return false;
  }

  return Object.values(value).every(isJsonValue);
}

export function parseAPIObject(value: unknown): APIObject {
  if (
    typeof value !== 'object' ||
    value === null ||
    Array.isArray(value)
  ) {
    throw new Error('Expected the API response to be an object.');
  }

  const record = value as Record<string, unknown>;
  if (
    typeof record.id !== 'string' ||
    typeof record.name !== 'string' ||
    !Object.prototype.hasOwnProperty.call(record, 'data') ||
    !isJsonValue(record.data)
  ) {
    throw new Error('API object response is missing a valid id, name, or data field.');
  }

  return {
    id: record.id,
    name: record.name,
    data: record.data,
    ...(typeof record.createdAt === 'string' || typeof record.createdAt === 'number'
      ? { createdAt: record.createdAt }
      : {}),
    ...(typeof record.updatedAt === 'string' || typeof record.updatedAt === 'number'
      ? { updatedAt: record.updatedAt }
      : {}),
  };
}

export function parseAPIObjectList(value: unknown): APIObject[] {
  if (!Array.isArray(value)) {
    throw new Error('Expected the API response to be an array.');
  }
  return value.map(parseAPIObject);
}

export function uniqueObjectPayload(
  prefix = 'playwright-api',
  data: JsonValue = { source: 'playwright-api-test' },
): APIObjectPayload {
  return {
    name: `${prefix}-${randomUUID()}`,
    data,
  };
}

export async function createTestObject(
  api: RestFul,
  payload: APIObjectPayload = uniqueObjectPayload(),
): Promise<APIObject> {
  const response = await api.createObject(payload);
  expect(
    response.ok(),
    `Create test object returned ${response.status()}: ${await response.text()}`,
  ).toBeTruthy();
  const body: unknown = await response.json();
  const created = parseAPIObject(body);
  expect(created.name).toBe(payload.name);
  return created;
}

export async function deleteTestObject(api: RestFul, id: string): Promise<void> {
  const response = await api.deleteObject(id);
  if (!response.ok() && response.status() !== 404) {
    throw new Error(`Cleanup failed for test object ${id}: HTTP ${response.status()}`);
  }
}

export async function withTestObject<T>(
  api: RestFul,
  run: (object: APIObject) => Promise<T>,
  payload: APIObjectPayload = uniqueObjectPayload(),
): Promise<T> {
  const object = await createTestObject(api, payload);
  try {
    return await run(object);
  } finally {
    await deleteTestObject(api, object.id);
  }
}

export async function expectNotRateLimited(response: APIResponse): Promise<void> {
  const body = await response.text();
  expect(body.toLowerCase(), 'The API daily request limit was reached').not.toContain('daily request limit');
}

export async function expectClientError(response: APIResponse): Promise<void> {
  await expectNotRateLimited(response);
  expect(response.status(), `Expected a 4xx response, received ${response.status()}`).toBeGreaterThanOrEqual(400);
  expect(response.status(), `Expected a 4xx response, received ${response.status()}`).toBeLessThan(500);
}

export function expectJsonContentType(contentType: string | undefined): void {
  expect(contentType).toMatch(/^application\/json(?:\s*;|$)/i);
}
