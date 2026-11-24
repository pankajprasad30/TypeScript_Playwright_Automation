# Public REST API Test Plan

## Application Overview

Comprehensive positive, negative, boundary, persistence, and transport coverage for the six endpoints displayed under the Public filter on https://restful-api.dev/: GET /objects (including repeated id query filters), GET /objects/{id}, POST /objects, PUT /objects/{id}, PATCH /objects/{id}, and DELETE /objects/{id}. Authenticated-only collections, registration, and login endpoints are out of scope. Each scenario is independent. Read-only tests use the documented sample records (including IDs 2 and 7); every write test creates a uniquely named object and must clean up only the ID it created, even on failure. Never update or delete shared sample records. The landing-page docs require Content-Type: application/json for POST/PUT/PATCH, describe data as flexible JSON, and do not define exact validation error codes or error-body schemas; until the API contract does, assert successful 2xx responses for valid requests, client-error 4xx responses and no side effects for invalid requests, and record exact response details for contract clarification. No browser seed is required; API fixtures are established within each scenario.

The public service currently reports an unauthenticated daily request limit of 50 requests per 24 hours using HTTP 405. This complete live suite makes more requests than that, so run it in batches across quota windows or configure the provider's higher-quota account where available; rate-limit responses must never be treated as validation results. Live probing also observed duplicate query IDs returned as duplicate objects and the HTTP endpoint serving data without redirecting to HTTPS; the latter remains an intentional failing transport/security assertion.

## Test Scenarios

### 1. Public Object Listing and Retrieval

**Seed:** `No browser seed; each scenario uses public sample objects or its own API setup`

#### 1.1. List public sample objects

**File:** `tests/api_test/public-objects/list-objects.spec.ts`

**Steps:**
  1. Send GET https://api.restful-api.dev/objects without Authorization.
    - expect: The response is successful (2xx) and has a JSON content type.
    - expect: The response body is a JSON array containing the predefined public sample objects.
    - expect: Each returned entry has a string id, a string name, and a data property that is either an object, array, scalar, or null as permitted by the flexible schema.
    - expect: Do not assert a mutable total count or that user-created objects appear in this predefined public sample list.

#### 1.2. Retrieve the documented object by ID

**File:** `tests/api_test/public-objects/get-documented-object.spec.ts`

**Steps:**
  1. Send GET https://api.restful-api.dev/objects/7 without Authorization.
    - expect: The response is successful (2xx) and is a single JSON object.
    - expect: The id is the string 7 and name is Apple MacBook Pro 16, matching the documented example.
    - expect: The data property includes the documented year, price, CPU model, and hard disk size fields.

#### 1.3. Retrieve an object whose data is null

**File:** `tests/api_test/public-objects/get-null-data-object.spec.ts`

**Steps:**
  1. Send GET https://api.restful-api.dev/objects/2 without Authorization.
    - expect: The response is successful and returns one object with id 2.
    - expect: The data property is JSON null, not an omitted field, empty object, or string.

#### 1.4. Filter the public list by one ID

**File:** `tests/api_test/public-objects/filter-by-one-id.spec.ts`

**Steps:**
  1. Send GET /objects?id=7.
    - expect: The response is a JSON array containing only the matching object with id 7.
    - expect: No unrelated object is returned.

#### 1.5. Filter the public list by repeated ID parameters

**File:** `tests/api_test/public-objects/filter-by-repeated-ids.spec.ts`

**Steps:**
  1. Send GET /objects?id=3&id=5&id=10.
    - expect: The response includes only objects whose IDs were requested and which exist in the public sample set.
    - expect: Each requested existing ID appears once; response ordering is not assumed unless separately documented.
    - expect: An ID query value is treated as a string.

#### 1.6. Filter with a mix of existing and unknown IDs

**File:** `tests/api_test/public-objects/filter-mixed-ids.spec.ts`

**Steps:**
  1. Send GET /objects?id=7&id=__missing_<unique-token>.
    - expect: The response is successful and contains only the matching existing object.
    - expect: The unknown ID does not cause unrelated objects to be returned or the request to fail with a server error.

#### 1.7. Handle unknown and malformed object IDs

**File:** `tests/api_test/public-objects/unknown-object-id.spec.ts`

