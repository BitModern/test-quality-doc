---
title: Integrating with Playwright
---

Playwright is a powerful end-to-end testing framework for web applications. By integrating Playwright with TestQuality, you can seamlessly manage, organize, and report your Playwright test results. This guide will walk you through the steps to set up this integration.

### Prerequisites

Before you begin, ensure you have the following prerequisites in place:

1. **Playwright Project**: Set up a Playwright project and have your Playwright tests ready for execution.

2. **TestQuality Account**: Sign up for a TestQuality account if you don't have one already. You will need this account to configure the integration.

### Step 1: Install TestQuality CLI

To start using the TestQuality CLI, download it from [http://cli.testquality.com/](http://cli.testquality.com/) or by using the following wget command:

`wget http://cli.testquality.com/testquality-linux -O testquality`


```bash
wget http://cli.testquality.com/testquality-linux -O testquality
```

For additional details, refer to the [CLI documentation](testquality_cli).

### Step 2: Configure TestQuality

Before uploading Playwright test results, configure the TestQuality CLI with your account details:

1. Log in to your TestQuality account.

2. Go to your TestQuality project where you want to upload Playwright test results.

3. Click on your profile icon in the top-right corner and select "Integrations."

4. Scroll down to the "Personal Access Token" section and generate a Personal Access Token (PAT) if you haven't already. This token will be used for authentication.

5. In your terminal or command prompt, run the following command to configure the TestQuality CLI with your PAT:

```bash
tq config --accessToken YOUR_PERSONAL_ACCESS_TOKEN
```
### Step 3: Customize Playwright Configuration

Customize your Playwright configuration to generate JUnit XML report files, the format expected by TestQuality:

1. Locate your Playwright configuration file (usually named `playwright.config.js` or `playwright.config.ts`).

2. Update your configuration as shown below:

```bash
module.exports = {
  projects: [
    {
      name: 'project-name',
      use: { ... }, // Other Playwright configurations
      reporter: [['junit', { outputFile: 'path/to/results/[hash]-results.xml' }]],
    },
  ],
};
```

- Replace 'project-name' with your desired project name.
- Adjust the outputFile path to specify where your JUnit XML results will be saved.

Refer to the Playwright documentation for [other reporter options](https://playwright.dev/docs/test-reporters) .

### Step 4: Run Playwright Tests

Execute your Playwright tests with the updated configuration. This will generate JUnit XML test result files in the specified location.

### Step 5: Upload Test Results to TestQuality

Once your Playwright tests have been executed, upload the test results to TestQuality using the CLI:

```bash
testquality upload_test_run 'path/to/results/[hash]-results.xml' --project_name=project-name --plan_name=cycle-name
```
- Replace 'path/to/results/[hash]-results.xml' with the actual path to your JUnit XML result file.

- Replace 'project-name' with your TestQuality project name.

- Replace 'cycle-name' with the name of your test cycle in TestQuality.

### Step 6: View and Manage Test Results in TestQuality

After uploading the test results, log in to your TestQuality account to view and manage your Playwright test results. TestQuality provides features for organizing, reporting, and collaborating on test results, simplifying the tracking of your testing efforts.

Congratulations! You have successfully integrated Playwright with TestQuality, enhancing your web application testing and test result management capabilities.