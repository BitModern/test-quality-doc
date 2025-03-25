---
title: Import from CSV/XML/Gherkin
---


---
In TestQuality, you have the ability to import tests and test results from various sources, including XML, CSV, and Gherkin feature files. This guide will walk you through the different methods and options available for importing data.

### Accessing the Import Screen

There are two ways to reach the Import screen in TestQuality:

1. **From the Tests Tab**:
   - You can import tests from a file using our Import function. Follow these steps:
     - Go to the Tests tab.
     - From the menu on the top right of the Tests pane, click the ellipsis (…) button.
     - Click on 'Import Tests.'

2. **From Your Profile Menu**:
   - You can also access the Import screen by going to your profile menu in the top-right side of your screen and clicking on 'Automation & Imports.'

### Test Automation Import (XML)

To import test automation results in XML format, follow these steps:

1. Drag and drop your XML file(s) into the dotted pane, or click to automatically open a file browser window to choose one or multiple local files.

2. Once your file(s) have been added, you can optionally choose a Cycle and Folder that you would like to link to your test run result.

3. Click 'Import' to process the file(s).

### CSV File Import

To import tests and runs, contained in a CSV file, follow these steps:

1. Drag and drop your CSV file(s) into the dotted pane, or click to automatically open a file browser window to choose one or multiple local files.

2. If you need an example CSV file format, you can export a test using the command menu in the Tests tab. Select a test, and from the command menu, choose 'Export Tests.' Select CSV, and it will download a CSV file that you can use as a template for your import.

3. Click 'Import' to process the file.

### Gherkin Feature Files Import

To import Gherkin feature files, follow these steps:

1. Drag and drop your Gherkin file(s) into the dotted pane, or click to automatically open a file browser window to choose one or multiple local files.

2. Similar to the XML import, you can optionally choose a Cycle and Milestone to link to your test run result.

3. If your Gherkin file is a Gherkin-based test results JSON file, please select the 'Automated run results' checkbox.

4. Click 'Import' to process the file.

### Additional Information

If you want to import test result XML files via the CLI tool or API, you can refer to our open-source CLI tool on GitHub: [TestQuality CLI](https://github.com/BitModern/testQualityCli). It supports various Continuous Integration platforms like Jenkins, Cloudbees, Circle CI, and Travis CI for uploading test results.