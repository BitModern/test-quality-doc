---
title: Using the API

---
## Authentication

Obtain a Personal Access Token (PAT), using the [PAT generator](api_cli#edit-project-integration) in the [integrations](administration/integration_config) page in the configuration section of the app.

### Fetch a list of projects
Request:

```bash 
curl -X GET -H "Authorization: Bearer <PAT>" -H "Accept: application/json" https://api.testquality.com/api/project 
```

Response:

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

In the response the “id” field of the project is shown, this will be used as project_id later for other actions we want to make.

## Fetch a folder/suite

Request:

```bash
curl -X GET -H "Authorization: Bearer <PAT>" -H "Accept: application/json" https://api.testquality.com/api/suite\?project_id\=12080
```

**Note:** the project_id is taken from the previous response.

You can choose from an existing folder or create one. The root folder has a property is_root=true, which can also be included as a query parameter.

Response:

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
## Fetch the root plan

In order to create a folder you need to know the root plan.

To fetch the root plan:

Request:

```bash
curl -X GET -H "Authorization: Bearer <PAT>" -H "Accept: application/json" https://api.testquality.com/api/plan\?project_id\=12080\&is_root\=true
```

Response: 

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

**Note:** Make sure to note the id. 20321

## Create a folder

To create a folder a POST is used. 

Request: 

```bash
curl -X POST -H "Authorization: Bearer <PAT>" -H "Accept: application/json" -H "Content-Type: application/json" -d '{"name":"my folder","plan_id": 20321,"plan_suite":{"parent_id":104181,"sequence_plan":1},"project_id":12080}' https://api.testquality.com/api/suite

```
**Note:** The parent_id is the id to the root folder/suite above. Plan_id is from the root plan. Sequence_plan is optional, however can control positioning in the list.

Response: 

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

## Update a folder

**Note:** To update this folder/suite, a PUT is used and the id is in the URL path.

Request: 

```bash
curl -X PUT -H "Authorization: Bearer <PAT>" -H "Accept: application/json" -H "Content-Type: application/json" -d '{"name":"new folder name"}' https://api.testquality.com/api/suite/115680
```
## Fetch a list of tests

Request:

```bash
curl -X GET -H "Authorization: Bearer <PAT>" -H "Accept: application/json" https://api.testquality.com/api/test\?project_id\=12080
```

**Note:** The project_id is taken from above.

## Create a test

To create a test, two posts are required. One to create the test and a second or possibly more to create steps.

Request:

```bash
curl -X POST -H "Authorization: Bearer <PAT>" -H "Accept: application/json" -H "Content-Type: application/json" -d '{"name":"my test","precondition":"","project_id":12080,"suite_id":115680,"is_automated":false}' https://api.testquality.com/api/test
```

**Note:** The suite_id is the id of the folder/suite we created above.

Response:

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
## Create a step in a test

To create the step in the test, use the id from the test we just created.

Request: 

```bash
curl -X POST -H "Authorization: Bearer <PAT>" -H "Accept: application/json" -H "Accept: application/json" -H "Content-Type: application/json" -d '{"step":"my step","expected_result":"The result","sequence":1,"project_id":12080,"test_id":325974}' https://api.testquality.com/api/step
```


**Note:** The test_id is the id of the test we created above.

Response: 

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
**Note:** Please Note the sequence of the step, more steps can be added using POST, however increment sequence to maintain order.

## Update a test

To update a test (or step), a PUT is used, and the id is in the URL path.

Request:

```bash
curl -X PUT -H "Authorization: Bearer <PAT>" -H "Accept: application/json" -H "Content-Type: application/json" -d '{"precondition":"setup"}' https://api.testquality.com/api/test/325974
```
Response:

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

