---
title: CLI Reference

---
## Command Reference

| Command                                      | Description                                    |
|----------------------------------------------|------------------------------------------------|
| **Login**                                    |                                                |
| `testquality login <username> <password>`    | Log in to TestQuality                           |
| **Projects**                                 |                                                |
| `testquality projects`                       | List projects in TestQuality                    |
| **Plans**                                    |                                                |
| `testquality plans`                          | List plans in a project                        |
| **Plan-Suite Relationships**                 |                                                |
| `testquality plan_suite`                     | List plan-folder relationships in a project    |
| **Suites (Folders)**                         |                                                |
| `testquality suites`                         | List folders in a project                      |
| **Suite-Test Relationships**                 |                                                |
| `testquality suite_test`                     | List folder-test relationships in a project    |
| **Milestones**                               |                                                |
| `testquality milestones`                     | List milestones in a project                   |
| **Upload Data**                              |                                                |
| `testquality upload_test_run <xmlfiles>`     | Upload test run data to TestQuality            |
| `testquality upload_csv <files>`             | Upload CSV files                               |
| `testquality upload_feature <files>`         | Upload Gherkin feature files                   |
| **Requirements**                             |                                                |
| `testquality requirements`                   | List requirements and related tests in a project |
| **Restore**                                  |                                                |
| `testquality restore`                        | Restore a plan or test                         |


## Options


These options allow you to customize the behavior of the TestQuality CLI according to your specific needs.


|   Option    	|Description     	|
|---	|---	|
|--help   	|Show help     	|
|--version   	|Show version number     	|
|--verbose, -v   	|boolean (default: false)   	|
|--save, -s   	|Save tokens for future use   	|
|--username, -u   	|User name you login as   	|
|--access_token, --at   	|Access Token   	|
|--expires_at, --ea   	|Access Token Expires at Unix Epoch   	|
|--refresh_token, --rt   	|Refresh Token   	|
|--project_id, -i   	|Project Id   	|
|--project_name, -n   	|Project Name   	|
|--milestone_id, --mi   	|Milestone ID   	|
|--milestone_name, --mn   	|Milestone Name   	|
|--plan_id, --pi   	|Plan ID   	|
|--plan_name, --pn   	|Plan Name   	|



