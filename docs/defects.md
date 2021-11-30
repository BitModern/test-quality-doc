---
title: Defects
---
Often when a test fails the resulting action is to open a related defect in your Defect Tracking system.

TestQuality integrates with GitHub and Jira. If you want to log a defect, it can be created from a test run. 

When a defect is created, there is no local version saved in TestQuality because the integration is able to create an issue directly in your repository on GitHub or Jira. A link to that defect is then referenced in the test.

To create a defect directly in the test:
- Open the Runs tab.
- Select a test so that the test drawer opens.
- Click 'Log Defect' button in the bottom right of the test drawer. 
  - *Note*: If there is no integration set up, you will be prompted to set up an integration before continuing.
 - Click on a discovered defect and click 'Link' button
   
*or to create a defect* 
- Type the name of the defect that you would like to create.








<div class="img-with-text">
    <p> To filter the test list, click on the '+ filter' button. <img src="\img\Screens\filter_button.png" alt="Filter button image" width="200" />
   </p> 
</div>

In the popup, select the item you would like to filter by.
You can filter the test list by Author, Case Type, Case Priority, Assignee, Automated, Label, Cycle, Name, or Status (available in Test Run).

<div class="img-with-text">
    <p> <img src="\img\Screens\filter_list.png" alt="Filter list image" width="400" />
   </p> 
</div>

