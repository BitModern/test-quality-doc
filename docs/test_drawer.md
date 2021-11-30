---
title: The Test Drawer
---

When you click on a test in a test list, the Test Drawer opens to give you more details. 

<div class="img-with-text">
    <img src="\img\Screens\test_drawer.png" alt="Test Drawer image" width="400"  class="center"/>
    <p></p> 
</div>

## Overview

### Precondition
A Markdown based free text field that you can add anything that needs to be in place, or done before the test steps are carried out.

### Steps
Steps are the procedure that your tester will follow to complete the test execution. Each time you add a step, it is necessary to save the changes.

Expected Result - When you add text to the Expected Result field, it will become visible when you close the edit. Leaving the field empty will keep the field hidden. The expected result can be added to any step, which you may wish to use to help your tester ensure each step is successful. Or you may wish to only use an Expected Result on the final step, so the tester can know what the test result should be overall.

### Case Type
Depending on your type of test you can set a Case Type to define if your test is for example a Functionality, Performance, Security, Usability, Accessibility, Compatibility, Destructive etc. You can also set your own Case Type in the [Lookup Data](administration/lookup_data) section.  
### Case Priority
Test Priority is a way to prioritise and schedule your test cases. You can modify the priority options in the [Lookup Data](administration/lookup_data) section. By default, TestQuality comes with the following priority modes: Lowest, Low, Medium, High, Highest. This can help you plan your testing schedules, and also help you view your testing efforts by  [filtering](Filtering) those tests that you consider a higher priority. 
### Assigned to
Assigning a test to a user in your organisation will help you identify the tests that are handled by different members of your team, but also when a [Run](run) is made that includes the assigned test, the Test in executable mode will be added to the assigned user's [ToDo list](todo_list).  
### Is Automated
This can be set manually on a test to indicate that it is an automated test, or when importing results.

### Cycles
The Cycles that the test is linked to.

### Folders

### Label(s)
A list of any labels that have been added to the test.

### Test Quality
An indicator of the test value. Calculated from the behaviour surrounding this test. If a defect was logged, if the defect was fixed, and other actions surrounding the test all affect the Quality score.

### Estimate
An estimate of how long the test takes to process.
### Attachments

### Activity

### Leave a comment


- Precondition - Anything that nees to be in place, or done before the test steps are carried out.
- Steps - The steps of the test are what is carried out and comprise your test. There  must always be at least one step in any test.
- Expected result - In each step, you have the option of adding an expected result. This is because at any step, a test could fail, and the tester may want to know what to expect during each step. To add an expected result, edit the test step and you will see the text box for Expected Result at the bottom of the edit pane. If you add text to the Expected Result, it will be visible when you close the editing pane. If no text is added, the Expected result will be hidden.
- Case Type - The default test case types are: Accessibility, Compatibility, Destructive, Functionality, Performance, Security, Usability, Internationalisation. It is possible to add custom Case Types in the administration section 'Lookup Data'.
- Case Priority - The priority setting for your test cases. The default settings are Lowest, Low, Medium, High, Highest. It is possible to add custom Case Types in the administration section 'Lookup Data'.
- Assigned to - You can assign tests to a user. This will also assign the
- Is Automated - 

- Folders - The folders that the test is linked to.
- Label(s) - A list of any labels that have been added to the test.
- Test Quality - An indicator of the test value. Calculated from the behaviour surrounding this test. If a defect was logged, if the defect was fixed, and other actions surrounding the test all affect the Quality score.
- Estimate - An estimate of how long the test takes to process.
- Custom Properties - Any custom properties that you have applied to your tests. Custom properties can be added in the [Customization](administration/customization)
- Attachments - A list of any attachments that have been linked to the test.

##  Runs and Defects

- Run Results
- Defects

##  Requirements

List of requirements that are linked to this test.
Requirements come from a third party system, such as GitHub and Jira. Tracing test cases back to requirements helps us understand the origin of the tests. Also associated tests help us determine if we have created coverage for our requirements.

It is also possible to link or add a new requirement here, using the Add Requirement button at the bottom of the drawer.

