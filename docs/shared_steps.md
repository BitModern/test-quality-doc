---
title: Shared Steps
---

Shared Steps in TestQuality enable you to maintain a consistent testing approach by facilitating the reuse of steps across multiple test cases, thereby reducing redundancy and effort in test case management. 

You can easily create a Shared Step from an existing step or utilize them to construct or update test cases. Here's how:

## Creating a Shared Step

### From an Existing Step

- **In Edit/Create Test Case**: Click the **Convert to Shared Step** icon next to the desired step to share it.

*Create Test Case screen*

![img_82.png](img/img_82.png)

After clicking `Convert to Shared Step`, the step becomes shared, with a corresponding icon displayed.

![img_83.png](img/img_83.png)

*Edit Test Case screen*

![img_84.png](img/img_84.png)

After clicking `Convert to Shared Step`, the step becomes shared, with a corresponding icon displayed.

![img_85.png](img/img_85.png)

## Using Shared Steps in Test Cases

- **Edit/Create Test Case Screen**: Open the test case you are editing or creating a new one. Click the **Add Shared Steps** icon to view available steps. Use the search bar to quickly find specific shared steps.


![img_86.png](img/img_86.png)

After clicking `Add Shared Step`, select steps from the list in the opened dialog by checking the checkboxes and clicking 'Add.' These selected steps will then be added to the test case.

![img_87.png](img/img_87.png)

**Shared Step Auto-Detection**

This feature automatically identifies existing shared steps when creating new steps and helps users avoid redundancy by promoting the reuse of shared steps.

![img_88.png](img/img_88.png)

## Modifying Shared Steps

### Updates and Deletions

- **Update**: Modify the shared step in any test case and save. Changes apply to all test cases using this Shared Step.
- **Delete**: Removing a Shared Step deletes it from all referenced test cases. 

<style>
.warning {
    background-color: #f8d7da;
    border-color: #f5c6cb;
    color: #721c24;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid transparent;
    border-radius: .25rem;
}
</style>

<div class="warning" markdown="1">

**Warning:** Exercise caution when removing a Shared Step, as this action can't be undone.

</div>



Shared Steps streamline testing processes, making them more efficient and consistent. This guide enables you to fully leverage Shared Steps, enhancing productivity and testing quality.