**Steps:**
  1. Send GET /objects/__missing_<unique-token> and repeat with an encoded invalid path value and an excessively long ID.
    - expect: A missing resource returns a client-error response (prefer 404; the landing-page docs do not state an exact status) and never returns a different object as a success.
    - expect: Malformed path values produce a controlled client-error response, not a 5xx response or an unhandled server error.

#### 1.8. Handle empty and duplicate ID query values

**File:** `tests/api_test/public-objects/empty-id-query.spec.ts`

**Steps:**
  1. Send GET /objects?id=, GET /objects?id=%20, and GET /objects?id=7&id=7.
    - expect: Each response follows a consistent documented query-filter policy and never produces a 5xx response.
    - expect: Empty or whitespace IDs do not expose unrelated data.
    - expect: The current service preserves duplicate IDs in the filtered response; record this behavior because the landing-page docs do not specify duplicate handling.

### 2. Create Objects with POST

**Seed:** `No browser seed; each scenario creates and cleans up its own API object`

#### 2.1. Create an object with nested JSON data

**File:** `tests/api_test/public-objects/post-nested-object.spec.ts`

**Steps:**
  1. POST /objects with Content-Type: application/json and a unique name plus nested data containing strings, numbers, booleans, nulls, arrays, and nested objects.
    - expect: The response is successful (2xx) and contains a non-empty string id, the submitted name and data, and a parseable createdAt value when returned by the service.
    - expect: GET /objects/{id} returns the same persisted fields and ID.
    - expect: Delete only the newly created ID in guaranteed cleanup.

#### 2.2. Create objects with flexible JSON data values

**File:** `tests/api_test/public-objects/post-flexible-data.spec.ts`

**Steps:**
  1. As independent parameterized cases, POST uniquely named objects whose data is an array, null, string, number, and boolean, using Content-Type: application/json.
    - expect: Each valid JSON data value is accepted as allowed by the documented flexible-data contract and round-trips with its JSON type intact.
    - expect: Each successful case returns its own ID and is deleted in guaranteed cleanup.
    - expect: If the service intentionally limits top-level data values, record the precise documented constraint rather than coercing values silently.

#### 2.3. Create an object with a Unicode and punctuation name

**File:** `tests/api_test/public-objects/post-unicode-name.spec.ts`

**Steps:**
  1. POST a uniquely named object using non-ASCII characters, punctuation, and a valid data object.
    - expect: The request succeeds and the name is preserved exactly in the response and subsequent GET.
    - expect: The response remains valid JSON and the created record is removed in guaranteed cleanup.

#### 2.4. Reject a missing name or data field

**File:** `tests/api_test/public-objects/post-required-fields.spec.ts`

**Steps:**
  1. Independently POST a body with name omitted, then a body with data omitted.
    - expect: Each invalid request returns a client-error response (4xx); exact codes are not specified by the landing-page docs.
    - expect: No object is created for either rejected request.

#### 2.5. Reject invalid object names and top-level JSON bodies

**File:** `tests/api_test/public-objects/post-invalid-body.spec.ts`

**Steps:**
  1. POST bodies with an empty or whitespace-only name, a non-string name, an array or null instead of the top-level object, and an incorrectly typed data property.
    - expect: Invalid required-field types and invalid top-level shapes receive a controlled 4xx response rather than a 5xx.
    - expect: Rejected requests do not create or partially persist an object.
    - expect: The service does not silently coerce invalid name types into unrelated values.

#### 2.6. Validate POST content type and JSON syntax

**File:** `tests/api_test/public-objects/post-content-type-and-json.spec.ts`

**Steps:**
  1. POST a valid-looking body without Content-Type, with an unsupported Content-Type, with malformed JSON, and with an empty body.
    - expect: Missing or unsupported media type and invalid JSON are rejected with a controlled client error.
    - expect: No rejected request creates an object.
    - expect: The endpoint does not return an HTML error page or stack trace as a successful response.

### 3. Replace Objects with PUT

**Seed:** `No browser seed; each scenario creates and cleans up its own API object`

#### 3.1. Replace all fields of an existing object

**File:** `tests/api_test/public-objects/put-replace-object.spec.ts`

