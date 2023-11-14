---
title: CLI Reference

---
## Command Reference

`testquality login  <userame> <password>`  &nbsp;&nbsp; Login to TestQuality

`testquality projects   `                 &nbsp;&nbsp; List projects TestQuality

`testquality plans  `                     &nbsp;&nbsp; List plans in project.

`testquality plan_suite  `                     &nbsp;&nbsp; List plan-folder relationships in project.

`testquality suites  `               &nbsp;&nbsp;  List folders in project.

`testquality suite_test  `               &nbsp;&nbsp;  List folder-test relationships in project.

`testquality milestones  `               &nbsp;&nbsp;  List milestones in project.

`testquality upload_test_run <xmlfiles> `&nbsp;&nbsp;  Login to TestQuality

`testquality upload_csv <files> `                  &nbsp;&nbsp;   CSV files upload.

`testquality upload_feature <files> `                  &nbsp;&nbsp;   Gherkin feature files upload.

`testquality requirements `                  &nbsp;&nbsp;   List requirements and related tests in a project.

`testquality restore `                  &nbsp;&nbsp;   Restore plan or test.

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


