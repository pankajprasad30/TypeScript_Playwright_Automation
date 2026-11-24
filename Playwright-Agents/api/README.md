# Public API automation

The RESTful API POM, manager, and test fixture live in this project:

- `api/common/`: shared request base and API page manager
- `api/api_actions/`: RESTful public endpoint actions
- `fixtures/apiFixture.ts`: API request fixture
- `testdata/restfulApiData.ts`: public API URL and JSON headers
- `tests/api_test/public-objects/`: public endpoint scenarios

From `Playwright-Agents`, list the tests with:

```powershell
npx playwright test tests/api_test/public-objects --project=api --list
```

Run the API suite with:

```powershell
npx playwright test tests/api_test/public-objects --project=api
```

The API project runs separately from the browser projects and uses one worker. The public service enforces an unauthenticated daily request limit; the complete live suite exceeds it, so run it in batches across quota windows or with the provider's higher-quota account configuration where available.
