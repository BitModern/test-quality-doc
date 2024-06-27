---
title: Nightwatch.js 
---

[Nightwatch.js](https://nightwatchjs.org/) is a powerful end-to-end testing framework for web applications. By integrating Nightwatch.js with TestQuality, you can effectively manage, organize, and report your Nightwatch.js test results. This guide will walk you through the steps to set up this integration.

### Prerequisites

Before you begin, ensure you have the following prerequisites in place:

1. **Nightwatch.js Tests**: Prepare your Nightwatch.js tests using JavaScript and have them ready for execution.

2. **TestQuality Account**: Sign up for a TestQuality account if you don't have one already. You will need this account to configure the integration.

### Step 1: Export Nightwatch.js Run Results to JUnit XML

To upload a run to TestQuality, ensure it's in a standard format like the JUnit XML report format. 

To achieve that, customize your Nightwatch.js configuration file (usually `nightwatch.conf.js`) as follows:

```javascript
module.exports = {
  // Other Nightwatch.js configurations...
  
  test_settings: {
    default: {
      // Other test settings...
      output_folder: 'results',
      custom_assertions_path: [],
      live_output: false,
      disable_colors: false,
      reporter: 'junit',
      junit: {
        enabled: true,
        output_folder: 'results',
        file_name_format: function (/* testResult */) {
          return 'test-results';
        },
      },
    },
  },
};
```

The results will be generated in JUnit format and saved within the `./results` directory, with each file named according to a timestamp-based format.

For more details about the available options, check out [Nightwatch.js documentation](https://nightwatchjs.org/guide/reporters/use-junit-reporter.html).

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


After executing this command, your Nightwatch.js test results will be uploaded to TestQuality for further management and reporting.

### Step 6: View and Manage Test Results in TestQuality

Log in to your TestQuality account to view, organize, and report your Nightwatch.js test results. TestQuality provides a user-friendly interface for tracking and collaborating on test results, simplifying the management of your testing efforts.

Congratulations! You have successfully integrated Nightwatch.js with TestQuality, enhancing your web application testing and test result management capabilities.
