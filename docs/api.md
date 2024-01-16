---
title: Using the API

---
## Authentication
Obtain a Personal Access Token (PAT) using the [PAT generator](api_cli#edit-project-integration) on the [Integrations](administration/integration_config) page in the app's configuration section.

## Projects
### Fetch a List of Projects
**Request:**

```bash 
curl -X GET -H "Authorization: Bearer <PAT>" -H "Accept: application/json" https://api.testquality.com/api/project 
```

**Response:**

```json
{
"current_page": 1,
"data": [
{
"id": 12080,
"created_by": 171,
"updated_by": 171,
"epoch": 0,
"name": "TestQuality Tour",
"description": "The project for the TestQuality Tour",
"access_role_id": 259,
"client_id": 3,
"color": null,
"picture": null,
"virtual": null,
"key": 22,
"created_at": "2025-03-30T22:16:32.609000+00:00",
"updated_at": "2017-04-01T22:16:32.609000+00:00",
"metadata_model": "Project",
"analysis": {
"todo": null
}
}
],
"first_page_url": "http:\\/\\/api.testquality.com\\/api\\/project?page=1",
"from": 1,
"last_page": 3,
"last_page_url": "http:\\/\\/api.testquality.com\\/api\\/project?page=3",
"next_page_url": "http:\\/\\/api.testquality.com\\/api\\/project?page=2",
"path": "http:\\/\\/api.testquality.com\\/api\\/project",
"per_page": 15,
"prev_page_url": null,
"to": 15,
"total": 31
}
```

**Note:** The `id` field in the response represents the project ID and will be used later for other actions.

## Folders
### Fetch a Folder/Suite

**Request:**

```bash
curl -X GET -H "Authorization: Bearer <PAT>" -H "Accept: application/json" https://api.testquality.com/api/suite\?project_id\=12080
```

**Note:** Use the `project_id` obtained from the previous response.

*Tip:* Choose from an existing folder or create a new one. The root folder has a property `is_root=true` , which can also be included as a query parameter.


**Response:**

```json
{
"current_page": 1,
"data": [
{
"id": 104181,
"created_by": 171,
"updated_by": 15416,
"epoch": 1,
"name": "Default",
"description": null,
"project_id": 12080,
"virtual": null,
"client_id": 3,
"assigned_to_tester": null,
"key": 544,
"created_at": "2021-04-21T14:21:46.305000+00:00",
"updated_at": "2021-05-06T08:48:27.478000+00:00",
"is_root": true,
"metadata_model": "Suite"
}
],
"first_page_url": "http:\\/\\/api.testquality.com\\/api\\/suite?project_id=12080&is_root=true&page=1",
"from": 1,
"last_page": 1,
"last_page_url": "http:\\/\\/api.testquality.com\\/api\\/suite?project_id=12080&is_root=true&page=1",
"next_page_url": null,
"path": "http:\\/\\/api.testquality.com\\/api\\/suite",
"per_page": 15,
"prev_page_url": null,
"to": 1,
"total": 1
}
```
## Plans
### Fetch the Root Plan

To create a folder, knowing the root plan is essential.

To fetch the root plan:

**Request:**

```bash
curl -X GET -H "Authorization: Bearer <PAT>" -H "Accept: application/json" https://api.testquality.com/api/plan\?project_id\=12080\&is_root\=true
```

**Response:**

```json
{
"current_page": 1,
"data": [
{
"id": 20321,
"created_by": 171,
"updated_by": 171,
"epoch": 0,
"project_id": 12080,
"assigned_to_tester": null,
"virtual": null,
"name": "All tests",
"description": null,
"client_id": 3,
"key": 89,
"retain_runs": 0,
"created_at": "2021-04-21T14:21:46.279000+00:00",
"updated_at": "2021-04-21T14:21:46.279000+00:00",
"is_root": true,
"metadata_model": "Plan",
"analysis": {
"plan_id": 20321,
"requirement_count": 1,
"defect_count": 0
}
}
],
"first_page_url": "http:\\/\\/api.testquality.com\\/api\\/plan?project_id=12080&is_root=true&page=1",
"from": 1,
"last_page": 1,
"last_page_url": "http:\\/\\/api.testquality.com\\/api\\/plan?project_id=12080&is_root=true&page=1",
"next_page_url": null,
"path": "http:\\/\\/api.testquality.com\\/api\\/plan",
"per_page": 15,
"prev_page_url": null,
"to": 1,
"total": 1
}
```

**Remember:** Note down the `id` (e.g., 20321) for future use.

### Create a Folder

Use POST to create a new folder. 

**Request:**

```bash
curl -X POST -H "Authorization: Bearer <PAT>" -H "Accept: application/json" -H "Content-Type: application/json" -d '{"name":"my folder","plan_id": 20321,"plan_suite":{"parent_id":104181,"sequence_plan":1},"project_id":12080}' https://api.testquality.com/api/suite

```
**Note:**
- `parent_id` is the ID of the root folder/suite.
- `plan_id` is from the root plan.
- `sequence_plan` controls the positioning in the list and is optional.


**Response:**

```json
{
"id": 115680,
"created_by": 171,
"updated_by": 171,
"epoch": 0,
"name": "my folder",
"description": null,
"project_id": 12080,
"virtual": null,
"client_id": 3,
"assigned_to_tester": null,
"key": 1241,
"created_at": "2022-02-01T22:16:52.735000+00:00",
"updated_at": "2022-02-01T22:16:52.735000+00:00",
"is_root": false,
"metadata_model": "Suite",
"sequence_plan": 1
}
```

### Update a Folder

**Note:** To update this folder/suite, use PUT with the id in the URL path.

**Request:**

```bash
curl -X PUT -H "Authorization: Bearer <PAT>" -H "Accept: application/json" -H "Content-Type: application/json" -d '{"name":"new folder name"}' https://api.testquality.com/api/suite/115680
```
## Tests
### Fetch a List of Tests

**Request:**

```bash
curl -X GET -H "Authorization: Bearer <PAT>" -H "Accept: application/json" https://api.testquality.com/api/test\?project_id\=12080
```

**Note:** The `project_id` is taken from above.

### Create a Test

To create a test, two POST requests are required. One to create the test and a second or possibly more to create steps.

**Request:**

```bash
curl -X POST -H "Authorization: Bearer <PAT>" -H "Accept: application/json" -H "Content-Type: application/json" -d '{"name":"my test","precondition":"","project_id":12080,"suite_id":115680,"is_automated":false}' https://api.testquality.com/api/test
```

**Note:** The `suite_id`  is the ID of the folder/suite created earlier.

**Response:**

```json
{
"id": 325974,
"created_by": 171,
"updated_by": 171,
"epoch": 0,
"name": "my test",
"case_type_id": 372,
"case_priority_id": 233,
"estimate": null,
"precondition": "",
"virtual": null,
"client_id": 3,
"project_id": 12080,
"assigned_to_tester": null,
"is_automated": false,
"description": null,
"key": 5117,
"test_quality_id": 326,
"state_mask": null,
"created_at": "2022-02-02T14:21:40.190000+00:00",
"updated_at": "2022-02-02T14:21:40.190000+00:00",
"test_type_id": 4116,
"data_table": null,
"metadata_model": "Test",
"sequence_suite": 1
}
```
### Create a Step in a Test

To create a step in the test, use the ID from the test just created.

**Request:**

```bash
curl -X POST -H "Authorization: Bearer <PAT>" -H "Accept: application/json" -H "Accept: application/json" -H "Content-Type: application/json" -d '{"step":"my step","expected_result":"The result","sequence":1,"project_id":12080,"test_id":325974}' https://api.testquality.com/api/step
```


**Note:** The `test_id` is the ID of the test created earlier.

**Response:**

```json
{
"id": 537546,
"created_by": 171,
"updated_by": 171,
"epoch": 0,
"test_id": 325974,
"step": "my step",
"expected_result": "The result",
"virtual": null,
"client_id": 3,
"project_id": 12080,
"sequence": 1,
"key": 9983,
"created_at": "2022-02-02T14:26:40.958000+00:00",
"updated_at": "2022-02-02T14:26:40.958000+00:00",
"step_type_id": null,
"metadata_model": "Step"
}
```
**Note:** Take note of the sequence of the step. Additional steps can be added using POST, but increment the sequence to maintain order.

### Update a Test

To update a test (or step), use PUT with the id in the URL path.

**Request:**

```bash
curl -X PUT -H "Authorization: Bearer <PAT>" -H "Accept: application/json" -H "Content-Type: application/json" -d '{"precondition":"setup"}' https://api.testquality.com/api/test/325974
```
**Response:**

```json
{
"id": 325974,
"created_by": 171,
"updated_by": 171,
"epoch": 1,
"name": "my test",
"case_type_id": 372,
"case_priority_id": 233,
"estimate": null,
"precondition": "setup",
"virtual": null,
"client_id": 3,
"project_id": 12080,
"assigned_to_tester": null,
"is_automated": false,
"description": null,
"key": 5117,
"test_quality_id": 326,
"state_mask": null,
"created_at": "2022-02-02T14:21:40.190000+00:00",
"updated_at": "2022-02-02T14:31:02.659000+00:00",
"test_type_id": 4116,
"data_table": null,
"metadata_model": "Test"
}
```
