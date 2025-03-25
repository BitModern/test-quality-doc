---
title: Import from TestRail

---

TestQuality provides a seamless way to import test cases, plans, and related data directly from **TestRail** into your TestQuality workspace. Unlike other importers that rely on **XML file uploads**, TestQuality directly connects with your **TestRail instance** via API authentication, allowing you to **select and import projects effortlessly**.

### Key Features of the TestRail Importer:
- **Direct Connection**: Authenticate using your TestRail instance URL and credentials (email & API key/password).
- **Project Selection**: Choose from a list of projects in your TestRail instance.
- **Comprehensive Import**: Migrate essential testing artifacts, including **test cases, sections, milestones, runs, results, priorities, configurations, and users**.
- **Automated Data Transfer**: Avoid the manual effort of exporting/importing XML files.

## Steps to Import from TestRail

### Step 1: Access the TestRail Importer
1. Navigate to **TestQuality** and open the **Test Cases** module.
2. Click on the **Import from TestRail** option.

### Step 2: Provide TestRail Credentials
1. Enter your **TestRail Instance URL** (e.g., `https://your-testrail-instance.testrail.io`).
2. Provide your **email** linked to TestRail.
3. Enter your **password** or **API key**.  
   🔹 *You can find your API key in TestRail under "My Settings".*
4. Click **Save** to establish a connection.

### Step 3: Select a TestRail Project
1. Once authenticated, TestQuality will fetch a list of all projects in your TestRail instance.
2. Select the **project** you wish to import.
3. Click **Import** to initiate the data transfer.

### Step 4: Import Process
- TestQuality will begin importing the selected project's data.
- The system will **automatically map** sections, test cases, and configurations.
- You will see a **progress indicator** during the import.

### Step 5: Finalizing the Import
1. Once the import is complete, you will see a **confirmation message**.
2. Click **Load Project** to view the imported data inside TestQuality.

## Data Mapping from TestRail to TestQuality

The following table outlines how TestRail fields are mapped to TestQuality fields:

<table>
  <thead>
    <tr>
      <th style="text-align: left;">TestRail Field</th>
      <th style="text-align: left;">TestQuality Field</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Attachment</td><td>Attachments</td></tr>
    <tr><td>Case (TestCase)</td><td>Test Cases</td></tr>
    <tr><td>CaseField</td><td>Customization, Test Cases</td></tr>
    <tr><td>CaseFieldStep</td><td>Steps</td></tr>
    <tr><td>CaseType</td><td>Case Type</td></tr>
    <tr><td>Configuration</td><td>Environments</td></tr>
    <tr><td>ConfigurationGroup</td><td>Environments</td></tr>
    <tr><td>CustomStepResult</td><td>Run Tests</td></tr>
    <tr><td>Milestone</td><td>Milestones</td></tr>
    <tr><td>Plan</td><td>Cycles</td></tr>
    <tr><td>Priority</td><td>Case Priority</td></tr>
    <tr><td>Project</td><td>Project</td></tr>
    <tr><td>Result</td><td>Run Tests</td></tr>
    <tr><td>ResultFields</td><td>Run Tests</td></tr>
    <tr><td>Role</td><td>Roles</td></tr>
    <tr><td>Section</td><td>Folder</td></tr>
    <tr><td>Status</td><td>Status</td></tr>
    <tr><td>Test</td><td>Test Cases</td></tr>
    <tr><td>User</td><td>Users</td></tr>
  </tbody>
</table>


## Limitations

The following TestRail fields are **not currently supported** for import into TestQuality:

- **Bdd**
- **Dataset**
- **Group**
- **Report**
- **SharedStep**
- **Suite**
- **Template**
- **Variable**

These fields may require manual adjustments post-import if necessary.

## Conclusion

TestQuality's TestRail importer simplifies the migration process by providing a **direct connection** and eliminating the need for XML exports. This streamlined workflow helps teams transition their test management seamlessly while retaining structured data integrity.

Start your import today and migrate your TestRail test cases into **TestQuality** efficiently!
