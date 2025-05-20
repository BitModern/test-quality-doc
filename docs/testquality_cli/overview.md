---
title: Overview

---
## Introduction

The **TestQuality CLI** is a robust, open-source command-line tool that helps you streamline your testing workflows with TestQuality projects. It allows you to programmatically upload automated test results in JUnit XML format — including support for attachments and defect linking — directly from your local environment or CI/CD pipelines.

🔗 **GitHub Repository**: [https://github.com/BitModern/testQualityCli](https://github.com/BitModern/testQualityCli)


### Why Use the TestQuality CLI?

The TestQuality CLI helps teams manage testing efficiently by enabling powerful automation and seamless integration.

- **Automated Result Uploads**: Quickly upload JUnit XML test results to TestQuality.
- **CI/CD Integration**: Integrate effortlessly with GitHub Actions, GitLab, Jenkins, and other pipelines.
- **Attachment & Defect Tagging**: Link test results with logs, screenshots, and issues using simple tags.
- **Programmatic Project Control**: Access, update, and restore test plans, suites, and runs via CLI.
- **Open Source**: Actively maintained and open for community contributions.

## Prerequisites

Before you begin, make sure you have the following:

- **Node.js and npm** – Required for installing the CLI via npm.
- **A TestQuality Account** – You'll need credentials to authenticate.
- **A Target Cycle in TestQuality** – Create a cycle in your project where results will be uploaded.
- **Automated Test Results** – Your test framework should generate results in JUnit XML format.

## Installation

You can install the TestQuality CLI using npm or download a standalone binary, depending on your environment.

---

### Option 1: Install via npm

Install the CLI globally using npm (or your preferred Node.js package manager):

```bash
npm install -g @testquality/cli
```

Once installed, you can run the CLI with `testquality` command.

### Option 2: Download Standalone Binary

If you prefer not to use npm or need a self-contained executable (e.g., for CI/CD environments), you can download a compiled binary. These binaries include the Node.js runtime.

#### Download

Use the command below to download the binary. Replace `{{ version }}` with the actual release version (e.g., `v1.0.0`):

```bash
wget https://github.com/BitModern/testQualityCli/releases/download/{{ version }}/testquality-linux -O testquality
```

Replace `{{ version }}` with the actual release tag (e.g., `v1.0.0`), and choose the appropriate binary for your operating system:

- `testquality-win.exe` – **Windows**
- `testquality-macos` – **macOS**
- `testquality-linux` – **Linux**
- `testquality-alpine` – **Alpine Linux**

#### Set Permissions

Once downloaded, grant execute permissions to the binary:

```bash
chmod 744 testquality
```
For easier access, consider moving the binary to a directory in your `PATH` (e.g., `/usr/local/bin` for Linux/macOS):

```bash
sudo mv testquality /usr/local/bin
```

> **Note for Alpine Linux:**  
> If you're using the standalone binary on Alpine Linux, you must install `libstdc++`:

```bash
apk add --no-cache libstdc++
```

## Authentication

You need to authenticate with TestQuality to use the CLI. There are two methods:

---

### 1. Login with Email and Password

Use your TestQuality email and password to log in:

```bash
testquality login your_email@example.com YourPassword
```

**Save Credentials**: To avoid logging in repeatedly, include the `--save` flag. This will store your authentication token locally for subsequent commands.

```bash
testquality login your_email@example.com YourPassword --save
```

### 2. Personal Access Token (PAT)

You can also authenticate using a **Personal Access Token (PAT)** — ideal for secure, reusable access in CI/CD environments.

#### What is a PAT?

A PAT is a long-lived, secure token you can use instead of your password for CLI and API access.  
It’s especially useful in automated workflows where interactive login is not practical.

**Security Tip:** Keep your PAT secret — it grants full access to your TestQuality account.

#### Creating a PAT

To create a Personal Access Token:

1. Log in to your TestQuality account.
2. Click your username in the top right corner.
3. Select **Integrations** from the dropdown.
4. In the **Personal Access Token** section, click the ➕ to create a new token.
5. Give it a name and click **Create**.

If you already have a PAT, you can proceed to use it with the CLI.

#### Option A: Use an Environment Variable

Set your PAT as an environment variable:

```bash
export TQ_ACCESS_TOKEN=your_personal_access_token
```
The CLI will automatically detect and use this token for all commands.

**Option B: Command Line Argument**  

Add the `--access_token=<YOUR_PAT>` argument to any command:

```bash
testquality upload_test_run 'path/to/*.xml' \
  --project_name=MyProject \
  --plan_name=MyPlan \
  --access_token=your_personal_access_token
```

## Core Usage: Uploading Test Results

This is the primary function of the CLI. Ensure your test results are in JUnit XML format.

### Basic Upload

```bash
testquality upload_test_run 'sampleXml/*.xml' --project_name="Your Project Name" --plan_name="Your Cycle Name"
```

- Replace `'sampleXml/*.xml'` with the glob pattern matching your JUnit XML files.
- Replace `"Your Project Name"` and `"Your Cycle Name"` with the actual names from your TestQuality instance.

### Including Attachments

Attach files like screenshots or logs to your test results.

- **From Test Name Tag**: `[[ATTACHMENT|ScreenshotFileName.png]]`  
  Example: `Test with UI screenshot [[ATTACHMENT|error_screenshot.png]]`

- **From Console Output**: `[[ATTACHMENT|path/to/your/file.log]]`  
  Example: If your test prints `[[ATTACHMENT|logs/test_run_details.log]]` to console output.

> **Important:** When using attachments, you must specify the root directory where these attachment files are located using the `--run_result_output_dir` option:

```bash
testquality upload_test_run 'output/results/*.xml' \
  --project_name="MyProject" \
  --plan_name="MainCycle" \
  --run_result_output_dir="output/attachments_and_logs/"
```

In this example:

- If a test tag mentions `[[ATTACHMENT|error_screenshot.png]]`, the CLI will look for:  
  `output/attachments_and_logs/error_screenshot.png`

- If console output mentions `[[ATTACHMENT|logs/test_run_details.log]]`, it will look for:  
  `output/attachments_and_logs/logs/test_run_details.log`

### Linking Defects

You can link test results to defects in **GitHub** or **Jira** directly from your test reports.  
Modify your test names or include console output using the following formats:

- **GitHub Defects**: `[[DEFECT|GH_ISSUE_NUMBER]]`  
  Example: `My Test Case [[DEFECT|22]]`

- **Jira Defects**: `[[DEFECT|JIRA_ISSUE_KEY]]`  
  Example: `Another Test Scenario [[DEFECT|TQ-123]]`

The CLI will parse these tags and create the necessary links in TestQuality.

## Other Common Commands

### Upload CSV Files

For specific scenarios, you might need to upload test results using a CSV file:

```bash
testquality upload_csv ./test_run_results.csv --cf ./test_run_results.config
```
**Note:** Ensure you have the corresponding config file for your CSV structure.

## Getting Help

To see a list of all available commands:

```bash
testquality --help
```

For help with a specific command (e.g., `login`):

```bash
testquality login --help
```

To further explore and manage your projects and plans, you can refer to the complete [list of available CLI commands](/testquality_cli/reference). 

## Advanced Usage

### Restoring a Plan or Suite

This section covers how to recover deleted items in your TestQuality project.

#### Restore a Plan

1. Log in (if you haven't already).
2. List deleted plans:

```bash
testquality plans --revision_log -p _sort=-updated_at -p operation=delete
```

3. Restore the plan using its ID:

```bash
testquality restore --plan_id <PLAN_ID>
```

### Restore a Suite

1. Login.
2. List deleted suites:

```bash
testquality suites --revision_log -p _sort=-updated_at -p operation=delete
```
3. Find associated plans for the deleted suite:

```bash
testquality plan_suite --revision_log -p _sort=-updated_at -p operation=delete -p suite_id=<SUITE_ID>
```

4. Restore the suite with its ID and an associated plan ID:

```bash
testquality restore --suite_id <SUITE_ID> --plan_id <ASSOCIATED_PLAN_ID>
```

### Using Custom Parameters

You can pass additional parameters to the API using the `--params` prefix:

```bash
testquality some_command --params.per_page -1 --params._with test
```
This translates to API parameters: `{ per_page: -1, _with: 'test' }`

## Contributing (For Developers)

If you want to contribute to the development of the TestQuality CLI itself, follow the steps below to set up your development environment.

### Development Environment

The project uses **Yarn** for dependency management. You'll need **Node.js** and **Yarn** installed.

**Clone the repository and install dependencies:**

```bash
yarn install
```

**Running in Development Mode (with watch):**  
This command will watch for file changes and automatically rebuild:

```bash
yarn dev
```

**Running a Specific Command Directly (without watch):**  
Use `yarn start` followed by the command and its arguments:

```bash
yarn start login <username> <password>
```

(Replace `<username>` and `<password>` or other command arguments as needed.)

**Building for Production:**  
This command builds the project for production (creates the binaries mentioned in the alternative installation):

```bash
yarn build
```