---
title: Integrating with Jest 
---

Jest is a popular JavaScript testing framework, and by integrating Jest with TestQuality, you can effectively manage, organize, and report your Jest test results. This guide will walk you through the steps to set up this integration.

### Prerequisites

Before you begin, ensure you have the following prerequisites in place:

1. **Jest Tests**: Prepare your Jest tests and have them ready for execution.

2. **TestQuality Account**: Sign up for a TestQuality account if you don't have one. You will need this account to configure the integration.

### Step 1: Export Your Jest Run Results to JUnit XML

To upload a run to TestQuality in the required JUnit XML format, you'll need to set up a custom reporter for Jest. You can find the reporter here: [Jest JUnit Reporter](https://github.com/jest-community/jest-junit).

To configure Jest to use this reporter, add it to the `reporters` array in your configuration file. Please note that adding reporters will replace the default Jest reporter. To keep using it, include it using the `default` value.

Here are examples in TypeScript and JSON:

**TypeScript File Example:**

```typescript
import type { Config } from 'jest';

const config: Config = {
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'reports', outputName: 'report.xml' }],
  ],
};

export default config;
```

**jest.config.json File Example:**

```json
{
  "reporters": [
    "default",
    ["jest-junit", { "outputDirectory": "reports", "outputName": "report.xml" }]
  ]
}
```
This configuration will generate the `.xml` file needed to upload to TestQuality.

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

After executing this command, your Jest test results will be uploaded to TestQuality for further management and reporting.

### Step 6: View and Manage Test Results in TestQuality

Log in to your TestQuality account to view, organize, and report your Jest test results. TestQuality provides features for organizing, reporting, and collaborating on test results, simplifying the tracking of your testing efforts.

Congratulations! You have successfully integrated Jest with TestQuality, enhancing your JavaScript testing and test result management capabilities.
