---
title: Integrations

---


### <img src="/img/GitHub_Logo.png" alt="GitHub" width="200"/>

TestQuality extends your Github DevOps workflow to provide powerful and modern GitHub issue powered test case creation and management. TestQuality is FREE for GitHub public repo’s and affordable for teams on private repo's.

**Live 2-way Integration Keeps Your Teams and Tools in Sync. Always.**
Change the priority of a defect in TestQuality and the priority is always current in GitHub and vice versa.

Seamless test workflows and defect coverage analysis
Your GitHub workflows are transparently extended with test management capabilities so you never need to leave your workflows.


### <img src="/img/jira_logo.png" alt="JIRA" width="200"/>

Test Management dashboards in JIRA provide for easy access and to promote knowledge of your testing effort. Including test quality analysis to help you determine test value, trouble tests, coverage, and more.


## Continuous Integration

If you are using a CI platform such as Jenkins, Cloudbees, Circle CI, Travis CI and want to upload your test results, you can add TestQuality to your scripts.

To connect via command line, you can use the command files from http://cli.testquality.com/ then using the file from your system, log in with username and password, or we can provide you with a personal access token so you do not have to provide your login details in the command.

### Personal Access Token
In the Integrations section of the settings menu you can create yourself a token.

Click on your username in the top right of any page.

Choose Integrations ![img_3.png](img_3.png)

The Integrations section will open within the settings menu.

On the right of the main window, you can choose to add a new Personal Access Token from the menu.

Click on the '+' sign in the Personal Access Token section.

Choose a name for your token. Click 'Create'.

![img_1.png](img_1.png)

## TestQuality CLI

To integrate your tests you can use the TestQuality CLI and an access token to authenticate your test system and push your results.

Not only can you push results to your projects, but with the commands available you can also get information about your projects.

The commands and options that are available are listed below:

**Commands:**

`testquality login  <userame> <password>`  &nbsp;&nbsp; Login to TestQuality

`testquality projects   `                 &nbsp;&nbsp; List projects TestQuality

`testquality plans  `                     &nbsp;&nbsp; List plans in project.

`testquality milestones  `               &nbsp;&nbsp;  List milestones in project.

`testquality upload_test_run <xmlfiles> `&nbsp;&nbsp;  Login to TestQuality

`testquality restore `                  &nbsp;&nbsp;   Restore plan or test.

|   Option    	|Description     	|
|---	|---	|
|--version   	|Show help     	|
|--verbose, -v   	|Show version number   	|
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



To get information on your projects and plans is really easy using the command line. 

For example, to get a list of Projects in your TestQuality site, you can use the following command:

`testquality-macos projects`

This will list your projects with their ID, Key and Name. ![img.png](img.png)

Then you might want to list the Test Plans that are in your project, you can use the following command where you add the ID number of the project in the command (shown here as XXX):

`testquality-macos plans --project_id=XXX`

To use a Personal Access Token, you can add it right in to the command. 

`testquality-macos plans --project_id=XXX -at="ey78x2y39229d3998....... (really long token code)!`


