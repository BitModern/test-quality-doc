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

<| TestRail Field         | TestQuality Field           |
|------------------------|-----------------------------|
| Attachment             | Attachments                 |
| Case (TestCase)        | Test Cases                  |
| CaseField              | Customization, Test Cases   |
| CaseFieldStep          | Steps                       |
| CaseType               | Case Type                   |
| Configuration          | Environments                |
| ConfigurationGroup     | Environments                |
| CustomStepResult       | Run Tests                   |
| Milestone              | Milestones                  |
| Plan                   | Cycles                      |
| Priority               | Case Priority               |
| Project                | Project                     |
| Result                 | Run Tests                   |
| ResultFields           | Run Tests                   |
| Role                   | Roles                       |
| Section                | Folder                      |
| Status                 | Status                      |
| Test                   | Test Cases                  |
| User                   | Users                       |


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
