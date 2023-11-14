---
title: TestQuality CLI

---
## Introduction

The TestQuality CLI is a robust, open-source command-line tool designed to streamline your testing workflows with TestQuality projects. 

It enables you to upload automated test results in JUnit XML format, with support for attachments and related defects using test name tags or console outputs.

You can find the open-source CLI tool on GitHub here: https://github.com/BitModern/testQualityCli


### Why Use the TestQuality CLI?

Managing testing projects efficiently is a crucial aspect of software development and quality assurance. The TestQuality CLI empowers you to:

**Access Projects:** Quickly retrieve essential information about your testing projects.

**Automate Tasks:** Automate repetitive tasks, such as uploading test run results and managing test cases.

**Integrate with CI/CD:** Seamlessly integrate the CLI into your Continuous Integration and Continuous Deployment (CI/CD) pipelines for efficient testing.

**Enhance Collaboration:** Collaborate with your team by easily accessing and sharing testing data.

**Open Source:** Contribute to an open-source project that welcomes community involvement and contributions.


## Install and Configuration

### Download

To start using the TestQuality CLI, download it either from http://cli.testquality.com/ or by using the following wget command:

`wget http://cli.testquality.com/testquality-linux -O testquality`

### Permissions

After downloading the CLI tool, it's recommended to place the tool file inside your project's folder. Once the CLI tool is in place, grant the necessary permissions to execute it using the following command:

`chmod 777 <FILE_NAME>`

## Authentication

You can authenticate by login or Personal Access Token.

### Login

To authenticate using 'login', use the following command:

`testquality-macos login larry@bitmodern.com *password* --save`

### Personal Access Token (PAT)

A Personal Access Token (PAT) is crucial for secure authentication with TestQuality and efficient use of the CLI tool. This long-lived token is versatile, making it suitable for personal use and integration in CI pipelines. It simplifies repetitive tasks and can be utilized seamlessly with both the API and CLI. 

**Warning:** Please ensure the security of your PAT, as it grants access to your TestQuality account.

#### Creating a PAT

To create a Personal Access Token (PAT), follow these steps:

1. Click on your username in the top right corner of any page within your TestQuality account.
2. Choose "Integrations" from the dropdown menu.
3. In the Personal Access Token section, click the '+' sign to create a new token.
4. Provide a name for your token and click 'Create.'

If you already have a PAT, you can skip this section and proceed to add it to your project and use it for authentication.

#### Adding your PAT

To add your PAT to the project, follow these steps:

1. Locate and edit the .testquality file in your project folder.
2. Within the .testquality file, add your PAT as follows:

`TQ_ACCESS_TOKEN=<VERY-LONG-PERSONAL-ACCESS-TOKEN>`

#### Using your PAT

Once you've added your PAT, you can easily use it for authentication in CLI commands. For example:

To list plans for a specific project:

`testquality plans --project_id=XXX --access_token=”ey78x2y39229d3998....... (your token code)”"
`

To initiate a test run:

`./testquality-macos runs --access_token=”ey78x2y39229d3998....... (your token code)”`

--save will automatically add the token to the .testquality file, eliminating the need to include it as a parameter.

`./testquality-macos runs --access_token=... --save`

This command incorporates your PAT for authentication and allows you to interact with TestQuality seamlessly.

## Upload run results

1. Use the upload_test_run CLI command and specify the file you want to upload.
2. State the name of the project (ensure it's already created).
3. Optionally, specify the cycle name; if it doesn't exist, a new one will be created for you.

`./testquality upload_test_run 'results/<RUN-RESULT-FILE-NAME>.xml' --project_name=project --plan_name=cycle`

## Restore a suite

To restore a test suite (folder), follow these steps:

1. Login
2. List suites that have been deleted

`testquality-macos suites --revision_log -p _sort=-updated_at -p operation=delete`

3. Find associated plans

`testquality-macos plan_suite --revision_log -p _sort=-updated_at -p operation=delete -p suite_id=105923`

4. Restore

`testquality-macos restore --suite_id 105923 --plan_id 17452`

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


