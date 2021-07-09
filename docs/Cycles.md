---
title: Cycles
---


Cycles are collections of tests and folders that you want to run over and over again, perhaps you want to specify a particular environment or a particular tester, Cycles are part of your test plan and are used to achieve a particular testing goal.

<div class="img-with-text">
    <img src="\img\Screens\cycles.png" alt="Cycles Screen image" width="400"  class="center"/>
    <p></p> 
</div>

###  Overview 
The Overview tab is a list of all the items that make up the test itself. 

- Precondition - Anything that needs to be in place, or done before the test steps are carried out. 
- Steps - The steps of the test are what is carried out and comprise your test. There  must always be at least one step in any test. 
- Expected result - In each step, you have the option of adding an expected result. This is because at any step, a test could fail, and the tester may want to know what to expect during each step. To add an expected result, edit the test step and you will see the text box for Expected Result at the bottom of the edit pane. If you add text to the Expected Result, it will be visible when you close the editing pane. If no text is added, the Expected result will be hidden.
- Case Type - The default test case types are: Accessibility, Compatibility, Destructive, Functionality, Performance, Security, Usability, Internationalisation. It is possible to add custom Case Types in the administration section 'Lookup Data'.
- Case Priority - The priority setting for your test cases. The default settings are Lowest, Low, Medium, High, Highest. It is possible to add custom Case Types in the administration section 'Lookup Data'.
- Assigned to - You can assign tests to a user. This will also assign the 
- Is Automated
- Cycles
- Folders
- Label(s)
- Test Quality
- Estimate
- Custom Properties
- Attachments

## Test List
A list of all your tests. Great for searching, organising and managing.
Create folders and sub-folders to arrange your tests in to logical sequences.

### [Filtering](Filtering.md) your tests




###  Runs and Defects

- Run Results
- Defects


## The Test Drawer
When you select a test in the test list you will open the sliding Test Drawer.
The test drawer has 3 tabs that give further information about the test.




###  Requirements

List of requirements that are linked to this test. 
Requirements come from a third party system, such as GitHub and Jira. Tracing test cases back to requirements helps us understand the origin of the tests. Also associated tests help us determine if we have created coverage for our requirements.

It is also possible to link or add a new requirement here, using the Add Requirement button at the bottom of the drawer.

