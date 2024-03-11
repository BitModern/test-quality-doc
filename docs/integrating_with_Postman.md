---
title: Postman 
---

[Postman](https://www.postman.com/) is a popular tool used for API testing and development. By integrating Postman with TestQuality, you can seamlessly manage and report your API test results. This guide will walk you through the steps to set up this integration.

### Prerequisites

Before you begin, ensure you have the following prerequisites in place:

1. **Postman Collection**: Prepare your API tests using Postman and have them saved as a collection.

2. **TestQuality Account**: Sign up for a TestQuality account if you don't have one. You will need this account to configure the integration.

### Step 1: Generate JUnit-Style XML Files with Newman or Export Test Results from Postman

When integrating Postman with TestQuality, you have two approaches for generating JUnit-style XML files: using Newman, the command-line collection runner for Postman, or exporting test results directly from the Postman application interface.

#### Approach 1: Generate JUnit-Style XML Files with Newman

Newman is the command-line collection runner for Postman, allowing you to execute Postman collections directly from the command line. Follow these steps to generate JUnit-style XML files with Newman:

**Step 1: Install Newman**
If you haven't already, install Newman globally using npm:

```bash
npm install -g newman
```

**Step 2: Run Postman Collection with Newman**
Execute your Postman collection using Newman and specify the JUnit reporter to generate the XML report:

```bash

newman run collection.json -r cli,junit --reporter-junit-export results/test-results.xml
```

This command will run your tests with Postman using Newman and automatically generate the results in JUnit format, saving them as `./results/test-results.xml`.

For more details about Newman and its command-line options, refer to the [Newman documentation](https://github.com/postmanlabs/newman#junitxml-reporter).

#### Approach 2: Export Test Results from Postman

Postman itself provides the capability to export test results in JUnit XML format directly from the application. Here's how you can do it:

**Step 1: Execute Postman Collection**
Execute your Postman collection within the Postman application as you normally would.

**Step 2: Export Test Results**
After executing the collection, navigate to the collection runner's results by clicking on the "..." icon next to the collection name in the left sidebar. From there, you can export the test results in JUnit XML format directly from the interface.

This approach gives you more control over the test execution process and allows you to export the results manually from the Postman application.

### Step 2: Download the TestQuality CLI Tool

Download the TestQuality CLI tool from [http://cli.testquality.com/](http://cli.testquality.com/).

For additional details, refer to the [CLI documentation](testquality_cli).

### Step 3: Set Permissions

To simplify the process, place the CLI tool file inside your repository's folder. Then, navigate to the folder using your console and grant permissions with the following command:

```bash
chmod 777 <FILE-NAME>
```
### Step 4: Add Personal Access Token (PAT)

To enable CLI-based run result uploads, authentication is required. Use the Personal Access Token (PAT) option:

1. Add your PAT to the `.testquality` file within your project.
2. Use the variable name `TQ_ACCESS_TOKEN`.
3. Format your `.testquality` file as follows:

```plaintext
TQ_ACCESS_TOKEN=<VERY-LONG-PERSONAL-ACCESS-TOKEN>
```
### Step 5: Upload Run Results to TestQuality

You are now ready to use the CLI tool from the console. Execute the following command, specifying the file you want to upload, the project name (which should already be created in TestQuality), and the cycle name (a new one will be created for you if it doesn't exist):

```bash

./testquality upload_test_run 'results/<RUN-RESULT-FILE-NAME>.xml' --project_name=project --plan_name=cycle
```
- Replace `<RUN-RESULT-FILE-NAME>` with the actual name of your run result file.
- Replace `project` with your TestQuality project name.
- Replace `cycle` with the name of the test cycle in TestQuality.


After executing this command, your Postman test results will be uploaded to TestQuality for further management and reporting.

### Step 6: View and Manage Test Results in TestQuality

Log in to your TestQuality account to view, organize, and report your Postman test results. TestQuality provides a user-friendly interface for tracking and collaborating on test results, simplifying the management of your testing efforts.

Congratulations! You have successfully integrated Postman with TestQuality, enhancing your web application testing and test result management capabilities.