**Steps:**
  1. Create a uniquely named fixture with multiple data fields using POST; capture its returned ID.
    - expect: The fixture is created successfully and is owned by this test.
  2. PUT /objects/{id} with Content-Type: application/json and a new name and complete replacement data.
    - expect: The response is successful and returns the same ID with the replacement values.
    - expect: A follow-up GET shows the replacement is persisted and prior data keys omitted from the PUT body are no longer retained.
    - expect: Delete only the fixture ID in guaranteed cleanup.

#### 3.2. Replace object data with null

**File:** `tests/api_test/public-objects/put-null-data.spec.ts`

**Steps:**
  1. Create a uniquely named fixture, then PUT the same ID with a new name and data: null.
    - expect: The object remains at the same ID and the response and follow-up GET preserve data as JSON null.
    - expect: No stale object data remains.
    - expect: Delete only the fixture ID in guaranteed cleanup.

#### 3.3. Reject PUT for an unknown object ID

**File:** `tests/api_test/public-objects/put-unknown-id.spec.ts`

**Steps:**
  1. PUT a valid replacement body to a unique ID that does not exist.
    - expect: The request returns a client-error response (prefer 404; exact status is not specified by the landing-page docs).
    - expect: PUT does not create an object through implicit upsert, and no existing sample object is changed.

#### 3.4. Reject invalid PUT bodies and media types without changing data

**File:** `tests/api_test/public-objects/put-invalid-request.spec.ts`

**Steps:**
  1. Create a fixture and save its original representation. Independently try a malformed JSON body, a non-object body, missing required name, invalid field types, missing Content-Type, and unsupported Content-Type.
    - expect: Invalid requests return a controlled 4xx response, not a 5xx.
    - expect: A follow-up GET after each rejected request matches the original fixture exactly.
    - expect: Delete only the fixture ID in guaranteed cleanup.

### 4. Partially Update Objects with PATCH

**Seed:** `No browser seed; each scenario creates and cleans up its own API object`

#### 4.1. Patch only the object name

**File:** `tests/api_test/public-objects/patch-name-only.spec.ts`

**Steps:**
  1. Create a fixture with a name and several data fields; PATCH its ID with only a new name and Content-Type: application/json.
    - expect: The response and follow-up GET show the new name and unchanged ID.
    - expect: All omitted data fields remain unchanged.
    - expect: Delete only the fixture ID in guaranteed cleanup.

#### 4.2. Patch only the data field

**File:** `tests/api_test/public-objects/patch-data-only.spec.ts`

**Steps:**
  1. Create a fixture, then PATCH its ID with only a replacement data value.
    - expect: The object name and ID remain unchanged while the supplied data value is applied.
    - expect: Omitted top-level fields are not erased.
    - expect: Record whether nested data is merged or replaced; assert only the published contract once defined.
    - expect: Delete only the fixture ID in guaranteed cleanup.

#### 4.3. Patch explicit null, empty string, and empty object values

**File:** `tests/api_test/public-objects/patch-null-and-empty-values.spec.ts`

**Steps:**
  1. Create a fixture and PATCH individual fields to null, an empty string, an empty object, and an empty array in separate requests.
    - expect: Explicit values are preserved as supplied and are distinguishable from omitted fields, or are rejected consistently if the API contract forbids them.
    - expect: Fields not included in each PATCH remain unchanged.
    - expect: Delete only the fixture ID in guaranteed cleanup.

#### 4.4. Handle an empty PATCH body

**File:** `tests/api_test/public-objects/patch-empty-body.spec.ts`

**Steps:**
  1. Create a fixture, save its original representation, and PATCH it with an empty JSON object.
    - expect: The API follows one consistent policy: either a successful no-op with the object unchanged or a controlled 4xx validation response.
    - expect: The fixture is never corrupted or replaced with defaults.
    - expect: Delete only the fixture ID in guaranteed cleanup.

#### 4.5. Reject PATCH for an unknown object ID

**File:** `tests/api_test/public-objects/patch-unknown-id.spec.ts`

**Steps:**
  1. PATCH a valid partial body to a unique ID that does not exist.
    - expect: The request returns a client-error response (prefer 404; exact status is not specified by the landing-page docs).
    - expect: PATCH does not create an object through implicit upsert.

