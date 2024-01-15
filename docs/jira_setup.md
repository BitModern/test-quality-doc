---
title: Integrate with Jira

---

## Overview
Integrating Jira with TestQuality streamlines your testing process by allowing seamless collaboration and tracking. This guide walks you through the steps to set up this integration.

## Prerequisites
- Active TestQuality and Jira accounts
- Admin rights in both TestQuality and Jira

## Configuration Steps

### Accessing Integration Settings in TestQuality
1. **Navigate to Integrations**: Click your username at the top right corner of TestQuality's interface. Select 'Integrations' from the dropdown menu.

    ![img_50.png](img/img_50.png)

2. **Initiate Jira Integration Setup**: In the Integrations page, find the Jira section and click on 'Link on Jira'. 

    ![img_51.png](img/img_51.png)

#### Connecting to Jira
3. **Jira Login**: Sign in to your Jira account. Ensure you have administrative privileges.

4. **Copying Jira Subdomain**: Your Jira subdomain is part of your Jira URL (e.g., `yoursubdomian.atlassian.net`). Copy this subdomain.
    ![img_52.png](img/img_52.png)

5. **Entering Jira Subdomain in TestQuality**: Return to TestQuality. Paste your copied subdomain into the 'Jira Sub Domain' field.

    
    ![img_53.png](img/img_53.png)

### Setting Up Application Link
6. **Accessing Jira Application Links**: Below the subdomain field in TestQuality, click on the 'Jira Application Links' link. This action opens a new Jira popup for creating application links.

    ![img_54.png](img/img_54.png)

In the Jira page that opens, it will ask for a URL.

![img_55.png](img/img_55.png)

7. **Providing TestQuality URL to Jira**: Copy the TestQuality URL (https://web.testquality.com) provided on the TestQuality page. In Jira, paste this URL into the Application URL field and click 'Continue'.

    ![img_56.png](img/img_56.png)

8. **Handling the Warning Prompt**: A warning message might appear. Click 'Continue' to proceed.

    ![img_58.png](img/img_58.png)


    ![img_59.png](img/img_59.png)

### Completing the Application Link
9. **Configuring Application Link in Jira**: In TestQuality, copy the Application Name. Switch to Jira and paste this name into the 'Application Name' field. Select 'Generic Application' for Application Type field. Check the box at the bottom to create an incoming link, then click 'Continue'.

    ![img_60.png](img/img_60.png)


10. **Finalizing Integration Settings**: Back in TestQuality, copy the 'Consumer Key', 'Consumer Name', and 'Public Key'. Paste these into their respective fields in Jira on Review Link popup and click 'Continue'.

 ![img_61.png](img/img_61.png)
 

![img_63.png](img/img_63.png)


## Completion
Congratulations! Your Jira integration with TestQuality is now configured. TestQuality and Jira are now linked, allowing for efficient test management and issue tracking across both platforms.

## Tips and Troubleshooting
- **Connectivity Issues**: Ensure both TestQuality and Jira are accessible and your internet connection is stable.
- **Permission Errors**: Verify that you have administrative rights in both TestQuality and Jira.
- **URL Mistakes**: Double-check that you've copied the correct URLs and subdomains.
- **Application Link Problems**: If Jira doesn't accept the TestQuality URL, check for any typing errors or extra spaces.