#### 4.6. Reject invalid PATCH bodies without modifying the object

**File:** `tests/api_test/public-objects/patch-invalid-request.spec.ts`

**Steps:**
  1. Create a fixture and save its representation. Independently PATCH with malformed JSON, a non-object body, an invalid name type, missing Content-Type, and unsupported Content-Type.
    - expect: Invalid requests produce controlled 4xx responses, not 5xx responses.
    - expect: After every rejected request, GET returns the original fixture unchanged.
    - expect: Delete only the fixture ID in guaranteed cleanup.

### 5. Delete Objects with DELETE

**Seed:** `No browser seed; each scenario creates and cleans up its own API object`

#### 5.1. Delete an object created by the test

**File:** `tests/api_test/public-objects/delete-created-object.spec.ts`

**Steps:**
  1. Create a uniquely named fixture and capture its returned ID.
    - expect: The object is created successfully and is owned by this test.
  2. DELETE /objects/{id} for that fixture.
    - expect: The response is successful (2xx) and confirms deletion in its JSON response when a message is returned.
    - expect: A follow-up GET for that ID returns a not-found/client-error response.
    - expect: A filtered list query no longer returns the deleted ID.

#### 5.2. Delete an unknown object ID

**File:** `tests/api_test/public-objects/delete-unknown-id.spec.ts`

**Steps:**
  1. DELETE a unique ID that does not exist.
    - expect: The service returns a controlled client-error or documented idempotent success; record the exact behavior because the landing-page docs do not specify it.
    - expect: No other object is removed and no 5xx response is returned.

#### 5.3. Repeat deletion of a test-owned object

**File:** `tests/api_test/public-objects/delete-twice.spec.ts`

**Steps:**
  1. Create and delete a unique fixture, then send DELETE for the same ID a second time.
    - expect: The second request follows a consistent documented idempotency/not-found policy.
    - expect: GET continues to report the object absent, and no unrelated record changes.
    - expect: Never run this test against one of the shared sample IDs.

### 6. Public API Transport and Contract

**Seed:** `No browser seed; use only public API requests and test-owned objects`

#### 6.1. Exercise public CRUD without authorization credentials

**File:** `tests/api_test/public-objects/crud-without-auth.spec.ts`

**Steps:**
  1. Without an Authorization header, GET the public list, POST a unique object, GET it by ID, PUT it, PATCH it, and DELETE it; use only the created object for mutations.
    - expect: Every documented public endpoint is accessible without authentication.
    - expect: Each operation follows its method-specific response and persistence behavior.
    - expect: The final GET confirms deletion; no shared sample record is modified.

#### 6.2. Use HTTPS for public API requests

**File:** `tests/api_test/public-objects/https-only.spec.ts`

**Steps:**
  1. Send representative read and write requests over the documented HTTPS base URL. Separately attempt the same safe GET over HTTP without credentials or request body.
    - expect: HTTPS requests complete normally with valid TLS and no mixed-scheme redirect loop.
    - expect: Cleartext HTTP is redirected to HTTPS or rejected; it must not return API data over an unencrypted connection. The current service was observed returning HTTP 200 over cleartext, so this assertion records a live contract/security failure.

#### 6.3. Validate CORS preflight for public CRUD methods

**File:** `tests/api_test/public-objects/cors-preflight.spec.ts`

**Steps:**
  1. Send OPTIONS preflight requests from an unrelated test origin for GET, POST, PUT, PATCH, and DELETE, requesting Content-Type where applicable.
    - expect: The response permits the documented cross-origin use and includes an appropriate Access-Control-Allow-Origin value.
    - expect: Allowed methods include the requested public methods; Content-Type is permitted for JSON writes.
    - expect: Preflight does not create, update, or delete an object.

#### 6.4. Validate response content types and unsupported methods

**File:** `tests/api_test/public-objects/response-contract.spec.ts`

**Steps:**
  1. Check response headers and JSON parsing for successful GET and write operations, then send an unsupported method such as TRACE to a test-owned object path.
    - expect: Successful API responses use a JSON media type and valid JSON matching the documented object/array shapes.
    - expect: The unsupported method is rejected with a non-success response and does not change the object.
    - expect: No response exposes an internal stack trace or returns a success-shaped fallback for a failed operation.
